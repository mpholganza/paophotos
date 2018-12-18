import { ActionTypes } from "./actionTypes"
import { fetchUsers } from "../data/users"

import { getUserListIsLoaded, getUserListIsLoading } from "../selectors/users.js"

export function loadUsersIfNeeded() {
  return (dispatch, getState) => {
    const state = getState()
    const isLoaded = getUserListIsLoaded(state)
    const isLoading = getUserListIsLoading(state)
    if (!isLoaded && !isLoading) dispatch(loadUsers())
  }
}

export function loadUsers() {

  return (dispatch, getState) => {

    dispatch({
      type: ActionTypes.USERS_LOAD,
    })

    return fetchUsers()
      .then((userList) => {
        dispatch(loadUsersCompleted(userList))
      })
      .catch((error) => {
        dispatch(loadUsersFailed(error))
      })
  }
}

function loadUsersCompleted(userList) {
  return {
    type: ActionTypes.USERS_LOAD_COMPLETED,
    userList
  }
}

function loadUsersFailed(error) {
  return {
    type: ActionTypes.USERS_LOAD_FAILED,
    error
  }
}
