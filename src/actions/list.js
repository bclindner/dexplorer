import { alphabeticalSortByName } from '../utils/sort'
import api from '../utils/api'

export const getList = () => (dispatch) => {
  dispatch(requestList())
  api('pokemon-species/')
    .then(json => json.results.map(result => ({
      name: result.name,
      prettyName: prettyName(result.name),
      visible: true
    })))
    .then(list => list.sort(alphabeticalSortByName))
    .then(sortedList => dispatch(receiveList(sortedList)))
    .catch(() => dispatch(listError()))
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

export const LIST_ERROR = 'LIST_ERROR'
export const listError = () => ({
  type: LIST_ERROR
})

// helper function for pretty printing the names
const prettyName = (name) => name.split('-').map((word) => {
  // capitalize the first letter of the word
  return word.charAt(0).toUpperCase() + word.substring(1)
  // then re-add the dashes
}).join('-')
