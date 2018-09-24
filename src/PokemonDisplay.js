import React, { Component } from 'react'
import { Title } from './Style.js'
import { Container, Row, Col, ResponsiveImg } from './Layout.js'

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
      try {
        this.setState({
          pokemon: {},
          species: {},
          speciesLoaded: false,
          pokemonLoaded: false
        }, resolve())
      } catch (e) {
        reject(e)
      }
    })
  }
  async getPokemonData (name) {
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
    <Container>
      <Row>
        <Col span='3'>
          <ResponsiveImg src={pokemon.sprites.front_default} />
        </Col>
        <Col span='9'>
          <MainInfoDisplay pokemon={pokemon} species={species} />
        </Col>
      </Row>
      <Row>
        <Col span='6'>
          <EVValueViewer stats={pokemon.stats} />
        </Col>
      </Row>
    </Container>
  )
}

const MainInfoDisplay = (props) => (
  <div>
    <p>#{props.species.pokedex_numbers.find(pokedex => pokedex.pokedex.name === 'national').entry_number}</p>
    <Title>{props.species.name}</Title>
    <TypeDisplay types={props.pokemon.types} />
    <AbilityDisplay abilities={props.pokemon.abilities} />
    <p>height: {props.pokemon.height / 10}m</p>
    <p>weight: {props.pokemon.weight / 10}kg</p>
    <GenderDisplay genderRate={props.species.gender_rate} />
    {props.species.evolves_from_species &&
      <p>evolves from {props.species.evolves_from_species.name}</p>
    }
  </div>
)

const EVValueViewer = (props) => (
  <Container>
    <h2>effort values: </h2>
    <Row>
      <Col span='2'>
        <p>HP</p>
        {props.stats.find((stat, i) => stat.stat.name === 'hp').effort}
      </Col>
      <Col span='2'>
        <p>Attack</p>
        {props.stats.find((stat, i) => stat.stat.name === 'attack').effort}
      </Col>
      <Col span='2'>
        <p>Defense</p>
        {props.stats.find((stat, i) => stat.stat.name === 'defense').effort}
      </Col>
      <Col span='2'>
        <p>Sp.Atk.</p>
        {props.stats.find((stat, i) => stat.stat.name === 'special-attack').effort}
      </Col>
      <Col span='2'>
        <p>Sp.Def.</p>
        {props.stats.find((stat, i) => stat.stat.name === 'special-defense').effort}
      </Col>
      <Col span='2'>
        <p>Speed</p>
        {props.stats.find((stat, i) => stat.stat.name === 'speed').effort}
      </Col>
    </Row>
  </Container>
)

const TypeDisplay = (props) => (
  <p>
    types:&nbsp;
    {
      props.types.length > 1
        ? <span>{props.types[0].type.name} / {props.types[1].type.name}</span>
        : <span>{props.types[0].type.name}</span>
    }
  </p>
)

const AbilityDisplay = (props) => (
  <p>
    abilities:&nbsp;
    {
      props.abilities.length > 1
        ? <span>{props.abilities[0].ability.name} / {props.abilities[1].ability.name}</span>
        : <span>{props.abilities[0].ability.name}</span>
    }
  </p>
)

const GenderDisplay = (props) => (
  <p>
    {props.genderRate === -1
      ? <span>genderless</span>
      : <span>gender rate: {props.genderRate / 8 * 100}% female to {(1 - props.genderRate / 8) * 100}% male</span>
    }
  </p>
)

export default PokemonDisplayContainer
