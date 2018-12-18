import { Seq } from "immutable"
import { createSelector } from "reselect"

import { getCurrentAlbumId } from "./albums.js"

export function getCurrentPictureId(state, props) {
  return props.pictureId || props.match.params.pictureId
}

export const getPictureListState = (state) => {
  const picturesListState = state.picturesByAlbumId
  return picturesListState
}

export const getPicturesState = (state) => {
  const usersState = state.pictures.get("pictures")
  return usersState
}

export const getPicture = createSelector(
  getCurrentPictureId,
  getPicturesState,
  (
    pictureId,
    picturesState
  ) => {
    const album = picturesState.get(`${pictureId}`)
    return album
  }
)

export const getPictureListStateForCurrentAlbum = createSelector(
  getPictureListState,
  getCurrentAlbumId,
  (
    pictureListState,
    albumId
  ) => {
    const pictureListStateForUser = pictureListState.get(`${albumId}`)
    return pictureListStateForUser
  }
)

export const getPictureListForCurrentAlbumIsLoaded = createSelector(
  getPictureListStateForCurrentAlbum,
  (
    pictureListStateForCurrentAlbum
  ) => {
    if (!pictureListStateForCurrentAlbum) return false
    const pictureListForCurrentAlbum = pictureListStateForCurrentAlbum.get("pictureList")
    return !pictureListForCurrentAlbum.isEmpty()
  }
)

export const getPictureListForCurrentAlbumIsLoading = createSelector(
  getPictureListStateForCurrentAlbum,
  (
    pictureListStateForCurrentAlbum,
  ) => {
    if (!pictureListStateForCurrentAlbum) return false
    const isLoading = pictureListStateForCurrentAlbum.get("isLoading")
    return isLoading
  }
)

export const getPictureListForCurrentAlbum = createSelector(
  getPictureListStateForCurrentAlbum,
  (
    pictureListStateForCurrentAlbum
  ) => {
    if (!pictureListStateForCurrentAlbum) return Seq({})
    const pictureList = pictureListStateForCurrentAlbum.get("pictureList")
    return pictureList
  }
)
