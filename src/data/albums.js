import { getAlbumsURL } from "../config/data"
export function fetchAlbums(userId) {
  const albumsUrl = getAlbumsURL(userId)
  return fetch(albumsUrl)
    .then((resp) => { return resp.json() })
    .then((data) => {
      let albums = data
      return albums
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    })
}