import styled from 'styled-components'
import React from 'react'
import colors from '../utils/colors.js'
import { version } from '../../package.json'

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  padding: 1px 1em;
  background-color: ${colors.dark};
  color: ${colors.light};
  & h1 {
    display: inline-block;
    margin-right: 8px;
    & a:link, & a:visited {
      color: ${colors.light}
      text-decoration: none;
    }
  }
`
export const Header = () => (
  <HeaderContainer>
    <h1><a href={process.env.PUBLIC_URL + '/'}>Dexplorer</a></h1><small>v{version}</small>
  </HeaderContainer>
)
