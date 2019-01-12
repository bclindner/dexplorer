import {
  REQUEST_LIST,
  RECEIVE_LIST,
  FILTER_LIST
} from '../actions/list.js'

const initialState = {
  loading: true,
  list: []
}

export default function list (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_LIST:
      return {
        ...state,
        loading: false,
        list: action.list
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
