import api from '../utils/api'

export const getSpecies = name => dispatch => {
  dispatch(requestSpecies())
  api(`pokemon-species/${name}/`)
    .then(json => {
      dispatch(receiveSpecies(json))
      const defaultVariant = json.varieties.find(variety => variety.is_default)
      dispatch(getVariant(defaultVariant.pokemon.name))
    })
}

export const REQUEST_SPECIES = 'REQUEST_SPECIES'
export const requestSpecies = () => ({
  type: REQUEST_SPECIES
})

export const RECEIVE_SPECIES = 'RECEIVE_SPECIES'
export const receiveSpecies = data => ({
  type: RECEIVE_SPECIES,
  data
})

export const getVariant = name => dispatch => {
  dispatch(requestVariant())
  api(`pokemon/${name}/`)
    .then(json => dispatch(receiveVariant(json)))
}

export const REQUEST_VARIANT = 'REQUEST_VARIANT'
export const requestVariant = () => ({
  type: REQUEST_VARIANT
})

export const RECEIVE_VARIANT = 'RECEIVE_VARIANT'
export const receiveVariant = data => ({
  type: RECEIVE_VARIANT,
  data
})

export const SELECT_GROUP = 'SELECT_GROUP'
export const selectGroup = group => ({
  type: SELECT_GROUP,
  group
})
