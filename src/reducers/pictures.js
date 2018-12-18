import { Map } from 'immutable'
import { ActionTypes } from "../actions/actionTypes"

const initialState = Map({
  pictures: Map({})
})

export function reducePictures(state = initialState, action) {

  switch (action.type) {

    case (ActionTypes.PICTURES_LOAD_COMPLETED):

      return state.withMutations((map) => {
        const { pictures } = action

        const arrayToObjectByKey = (arr, key) => {
          return arr.reduce((objSoFar, item) => {
            objSoFar[item[key]] = item
            return objSoFar
          }, {})
        }

        const newPictures = arrayToObjectByKey(pictures, "id")
        const oldPictures = map.get("pictures")

        map.set("pictures", oldPictures.merge(newPictures))
      })

    default:

      return state

  }

}
