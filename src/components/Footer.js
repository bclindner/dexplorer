import styled from 'styled-components'
import React from 'react'

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  padding: 1px 1em;
  background-color: #2d2f31;
  color: #d4d8db;
`

export const FooterLink = styled.a`
  &:link, &:visited {
    color: #d4d8db;
  }
`

export const Footer = () => (
  <FooterContainer>
    <p>Developed by Brian Lindner. Made with <FooterLink href='https://reactjs.org'>React</FooterLink> and the <FooterLink href='https://pokeapi.co'>PokeAPI.</FooterLink></p>
  </FooterContainer>
)
