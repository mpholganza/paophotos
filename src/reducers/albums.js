import { Map } from 'immutable'
import { ActionTypes } from "../actions/actionTypes"

const initialState = Map({
  albums: Map({})
})

export function reduceAlbums(state = initialState, action) {

  switch (action.type) {

    case (ActionTypes.ALBUMS_LOAD_COMPLETED):

      return state.withMutations((map) => {
        const { albums } = action

        const arrayToObjectByKey = (arr, key) => {
          return arr.reduce((objSoFar, item) => {
            objSoFar[item[key]] = item
            return objSoFar
          }, {})
        }

        const newAlbums = arrayToObjectByKey(albums, "id")
        const oldAlbums = map.get("albums")

        map.set("albums", oldAlbums.merge(newAlbums))
      })

    default:

      return state

  }

}
