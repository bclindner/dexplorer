import React from 'react'
import PokemonDisplayContainer from './PokemonDisplay.js'
import { Route } from 'react-router-dom'

const App = () => (
  <Route path='/:speciesName' render={
    (props) => <PokemonDisplayContainer {...props} baseurl='https://pokeapi.co' />
  } />
)

export default App
