const baseURL = 'https://pokeapi.co'

export async function getPokemonData (name) {
  // get the pokemon data with this endpoint
  const endpoint = `${baseURL}/api/v2/pokemon/${name}/`
  return window.fetch(endpoint)
    // convert to json before returning
    .then(resp => resp.json())
}
export async function getSpeciesData (name) {
  const endpoint = `${baseURL}/api/v2/pokemon-species/${name}/`
  return window.fetch(endpoint)
    // convert to json before returning
    .then(resp => resp.json())
}
export async function getPokemonList () {
  // get the list of pokemon species
  const endpoint = `${baseURL}/api/v2/pokemon-species/`
  return window.fetch(endpoint)
    .then(resp => resp.json())
    // convert the results to json
    .then(json => json.results)
    // sort the list alphabetically
    .then(results => results.sort((a, b) => a.name > b.name))
}
