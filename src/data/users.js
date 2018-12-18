import { getUsersURL } from "../config/data"
export function fetchUsers() {
  const usersURL = getUsersURL()
  return fetch(usersURL)
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      let users = data
      return users
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    })
}