export function getHomePath() {
  return "/"
}

export function getUserPath(userId) {
  const path = `/u/${userId}`
  return path
}

export function getAlbumPath(userId, albumId) {
  const path = `/u/${userId}/a/${albumId}`
  return path
}

export function getPicturePath(userId, albumId, pictureId) {
  const path = `/u/${userId}/a/${albumId}/p/${pictureId}`
  return path
}

export function getUserPathTemplate(userId) {
  const path = getUserPath(":userId")
  return path
}

export function getAlbumPathTemplate(userId, albumId) {
  const path = getAlbumPath(":userId", ":albumId")
  return path
}

export function getPicturePathTemplate(userId, albumId, pictureId) {
  const path = getPicturePath(":userId", ":albumId", ":pictureId")
  return path
}