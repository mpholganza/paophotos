import React from "react"
import { connect } from "react-redux"

// Selectors
import { getCurrentAlbumTitle } from "../selectors/albums"
import {
  getPictureListForCurrentAlbum,
  getPictureListForCurrentAlbumIsLoaded,
  getPictureListForCurrentAlbumIsLoading
} from "../selectors/pictures"
import { getCurrentUserName } from "../selectors/users";

// Actions
import { loadUsersIfNeeded } from "../actions/users"
import { loadAlbumsIfNeeded } from "../actions/albums"
import { loadPicturesIfNeeded } from "../actions/pictures"

// Components
import { Loading } from "./loading"
import { PictureList } from "./pictureList"
import { PictureItem } from "./pictureItem"
import { Header } from "./header"

class AlbumComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    const { albumId } = this.props.match.params
    const { userId } = this.props.match.params
    dispatch(loadUsersIfNeeded(this.props))
    dispatch(loadAlbumsIfNeeded(userId, this.props))
    dispatch(loadPicturesIfNeeded(albumId, this.props))
  }

  render() {
    const { albumId } = this.props.match.params
    const { userId } = this.props.match.params
    const { albumTitle, userName, pictureList, pictureListIsLoaded } = this.props
  
    return <>
      <Header userId={userId} userName={userName} albumId={albumId} albumTitle={albumTitle}></Header>
      {(() => {
        if (!pictureListIsLoaded) return <Loading></Loading>
        return <PictureList>{
          pictureList.toArray().map((pictureId) => {
            return <PictureItem key={`pictureItem-${pictureId}`}
              userId={userId} albumId={albumId} pictureId={pictureId}></PictureItem>
          })
        }</PictureList>
      })()}
    </>
  }

}


const mapStateToProps = (state, props) => {
  return {
    userName: getCurrentUserName(state, props),
    albumTitle: getCurrentAlbumTitle(state, props),
    pictureList: getPictureListForCurrentAlbum(state, props),
    pictureListIsLoaded: getPictureListForCurrentAlbumIsLoaded(state, props),
    pictureListIsLoading: getPictureListForCurrentAlbumIsLoading(state, props)
  }
}

export const Album = connect(mapStateToProps)(AlbumComponent)
