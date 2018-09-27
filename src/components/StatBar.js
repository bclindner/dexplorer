import styled from 'styled-components'
import React from 'react'

// strangely, setting this up as a table cell is the cleanest way i can find to perform the layout for the stat bars
const Outer = styled.td`
  position: relative;
  width: 100%;
  height: 1.25em;
  background-color: black;
`
const Inner = styled.div`
  position:relative;
  height: 100%;
  /* invert the color if the percentage is too low to display the stat inside the bar
   * so that it can still be viewed
   */
  color: ${props => props.percent < 3 ? 'white' : 'black'};
  text-align: right;
  padding-right: ${props => props.percent < 5 ? 0.75 : 0.25};
  width: ${props => props.percent}%;
  background-color: ${props => props.color ? props.color : '#4286f4'};
`

const ProgressBar = (props) => (
  <Outer>
    <Inner percent={props.percent} color={props.color}>{props.label}</Inner>
  </Outer>
)

export default ProgressBar
