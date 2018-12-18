import { createSelector } from "reselect"
import { Seq } from "immutable"
import { getCurrentUserId } from "./users.js"

export function getCurrentAlbumId(state, props) {
  return props.albumId || props.match.params.albumId
}

export const getAlbumListState = (state) => {
  const usersState = state.albumsByUserId
  return usersState
}

export const getAlbumsState = (state) => {
  const usersState = state.albums.get("albums")
  return usersState
}

export const getAlbum = createSelector(
  getCurrentAlbumId,
  getAlbumsState,
  (
    albumId,
    albumsState
  ) => {
    const album = albumsState.get(`${albumId}`)
    return album
  }
)

export const getCurrentAlbumTitle = createSelector(
  getAlbum,
  (
    album
  ) => {
    if (!album) return ""
    return album.title
  }
)

export const getAlbumListStateForCurrentUser = createSelector(
  getAlbumListState,
  getCurrentUserId,
  (
    albumListState,
    userId
  ) => {
    const albumListStateForUser = albumListState.get(userId)
    return albumListStateForUser
  }
)

export const getAlbumListForCurrentUserIsLoaded = createSelector(
  getAlbumListStateForCurrentUser,
  (
    albumListStateForCurrentUser
  ) => {
    if (!albumListStateForCurrentUser) return false
    const albumListForCurrentUser = albumListStateForCurrentUser.get("albumList")
    return !albumListForCurrentUser.isEmpty()
  }
)

export const getAlbumListForCurrentUserIsLoading = createSelector(
  getAlbumListStateForCurrentUser,
  (
    albumListStateForCurrentUser,
  ) => {
    if (!albumListStateForCurrentUser) return false
    const isLoading = albumListStateForCurrentUser.get("isLoading")
    return isLoading
  }
)

export const getAlbumListForCurrentUser = createSelector(
  getAlbumListStateForCurrentUser,
  (
    albumListStateForCurrentUser
  ) => {
    if (!albumListStateForCurrentUser) return Seq({})
    const albumList = albumListStateForCurrentUser.get("albumList")
    return albumList
  }
)

