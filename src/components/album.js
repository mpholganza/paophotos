import React from "react"
import { connect } from 'react-redux'

import { getCurrentAlbumTitle } from "../selectors/albums.js"
import {
  getPictureListForCurrentAlbum,
  getPictureListForCurrentAlbumIsLoaded,
  getPictureListForCurrentAlbumIsLoading
} from "../selectors/pictures.js"

import { loadUsersIfNeeded } from '../actions/users.js'
import { loadAlbumsIfNeeded } from "../actions/albums.js"
import { loadPicturesIfNeeded } from "../actions/pictures.js"

import { Loading } from "./loading.js"
import { PictureList } from "./pictureList.js"
import { PictureItem } from "./pictureItem.js"
import { Header } from "./header.js"
import { getCurrentUserName, getCurrentUserId } from "../selectors/users.js";

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
            return <PictureItem key={`pictureItem-${pictureId}`} pictureId={pictureId}></PictureItem>
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
