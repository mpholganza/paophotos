import React from "react"
import { connect } from 'react-redux'

import { Loading } from "./loading.js"
import { AlbumList } from "./albumList.js"
import { AlbumItem } from "./albumItem.js"
import { Header } from "./header.js"

import { getCurrentUserName } from "../selectors/users.js"

import { loadUsersIfNeeded } from '../actions/users.js'
import { loadAlbumsIfNeeded } from "../actions/albums.js"
import {
  getAlbumListForCurrentUser,
  getAlbumListForCurrentUserIsLoaded,
  getAlbumListForCurrentUserIsLoading
} from "../selectors/albums.js";


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
        if (!currentUserName) return <Loading></Loading>
        return <h3>{`${currentUserName}'s Albums`}</h3>
      })()}
      {(() => {
        if (!albumListIsLoaded) return <Loading></Loading>
        return <AlbumList>{
          albumList.toArray().map((albumId) => {
            return <AlbumItem key={`albumItem-${albumId}`} albumId={albumId}></AlbumItem>
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

