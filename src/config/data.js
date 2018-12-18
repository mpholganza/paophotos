export function getAlbumsURL(userId) {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  return url
}

export function getPicturesURL(albumId) {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  return url
}

export function getUsersURL() {
  const url = "https://jsonplaceholder.typicode.com/users"
  return url
}
