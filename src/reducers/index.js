import { combineReducers } from 'redux'

import { reduceUsers } from "./users"
import { mapAlbumsByUserId } from "./albumsByUserId"
import { reduceAlbums } from "./albums"
import { mapPicturesByAlbumId } from "./picturesByAlbumId"
import { reducePictures } from "./pictures"

export const rootReducer = combineReducers({
  users: reduceUsers,
  albums: reduceAlbums,
  pictures: reducePictures,
  albumsByUserId: mapAlbumsByUserId(),
  picturesByAlbumId: mapPicturesByAlbumId()
})