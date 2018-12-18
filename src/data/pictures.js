import { getPicturesURL } from "../config/data"
export function fetchPictures(albumId) {
  const picturesUrl = getPicturesURL(albumId)
  return fetch(picturesUrl)
    .then((resp) => { return resp.json() })
    .then((data) => {
      let pictures = data
      return pictures
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    })
}