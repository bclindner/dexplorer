import styled from 'styled-components'
import React from 'react'
import colors from '../utils/colors.js'

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  padding: 1px 1em;
  background-color: ${colors.dark};
  color: ${colors.light};
`

export const FooterLink = styled.a`
  &:link, &:visited {
    color: ${colors.light};
  }
`

export const Footer = () => (
  <FooterContainer>
    <p>Developed by Brian Lindner. Made with <FooterLink href='https://reactjs.org'>React</FooterLink> and the <FooterLink href='https://pokeapi.co'>PokeAPI.</FooterLink></p>
  </FooterContainer>
)
