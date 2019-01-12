export default function api (endpoint) {
  return window.fetch(endpoint, {
    cors: 'cors'
  })
}
