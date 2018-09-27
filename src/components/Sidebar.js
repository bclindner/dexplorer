import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
  background-color: #1d1f21;
  width: 100%;
  height: 100%;
`

export const SearchBar = styled.input`
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  background-color: #2d2f31;
  color: #eee;
  border: none;
  border-radius: 0;
`

export const List = styled.ul`
  color: white;
  width: 100%;
  padding-left: 0;
  margin: 0;
  overflow-y: scroll;
  max-height: 800px;
`

export const ListItem = styled.li`
  list-style-type: none;
  padding: 1em 0 1em 1em;
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: #2d2f31;
  }
`

export const StyledLink = styled(Link)`
  &:link, &:visited {
    text-decoration: none;
    color: #d4d8db;
  }
`
export const Sidebar = (props) => (
  <Container>
    <SearchBar placeholder='Search by name...' />
    <List>
      <StyledLink to='bulbasaur'>
        <ListItem>Bulbasaur</ListItem>
      </StyledLink>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
      <ListItem>Bulbasaur</ListItem>
    </List>
  </Container>
)
