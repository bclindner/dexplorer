import styled from 'styled-components'
import React from 'react'

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  padding: 1px 1em;
  background-color: #2d2f31;
  color: #d4d8db;
`
export const Header = () => (
  <HeaderContainer>
    <h1>Dexplorer</h1>
  </HeaderContainer>
)
