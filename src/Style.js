import styled, { keyframes } from 'styled-components'

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
  100% {
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
  font-family: sans-serif;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  min-width: 800px;
`
export const Sidebar = styled.aside`
  background-color: #1d1f21;
  border-right: 1px solid black;
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

export const PokemonList = styled.ul`
  color: white;
  width: 100%;
  padding-left: 0;
  overflow-y: scroll;
  max-height: 1000px;
`

export const PokemonListItem = styled.li`
  list-style-type: none;
  padding: 1em 0 1em 1em;
  &:hover {
    background-color: #2d2f31;
  }
`
