import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%
`

export const Row = styled.div`
  box-sizing: border-box;
  &::after {
    clear: both;
    content: "";
    display: block;
  }
`
export const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`

export const Col = styled.div`
  box-sizing: border-box;
  width: ${props => props.span * 8.33}%;
  float: left;
`
