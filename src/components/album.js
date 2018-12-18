import React from "react"
import { connect } from 'react-redux'

import { getCurrentAlbumTitle } from "../selectors/albums.js"
import {
  getPictureListForCurrentAlbum,
  getPictureListForCurrentAlbumIsLoaded,
  getPictureListForCurrentAlbumIsLoading
} from "../selectors/pictures.js"

import { loadPicturesIfNeeded } from "../actions/pictures.js"

import { Loading } from "./loading.js"
import { PictureList } from "../components/pictureList.js"
import { PictureItem } from "../components/pictureItem.js"
import { Link } from "react-router-dom"

class AlbumComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    const { albumId } = this.props.match.params
    dispatch(loadPicturesIfNeeded(albumId, this.props))
  }

  render() {
    const { albumTitle, pictureList, pictureListIsLoaded } = this.props
  
    return <>
      {(() => {
        if (!albumTitle) return null
        return <h3>{albumTitle}</h3>
      })()}
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
    albumTitle: getCurrentAlbumTitle(state, props),
    pictureList: getPictureListForCurrentAlbum(state, props),
    pictureListIsLoaded: getPictureListForCurrentAlbumIsLoaded(state, props),
    pictureListIsLoading: getPictureListForCurrentAlbumIsLoading(state, props)
  }
}

export const Album = connect(mapStateToProps)(AlbumComponent)
