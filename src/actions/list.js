export const getList = () => (dispatch) => {
  dispatch(requestList())
  window.fetch('https://pokeapi.co/api/v2/pokemon-species')
    .then(resp => resp.json())
    // simplify api result
    .then(json => json.results.map(result => ({
      name: result.name,
      prettyName: prettyName(result.name),
      visible: true
    })))
    // sort the list alphabetically
    .then(list => list.sort((a, b) => a.name > b.name))
    .then(sortedList => dispatch(receiveList(sortedList)))
}

export const REQUEST_LIST = 'REQUEST_LIST'
export const requestList = () => ({
  type: REQUEST_LIST
})

export const RECEIVE_LIST = 'RECEIVE_LIST'
export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list: list
})

export const FILTER_LIST = 'FILTER_LIST'
export const filterList = (term) => ({
  type: FILTER_LIST,
  term: term
})

// helper function for pretty printing the names
const prettyName = (name) => name.split('-').map((word) => {
  // capitalize the first letter of the word
  return word.charAt(0).toUpperCase() + word.substring(1)
  // then re-add the dashes
}).join('-')
