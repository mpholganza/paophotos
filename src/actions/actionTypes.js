import keyMirror from "keymirror"

export const ActionTypes = keyMirror({
  USERS_LOAD: null,
  USERS_LOAD_COMPLETED: null,
  USERS_LOAD_FAILED: null,
  ALBUMS_LOAD: null,
  ALBUMS_LOAD_COMPLETED: null,
  ALBUMS_LOAD_FAILED: null,
  PICTURES_LOAD: null,
  PICTURES_LOAD_COMPLETED: null,
  PICTURES_LOAD_FAILED: null,
  NAVIGATE_TO_HOME: null,
  NAVIGATE_TO_USER: null,
  NAVIGATE_TO_ALBUM: null,
  NAVIGATE_TO_PICTURE: null
})
