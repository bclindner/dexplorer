import styled from 'styled-components'

export const RG = {}

RG.Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media only screen and (max-width: 800px) {
    flex-flow: column nowrap;
  }
`

RG.Col = styled.div`
  flex: ${props => props.span * 8.33}%;
`

RG.Image = styled.img`
  width: 100%;
`
