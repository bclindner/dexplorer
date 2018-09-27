import React from 'react'
import styled, { keyframes } from 'styled-components'
import { RG } from './Layout.js'
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(380deg);
  }
  60% {
    transform: rotate(355deg);
  }
  80%, 100% {
    transform: rotate(360deg);
  }
`

export const LoadingSpinner = styled.div`
  height: 100px;
  width: 100px;
  background-image: url('img/pokeball.png');
  background-size: cover;
  background-repeat: norepeat;
  background-position: center;
  animation: ${spin} 1s ease-out infinite;
  margin: 1em;
`

export const CenteredSpinner = () => (
  <RG.Centered>
    <LoadingSpinner />
  </RG.Centered>
)
