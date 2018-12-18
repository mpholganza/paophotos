import { createSelector } from "reselect"

export const getUsersState = (state) => {
  const usersState = state.users
  return usersState
}

export function getCurrentUserId(state, props) {
  if (!props || !props.match || !props.match.params) return ""
  return props.match.params.userId
}

export const getUserList = createSelector(
  getUsersState,
  (
    usersState
  ) => {
    const userList = usersState.get("userList")
    return userList
  }
)

export const getUserListIsLoaded = createSelector(
  getUserList,
  (
    userList
  ) => {
    return !userList.isEmpty()
  }
)

export const getUserListIsLoading = createSelector(
  getUsersState,
  (
    usersState
  ) => {
    const isLoading = usersState.get("isLoading")
    return isLoading
  }
)

export const getCurrentUser = createSelector(
  getCurrentUserId,
  getUserList,
  (
    userId,
    userList
  ) => {
    
    const user = userList.get(userId)
    return user
  }
)

export const getCurrentUserName = createSelector(
  getCurrentUser,
  (
    user
  ) => {
    if (!user) return ""
    return user.name
  }
)