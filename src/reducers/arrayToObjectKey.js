export const arrayToObjectByKey = (arr, key) => {
  return arr.reduce((objSoFar, item) => {
    objSoFar[item[key]] = item
    return objSoFar
  }, {})
}
