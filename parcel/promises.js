function toJson (response) {
  return response.json()
}
function logIdentity (value) {
  console.log(value)
}
function logError (err) {
  console.error(err)
}
fetch('https://api.github.com/gists/public')
  .then(toJson)
  .then(logIdentity)
  .catch(logError)
console.log('data', data)
