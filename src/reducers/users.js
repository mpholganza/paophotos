import { Map, Set } from 'immutable'
import { ActionTypes } from "../actions/actionTypes"

const initialState = Map({
  userList: Map({}),
  isLoading: false,
  error: null
})

export function reduceUsers(state = initialState, action) {

  switch (action.type) {

    case (ActionTypes.USERS_LOAD):

      return state.withMutations((map) => {
        map
          .set("isLoading", true)
          .set("error", null)
      })

    case (ActionTypes.USERS_LOAD_COMPLETED):

      return state.withMutations((map) => {
        const { userList } = action

        const arrayToObjectByKey = (arr, key) => {
          return arr.reduce((objSoFar, item) => {
            objSoFar[item[key]] = item
            return objSoFar
          }, {})
        }
        
        const users = arrayToObjectByKey(userList, "id")

        map
          .set("userList", Map(users))
          .set("isLoading", false)
          .set("error", null)
      })

    case (ActionTypes.USERS_LOAD_FAILED):

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
