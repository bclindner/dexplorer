import {
  REQUEST_SPECIES,
  RECEIVE_SPECIES,
  REQUEST_VARIANT,
  RECEIVE_VARIANT
} from '../actions/info.js'

const initialState = {
  ready: false,
  loading: false,
  species: {},
  variant: {}
}

export default function info (state = initialState, action) {
  switch (action.type) {
    case REQUEST_SPECIES:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_SPECIES:
      return {
        ...state,
        loading: false,
        species: action.data
      }
    case REQUEST_VARIANT:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_VARIANT:
      return {
        ...state,
        loading: false,
        variant: action.data
      }
    default: return state
  }
}
