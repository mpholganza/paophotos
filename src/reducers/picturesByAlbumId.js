import { Map, Seq } from 'immutable'
import { mapReducerToKey } from './mapReducerToKey'
import { ActionTypes } from "../actions/actionTypes"

export function mapPicturesByAlbumId() {
  return mapReducerToKey({
    mapActionToKey: (action) => { return action.albumId },
    reducer: reducePictures, 
  })
}

const initialState = Map({
  pictureList: Seq({}),
  isLoading: false,
  error: null
})

function reducePictures(state = initialState, action) {

  switch (action.type) {

    case (ActionTypes.PICTURES_LOAD):

      return state.withMutations((map) => {
        map
          .set("isLoading", true)
          .set("error", null)
      })

    case (ActionTypes.PICTURES_LOAD_COMPLETED):

      return state.withMutations((map) => {
        const { pictures } = action
        const pictureArray = pictures.map((picture) => {
          return picture.id
        })
        map
          .set("pictureList", Seq(pictureArray))
          .set("isLoading", false)
          .set("error", null)
      })

    case (ActionTypes.PICTURES_LOAD_FAILED):

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
