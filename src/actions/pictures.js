import { ActionTypes } from "./actionTypes"
import { fetchPictures } from "../data/pictures"

import {
  getPictureListForCurrentAlbumIsLoaded,
  getPictureListForCurrentAlbumIsLoading
} from "../selectors/pictures.js"

export function loadPicturesIfNeeded(albumId, props) {
  return (dispatch, getState) => {
    const state = getState()
    const isLoaded = getPictureListForCurrentAlbumIsLoaded(state, props)
    const isLoading = getPictureListForCurrentAlbumIsLoading(state, props)
    if (!isLoaded && !isLoading) dispatch(loadPictures(albumId))
  }
}

function loadPictures(albumId) {

  return (dispatch, getState) => {

    dispatch({
      type: ActionTypes.PICTURES_LOAD,
      albumId
    })

    return fetchPictures(albumId)
      .then((pictures) => {
        dispatch(loadPicturesCompleted(albumId, pictures))
      })
      .catch((error) => {
        dispatch(loadPicturesFailed(albumId, error))
      })
  }
}

function loadPicturesCompleted(albumId, pictures) {
  return {
    type: ActionTypes.PICTURES_LOAD_COMPLETED,
    albumId,
    pictures
  }
}

function loadPicturesFailed(albumId, error) {
  return {
    type: ActionTypes.PICTURES_LOAD_FAILED,
    albumId,
    error
  }
}
