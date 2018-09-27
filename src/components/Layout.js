import styled from 'styled-components'

// neat little flexbox responsive grid
export const RG = {}

// simple wrapper class to limit width on large screens & maximize it on small ones
export const Wrapper = styled.div`
  font-family: sans-serif;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  min-width: 800px;
  max-height: 1080px;
  height: 800px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    min-width: auto;
  }

`

// not necessarily a 'row' - i use this at least once to display two rows
RG.Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media only screen and (max-width: 800px) {
    flex-flow: column nowrap;
  }
`

// helper class for centering elements on a page (loading spinner!)
RG.Centered = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

RG.Col = styled.div`
  flex: ${props => props.span * 8.33}%;
`

RG.Image = styled.img`
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
`

RG.Table = styled.table`
  width: 100%;
  text-align: left;
`
