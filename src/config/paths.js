export function getHomePath() {
  return "/"
}

export function getUserPath(userId) {
  const path = `/user/${userId}`
  return path
}

export function getAlbumPath(userId, albumId) {
  const path = `/user/${userId}/album/${albumId}`
  return path
}

export function getPicturePath(userId, albumId, pictureId) {
  const path = `/user/${userId}/album/${albumId}/picture/${pictureId}`
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