import React from 'react'
import PokemonDisplay from './PokemonDisplay.js'
import { Route } from 'react-router-dom'

const App = () => (
  <Route path='/:speciesName' render={
    (props) => <PokemonDisplay {...props} baseurl='https://pokeapi.co' />
  } />
)

export default App
