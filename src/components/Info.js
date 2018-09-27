import React from 'react'
import styled from 'styled-components'
import { RG } from './Layout.js'

const Info = {}

export const Container = styled.div`
  background-color: #2d2f31;
  color: #d4d8db;
  height: 100%;
  width: 100%;
`
export const Card = styled.div`
  padding: 1em;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }

`
export const InfoDisplay = (props) => (
  <Container>
    <RG.Row>
      <RG.Col span='4'>
        <ImageCard />
      </RG.Col>
      <RG.Col span='8'>
        <NameCard />
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='6'>
        <StatCard />
      </RG.Col>
      <RG.Col span='6'>
        <EVCard />
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='6'>
        <MoveCard />
      </RG.Col>
      <RG.Col span='6'>
        <MiscCard />
      </RG.Col>
    </RG.Row>
  </Container>
)
const EVDisplay = styled.div`
  background-color: ${props => props.color ? props.color : '#FF5959'};
  color: #1d1f21;
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
`
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

export const StatBar = (props) => (
  <Outer>
    <Inner percent={props.percent} color={props.color}>{props.label}</Inner>
  </Outer>
)

export const ImageCard = (props) => (
  <Card>
    <RG.Image src='https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/250px-384Rayquaza.png' />
  </Card>
)

export const NameCard = (props) => (
  <Card>
    <small>#394</small>
    <h1>Rayquaza</h1>
    <small>Flying / Dragon</small>
    <p>Abilities: Air-Lock</p>
    <p>Height: 1m</p>
    <p>Weight: 200kg</p>
  </Card>
)

export const StatCard = (props) => (
  <Card>
    <h2>Stats</h2>
    <table>
      <tbody>
        <tr>
          <td>HP</td>
          <StatBar label='15' percent='2.9' color='#FF5959' />
        </tr>
        <tr>
          <td>Attack</td>
          <StatBar label='255' percent='40' color='#F5AC78' />
        </tr>
        <tr>
          <td>Defense</td>
          <StatBar label='255' percent='50' color='#FAE078' />
        </tr>
        <tr>
          <td>Sp.Atk.</td>
          <StatBar label='255' percent='50' color='#9DB7F5' />
        </tr>
        <tr>
          <td>Sp.Def.</td>
          <StatBar label='255' percent='50' color='#A7DB8D' />
        </tr>
        <tr>
          <td>Speed</td>
          <StatBar label='255' percent='50' color='#FA92B2' />
        </tr>
      </tbody>
    </table>
  </Card>
)

export const EVCard = (props) => (
  <Card>
    <h2>Effort Values</h2>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color='#FF5959'>
          HP<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color='#F5AC78'>
          Atk<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color='#FAE078'>
          Def<br />
          0
        </EVDisplay>
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color='#9DB7F5'>
          Sp.Atk.<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color='#A7DB8D'>
          Sp.Def.<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color='#FA92B2'>
          Speed<br />
          0
        </EVDisplay>
      </RG.Col>
    </RG.Row>
  </Card>
)

export const MoveCard = (props) => (
  <Card>
    <h2>Moveset</h2>
    <RG.Table>
      <thead>
        <th>Level</th>
        <th>Move</th>
        <th>Learned By</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tackle</td>
          <td>Level-Up</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Tackle</td>
          <td>Level-Up</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Tackle</td>
          <td>Level-Up</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Tackle</td>
          <td>Level-Up</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Tackle</td>
          <td>Level-Up</td>
        </tr>
      </tbody>
    </RG.Table>
  </Card>
)

export const MiscCard = (props) => (
  <Card>
    <h2>Other Info</h2>
    <p>
      <b>Egg Group</b> Undiscovered
    </p>
    <p>
      <b>Catch Rate</b> 45
    </p>
    <p>
      <b>Growth Rate</b> Medium-Slow
    </p>
    <p>
      <b>Base Friendship</b> 0
    </p>
  </Card>

)

export default Info

