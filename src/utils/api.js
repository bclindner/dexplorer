export default function api (endpoint, raw = false) {
  if (!raw) endpoint = `https://pokeapi.co/api/v2/${endpoint}`
  return window.fetch(endpoint, {
    cors: 'no-cors'
  })
    .then(resp => {
      if (!resp.ok) {
        throw resp
      } else {
        return resp.json()
      }
    })
}
