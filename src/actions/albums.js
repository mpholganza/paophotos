import { ActionTypes } from "./actionTypes"
import { fetchAlbums } from "../data/albums"

import {
  getAlbumListForCurrentUserIsLoaded,
  getAlbumListForCurrentUserIsLoading
} from "../selectors/albums"

export function loadAlbumsIfNeeded(userId, props) {
  return (dispatch, getState) => {
    const state = getState()
    const isLoaded = getAlbumListForCurrentUserIsLoaded(state, props)
    const isLoading = getAlbumListForCurrentUserIsLoading(state, props)
    if (!isLoaded && !isLoading) dispatch(loadAlbums(userId))
  }
}

function loadAlbums(userId) {

  return (dispatch, getState) => {

    dispatch({
      type: ActionTypes.ALBUMS_LOAD,
      userId
    })

    return fetchAlbums(userId)
      .then((albums) => {
        dispatch(loadAlbumsCompleted(userId, albums))
      })
      .catch((error) => {
        dispatch(loadAlbumsFailed(userId, error))
      })
  }
}

function loadAlbumsCompleted(userId, albums) {
  return {
    type: ActionTypes.ALBUMS_LOAD_COMPLETED,
    userId,
    albums
  }
}

function loadAlbumsFailed(userId, error) {
  return {
    type: ActionTypes.ALBUMS_LOAD_FAILED,
    userId,
    error
  }
}
