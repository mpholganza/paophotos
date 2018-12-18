import React from "react"
import { connect } from "react-redux"

// Selectors
import { getCurrentUserName } from "../selectors/users"

// Actions
import { loadUsersIfNeeded } from '../actions/users'
import { loadAlbumsIfNeeded } from "../actions/albums"
import {
  getAlbumListForCurrentUser,
  getAlbumListForCurrentUserIsLoaded,
  getAlbumListForCurrentUserIsLoading
} from "../selectors/albums"

// Components
import { Loading } from "./loading"
import { AlbumList } from "./albumList"
import { AlbumItem } from "./albumItem"
import { Header } from "./header"

class UserComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    const { userId } = this.props.match.params
    dispatch(loadUsersIfNeeded(this.props))
    dispatch(loadAlbumsIfNeeded(userId, this.props))
  }

  render() {
    const { userId } = this.props.match.params
    const { currentUserName, albumList, albumListIsLoaded } = this.props
    return <>
      <Header userId={userId} userName={currentUserName}></Header>
      {(() => {
        if (!albumListIsLoaded) return <Loading></Loading>
        return <AlbumList>{
          albumList.toArray().map((albumId) => {
            return <AlbumItem key={`albumItem-${albumId}`} albumId={albumId} {...this.props}></AlbumItem>
          })
        }</AlbumList>
      })()}
    </>
  }
}


const mapStateToProps = (state, props) => {
  return {
    currentUserName: getCurrentUserName(state, props),
    albumList: getAlbumListForCurrentUser(state, props),
    albumListIsLoaded: getAlbumListForCurrentUserIsLoaded(state, props),
    albumListIsLoading: getAlbumListForCurrentUserIsLoading(state, props)
  }
}


export const User = connect(mapStateToProps)(UserComponent)

