import React, { Component } from 'react'
import { Wrapper, Sidebar, SearchBar, LoadingSpinner, PokemonList, PokemonListItem } from './Style.js'
import { RG } from './Layout.js'
import { Link } from 'react-router-dom'
import * as pokeAPI from './PokeAPI.js'

class PokemonDisplayContainer extends Component {
  render () {
    return <PokemonDisplay
      pokemonList={this.pokemonList}
      pokemonData={this.pokemonData}
      speciesData={this.speciesData}
    />
  }
}

const PokemonDisplay = (props) => (
  <Wrapper>
    <RG.Row>
      <RG.Col span='12'>
        <Header />
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='4'>
        <PokemonListDisplay pokemonList={props.pokemonList} />
      </RG.Col>
      <RG.Col span='8'>
        <PokemonInfoDisplay pokemon={props.pokemonData} />
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='12'>
        <Footer />
      </RG.Col>
    </RG.Row>
  </Wrapper>
)

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

const PokemonListDisplay = (props) => (
  <Sidebar>
    <SearchBar name='search' placeholder='Search by name...' type='text' />
    <div>
      {props.pokemonList.length > 1
        ? <PokemonResultsList list={props.pokemonList} />
        : <LoadingSpinner />
      }
    </div>
  </Sidebar>
)

const PokemonInfoDisplay = (props) => (
  <RG.Row>
    <RG.Col span='4'>
      <RG.Image src={props.pokemon.sprites.front_default} />
    </RG.Col>
    <RG.Col span='8'>
      <h1>{props.pokemon.name}</h1>
    </RG.Col>
  </RG.Row>
)

const PokemonResultsList = (props) => (
  <PokemonList>
    {props.list.map((item, i) => (
      <Link to={'/' + item.name}>
        <PokemonListItem key={i}>{item.prettyName}</PokemonListItem>
      </Link>
    ))}
  </PokemonList>
)

export default PokemonDisplayContainer
