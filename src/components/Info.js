import styled from 'styled-components'

const Info = {}

Info.Container = styled.div`
  background-color: #1d1f21;
  color: #d4d8db;
  height: 100%;
  width: 100%;
`
Info.Card = styled.div`
  padding: 1em;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }

`

export default Info
