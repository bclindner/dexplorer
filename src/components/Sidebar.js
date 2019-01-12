import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { PokeballSpinner } from './LoadingSpinner.js'
import { RG } from './Layout.js'
import colors from '../utils/colors.js'
import PropTypes from 'prop-types'
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
  componentDidMount () {
    this.props.getList()
  }
  render () {
    const { loading, filterList, getSpecies, list } = this.props
    let content = {}
    if (loading) {
      content = (
        <RG.Centered>
          <PokeballSpinner />
        </RG.Centered>
      )
    } else {
      content = (
        <List>
          {list.filter(species => species.visible).map((species, i) => (
            <ListLink
              to={process.env.PUBLIC_URL + '/' + species.name}
              key={i}
              activeClassName='activeLink'
              onClick={() => getSpecies(species.name)}>
              <ListItem>{species.prettyName}</ListItem>
            </ListLink>
          ))}
        </List>
      )
    }
    return (
      <Container>
        <SearchBar
          placeholder='Search by name...'
          onChange={(evt) => filterList(evt.target.value.trim())} />
        {content}
      </Container>
    )
  }
}
PokemonSidebar.propTypes = {
  loading: PropTypes.bool.isRequired,
  filterList: PropTypes.func.isRequired,
  getSpecies: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}
