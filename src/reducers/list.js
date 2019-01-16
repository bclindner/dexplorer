import {
  REQUEST_LIST,
  RECEIVE_LIST,
  FILTER_LIST,
  LIST_ERROR
} from '../actions/list.js'

const initialState = {
  status: 'loading',
  list: []
}

export default function list (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return {
        ...state,
        status: 'loading'
      }
    case RECEIVE_LIST:
      return {
        ...state,
        status: 'ready',
        list: action.list
      }
    case LIST_ERROR:
      return {
        ...state,
        status: 'errored'
      }
    case FILTER_LIST:
      return {
        ...state,
        list: state.list.map(pokemon => ({
          ...pokemon,
          visible: pokemon.name.includes(action.term)
        }))
      }
    default: return state
  }
}
