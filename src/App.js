import React from 'react'
import PokemonDisplayContainer from './PokemonDisplay.js'
import { Route } from 'react-router-dom'

const App = () => (
  <Route path='/:speciesName' component={PokemonDisplayContainer} />
)

export default App
