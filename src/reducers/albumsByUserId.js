import { Map, Seq } from 'immutable'
import { mapReducerToKey } from './mapReducerToKey'
import { ActionTypes } from "../actions/actionTypes"

export function mapAlbumsByUserId() {
  return mapReducerToKey({
    mapActionToKey: (action) => { return action.userId },
    reducer: reduceAlbums, 
  })
}

const initialState = Map({
  albumList: Seq({}),
  isLoading: false,
  error: null
})

function reduceAlbums(state = initialState, action) {

  switch (action.type) {

    case (ActionTypes.ALBUMS_LOAD):

      return state.withMutations((map) => {
        map
          .set("isLoading", true)
          .set("error", null)
      })

    case (ActionTypes.ALBUMS_LOAD_COMPLETED):

      return state.withMutations((map) => {
        const { albums } = action
        const albumArray = albums.map((album) => {
          return album.id
        })
        map
          .set("albumList", Seq(albumArray))
          .set("isLoading", false)
          .set("error", null)
      })

    case (ActionTypes.ALBUMS_LOAD_FAILED):

      return state.withMutations((map) => {
        const { error } = action
        map
          .set("isLoading", false)
          .set("error", error)
      })

    default:

      return state

  }

}
