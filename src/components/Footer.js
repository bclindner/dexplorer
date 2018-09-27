import styled from 'styled-components'
import React from 'react'

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  padding: 1px 1em;
  background-color: #2d2f31;
  color: #d4d8db;
  &:link {
    color: #d4d8db;
  }
`

export const Footer = () => (
  <FooterContainer>
    <p>Developed by Brian Lindner. Made with <a href='https://reactjs.org'>React</a> and the <a href='https://pokeapi.co'>PokeAPI.</a></p>
  </FooterContainer>
)

