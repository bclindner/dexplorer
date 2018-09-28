import styled from 'styled-components'
import React from 'react'
import colors from '../utils/colors.js'

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  padding: 1px 1em;
  background-color: ${colors.dark};
  color: ${colors.light};
`
export const Header = () => (
  <HeaderContainer>
    <h1>Dexplorer</h1>
  </HeaderContainer>
)
