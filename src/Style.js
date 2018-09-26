import styled, { keyframes } from 'styled-components'

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(380deg);
  }
  60% {
    transform: rotate(350deg);
  }
  80%; {
    transform: rotate(360deg);
  }
`

export const Title = styled.h1`
  font-weight: lighter;
  display: inline;
  font-family: sans-serif;
  text-transform: capitalize;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  min-width: 800px;
`
export const Sidebar = styled.aside`
  border-right: 1px solid black;
  padding: 1em;
`

export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
`

export const LoadingSpinner = styled.div`
  height: 100px;
  width: 100px;
  background-image: url('img/pokeball.png')
  background-size: cover;
  background-repeat: norepeat;
  background-position: center;
  animation: ${spin} 1s ease-out infinite;
`
