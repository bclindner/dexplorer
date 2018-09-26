import styled from 'styled-components'

export const RG = {}

RG.Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media only screen and (max-width: 800px) {
    flex-flow: column nowrap;
  }
`

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
  width: 100%;
`
