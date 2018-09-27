import styled from 'styled-components'

const EVCard = styled.div`
  background-color: ${props => props.color ? props.color : '#FF5959'};
  color: #1d1f21;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
`

export default EVCard
