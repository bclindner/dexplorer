import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { getSpeciesList } from '../utils/PokeAPI.js'
import { PokeballSpinner } from './LoadingSpinner.js'
import { RG } from './Layout.js'
import colors from '../utils/colors.js'
/**
 * Styled sidebar container.
 */
export const Container = styled.aside`
  background-color: ${colors.darker};
  width: 100%;
  height: 100%;
`

/**
 * Styled search bar.
 */
export const SearchBar = styled.input`
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.dark};
  color: ${colors.light};
  border: none;
  border-radius: 0;'
`

/**
 * Styled scrolling list.
 */
export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  margin: 0;
  overflow-y: scroll;
  height: 875px;
  @media only screen and (max-width: 800px) {
    max-height: 300px;
  }
`

/**
 * Literally just a list item element without a bullet point.
 */
export const ListItem = styled.li`
  list-style-type: none;
`

/**
 * A styled react-router NavLink to wrap ListItems in.
 * Changes color when clicked and hovered on.
 */
export const ListLink = styled(NavLink)`
  padding: 1em 0 1em 1em;
  display: block;
  &:link, &:visited {
    text-decoration: none;
    color: ${colors.light};
  }
  &.activeLink {
    background-color: ${colors.accent};
    &:hover {
      background-color: ${colors.accentLight};
    }
  }
  &:hover {
    background-color: ${colors.dark};
  }
`

/**
 * Container for the searchable sidebar.
 * Displays a list of Pokemon species from the PokeAPI in its list alphabetically.
 * Allows for searching by name (admittedly a bit poorly).
 * Clicking on a Pokemon links to it with react-router's NavLinks.
 */
export class PokemonSidebar extends Component {
  constructor (props) {
    super(props)
    // initialize state values
    this.state = {
      speciesList: [],
      speciesListFiltered: [],
      searchTerm: ''
    }
    // bind the handleSearch function so it can be used in the search bar
    this.handleSearch = this.handleSearch.bind(this)
  }
  async componentWillMount () {
    getSpeciesList()
      // sort the list alphabetically
      .then(list => list.sort((a, b) => a.name > b.name))
      // add pretty names to the list
      .then(list => list.map((species) => {
        const uglyName = species.name
        // split the ugly name by its dashes, and for each word:
        const prettyName = uglyName.split('-').map((word) => {
          // capitalize the first letter of the word
          return word.charAt(0).toUpperCase() + word.substring(1)
          // then re-add the dashes
        }).join('-')
        species.prettyName = prettyName
        return species
      }))
      .then(list => this.setState({
        speciesList: list,
        speciesListFiltered: list
      }))
  }
  async filterList (name) {
    // take the raw species list and get every entry that contains the given name
    // this is quite laggy; is there a faster way i don't know about?
    // maybe debounce the input somehow to save resources?
    return this.state.speciesList.filter(species => species.name.includes(name))
  }
  async handleSearch (e) {
    // get the search term from the event,
    // then convert it to lowercase (the PokeAPI names are lowercase so it has to match)
    const searchTerm = e.target.value.toLowerCase()
    // execute a filter
    this.filterList(searchTerm)
      // set the state accordingly
      .then(filteredList => this.setState({
        speciesListFiltered: filteredList,
        searchTerm: searchTerm
      }))
  }
  render () {
    // this component needs the species list to be populated before rendering
    if (this.state.speciesList.length) {
      const list = this.state.speciesListFiltered
      return (
        <Container>
          <SearchBar placeholder='Search by name...' value={this.state.searchTerm} onChange={this.handleSearch} />
          <List>
            {list.map((species, i) => (
              <ListLink to={species.name} key={i} activeClassName='activeLink'>
                <ListItem>{species.prettyName}</ListItem>
              </ListLink>
            ))}
          </List>
        </Container>
      )
    } else {
      // return a PokeballSpinner in the list if the species list isn't done loading
      return (
        <Container>
          <SearchBar placeholder='Search by name...' value={this.state.searchTerm} onChange={this.handleSearch} />
          <RG.Centered>
            <PokeballSpinner />
          </RG.Centered>
        </Container>
      )
    }
  }
}
