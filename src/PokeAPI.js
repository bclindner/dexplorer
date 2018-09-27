/**
 * The base URL for all API requests.
 * May need to be changed if the site goes down (again).
 */
const baseURL = 'https://pokeapi.co/api/v2'

/**
 * Simple helper function to return the JSON of a fetch() request.
 */
function fetchJSON (endpoint) {
  return window.fetch(endpoint)
    .then(resp => resp.json())
}

/**
 * Get a list of all Pokemon species.
 */
export async function getSpeciesList () {
  const endpoint = `${baseURL}/pokemon-species/`
  // make the request
  return fetchJSON(endpoint)
    // for the purposes of the app, only the results are relevant
    .then(data => data.results)
}

/**
 * Get the information for a particular Pokemon species (e.g. Charizard, Dunsparce)
 * @param speciesName The name (or ID) of the species to get.
 */
export async function getSpecies (speciesName) {
  const endpoint = `${baseURL}/pokemon-species/${speciesName}`
  return fetchJSON(endpoint)
}

/**
 * Get data for a particular Pokemon species variant (e.g. Sylveon, Mega Rayquaza)
 * @param pokemonName The name (or ID) of the Pokemon to get.
 */
export async function getPokemon (pokemonName) {
  const endpoint = `${baseURL}/pokemon/${pokemonName}`
  return fetchJSON(endpoint)
}
