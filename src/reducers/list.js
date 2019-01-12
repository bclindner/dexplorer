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
      console.log('list requested')
      return {
        ...state,
        loading: true
      }
    case RECEIVE_LIST:
      console.log('list received')
      return {
        ...state,
        loading: false,
        list: action.list
      }
    case FILTER_LIST:
      console.log('filtering by ' + action.term)
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
