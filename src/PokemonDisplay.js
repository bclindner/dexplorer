import React, { Component } from 'react'
import { Wrapper, Sidebar, SearchBar, LoadingSpinner, PokemonList, PokemonListItem } from './Style.js'
import { RG } from './Layout.js'

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
  render () {
    return (
      <Wrapper>
        <RG.Row>
          <RG.Col span='12'>
            <Header />
          </RG.Col>
        </RG.Row>
        <RG.Row>
          <RG.Col span='4'>
            <PokemonSearchBar />
          </RG.Col>
          <RG.Col span='8'>
            <LoadingSpinner />
          </RG.Col>
        </RG.Row>
        <RG.Row>
          <RG.Col span='12'>
            <Footer />
          </RG.Col>
        </RG.Row>
      </Wrapper>
    )
  }
}

const Header = () => (
  <header>
    <h1>Dexplorer</h1>
  </header>
)
const Footer = () => (
  <footer>
    <p>Made by Brian Lindner, 2018. Made with React and the PokeAPI.</p>
  </footer>
)

class PokemonSearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemonList: {}
    }
  }
  prettyPrintList (list) {
    return list.map((item) => {
      const oldName = item.name
      const newName = oldName.split('-').map((word) => {
        word = word.charAt(0).toUpperCase() + word.substring(1)
        return word
      }).join('-')
      item.name = newName
      return item
    })
  }
  async getPokemonList () {
    return window.fetch('https://pokeapi.co/api/v2/pokemon-species/')
      .then(resp => resp.json())
      .then(json => json.results)
  }
  async componentDidMount () {
    return this.getPokemonList()
      .then(list => this.setState({ pokemonList: this.prettyPrintList(list) }))
  }
  render () {
    return (
      <Sidebar>
        <SearchBar name='search' placeholder='Search by name...' type='text' />
        <div>
          {this.state.pokemonList.length > 1
            ? <PokemonResultsList list={this.state.pokemonList} />
            : <LoadingSpinner />
          }
        </div>
      </Sidebar>
    )
  }
}

class PokemonDisplay extends Component {
  async getSpeciesData (name) {
    await this.clearPokemonData()
    // get the pokemon-species data
    const pokemonSpeciesEndpoint = `${this.props.baseurl}/api/v2/pokemon-species/${name}/`
    return window.fetch(pokemonSpeciesEndpoint)
      .then(resp => resp.json())
      .then(data => this.setState({species: data, speciesLoaded: true}))
  }
  render () {
    return (
      <RG.Row>
        <RG.Col span='3'>
          <RG.Image />
        </RG.Col>
      </RG.Row>
    )
  }
}

const PokemonResultsList = (props) => (
  <PokemonList>
    {props.list.map((item) => (
      <PokemonListItem>{item.name}</PokemonListItem>
    ))}
  </PokemonList>
)

export default PokemonDisplayContainer
