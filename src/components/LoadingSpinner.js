import React from 'react'
import styled, { keyframes } from 'styled-components'
import pokeball from '../pokeball.png'

/**
 * A nice spinning animation.
 * Best used with ease-out.
 * Inspired by Discord's loading spinner.
 */
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

/**
 * Generic loading spinner component that takes an image and spins it with the keyframes above!
 */
export const LoadingSpinner = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: norepeat;
  background-position: center;
  animation: ${spin} 1s ease-out infinite;
  margin: 1em;
`

/**
 * LoadingSpinner, but with a Pokeball!
 */
export const PokeballSpinner = () => <LoadingSpinner url={pokeball} />
