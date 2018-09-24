import React, { Component } from 'react'

/**
 * Container component for the Pokemon informational display.
 * Makes requests to the PokeAPI and distributes to presentational components.
 */
class PokemonDisplayContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemon: {},
      species: {}
    }
  }
  componentDidMount () {
    this.getPokemonData(this.props.match.params.speciesName)
  }
  async clearPokemonData () {
    // WHY DOES SETSTATE USE CALLBACKS
    return new Promise((resolve, reject) => {
      this.setState({
        pokemon: {},
        species: {},
        speciesLoaded: false,
        pokemonLoaded: false
      }, resolve())
    })
  }
  async getPokemonData (name) {
    console.log('doing it')
    await this.clearPokemonData()
    // get the pokemon-species data
    const pokemonSpeciesEndpoint = `${this.props.baseurl}/api/v2/pokemon-species/${name}/`
    const pokemonVariantEndpoint = `${this.props.baseurl}/api/v2/pokemon/${name}/`
    return Promise.all([
      window.fetch(pokemonSpeciesEndpoint)
        .then(resp => resp.json())
        .then(data => this.setState({species: data, speciesLoaded: true})),
      window.fetch(pokemonVariantEndpoint)
        .then(resp => resp.json())
        .then(data => this.setState({pokemon: data, pokemonLoaded: true}))
    ])
  }
  render () {
    if (this.state.speciesLoaded && this.state.pokemonLoaded) {
      return <PokemonDisplayTest species={this.state.species} pokemon={this.state.pokemon} />
    } else {
      return <h1>Loading</h1>
    }
  }
}

const PokemonDisplayTest = (props) => {
  // set some helper variables (typing props is annoying and clutters the code)
  const pokemon = props.pokemon
  const species = props.species
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>{species.name}</h1>
      <p>
        types:&nbsp;
        {
          pokemon.types.length > 1
            ? <span>{pokemon.types[0].type.name} / {pokemon.types[1].type.name}</span>
            : <span>{pokemon.types[0].type.name}</span>
        }
      </p>
      <p>
        abilities:&nbsp;
        {
          pokemon.abilities.length > 1
            ? <span>{pokemon.abilities[0].ability.name} / {pokemon.abilities[1].ability.name}</span>
            : <span>{pokemon.abilities[0].ability.name}</span>
        }
      </p>
      <p>height: {pokemon.height / 10}m</p>
      <p>weight: {pokemon.weight / 10}kg</p>
      <p>gender rate: {species.gender_rate / 8 * 100}% female to {(1 - species.gender_rate / 8) * 100}% male</p>
      <p>stats: </p>
      <table>
        <thead>
          <tr>
            <td>stat name</td>
            <td>base stat</td>
            <td>effort value</td>
          </tr>
        </thead>
        <tbody>
          {pokemon.stats.map((stat, i) => (
            <tr key={i}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
              <td>{stat.effort}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PokemonDisplayContainer
