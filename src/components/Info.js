import React from 'react'
import styled from 'styled-components'
import { RG } from './Layout.js'
import colors from '../utils/colors.js'

const Info = {}

/**
 * Container for the info display.
 */
export const Container = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  height: 100%;
  width: 100%;
`

/**
 * Slightly styled div for the info cards.
 */
export const Card = styled.div`
  padding: 1em;
  @media only screen and (max-width: 800px) {
    text-align: center;
  }

`

/**
 * A div which somewhat mimics the look of Bulbapedia's EV display boxes.
 * (if it ain't broke...)
 */
const EVDisplay = styled.div`
  background-color: ${props => props.color ? props.color : colors.light};
  color: ${colors.darker};
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
`

/**
 * Stat bar outer portion.
 */
const Outer = styled.td`
  position: relative;
  width: 100%;
  height: 1.25em;
  background-color: ${colors.darker};
`
/**
 * Stat bar inner portion.
 */
const Inner = styled.div`
  position:relative;
  height: 100%;
  /* invert the color if the percentage is too low to display the stat inside the bar
   * so that it can still be viewed
   */
  color: ${props => props.percent < 3 ? colors.light : colors.darker};
  text-align: right;
  padding-right: ${props => props.percent < 5 ? 0.75 : 0.25};
  width: ${props => props.percent}%;
  background-color: ${props => props.color ? props.color : colors.light};
`
/**
 * Simple stat bar component.
 * Takes percentage, color, and label attributes.
 */
export const StatBar = (props) => (
  <Outer>
    <Inner percent={props.percent} color={props.color}>{props.label}</Inner>
  </Outer>
)

/**
 * Card to display a centered image.
 * Used in the info display here to display the sprite.
 */
export const ImageCard = (props) => (
  <RG.Centered>
    <Card>
      <RG.Image src='https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/250px-384Rayquaza.png' />
    </Card>
  </RG.Centered>
)

/**
 * Card to display basic info about the Pokemon.
 */
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

/**
 * Card to display the Pokemon's stats with graphical bars.
 */
export const StatCard = (props) => (
  <Card>
    <h2>Stats</h2>
    <table>
      <tbody>
        <tr>
          <td>HP</td>
          <StatBar label='15' percent='2.9' color={colors.stat.hp} />
        </tr>
        <tr>
          <td>Attack</td>
          <StatBar label='255' percent='40' color={colors.stat.atk} />
        </tr>
        <tr>
          <td>Defense</td>
          <StatBar label='255' percent='50' color={colors.stat.def} />
        </tr>
        <tr>
          <td>Sp.Atk.</td>
          <StatBar label='255' percent='50' color={colors.stat.spatk} />
        </tr>
        <tr>
          <td>Sp.Def.</td>
          <StatBar label='255' percent='50' color={colors.stat.spdef} />
        </tr>
        <tr>
          <td>Speed</td>
          <StatBar label='255' percent='50' color={colors.stat.speed} />
        </tr>
      </tbody>
    </table>
  </Card>
)

/**
 * Card to display the effort values the Pokemon gives when defeated in battle.
 */
export const EVCard = (props) => (
  <Card>
    <h2>Effort Values</h2>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.hp}>
          HP<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.atk}>
          Atk<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.def}>
          Def<br />
          0
        </EVDisplay>
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.spatk}>
          Sp.Atk.<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.spdef}>
          Sp.Def.<br />
          0
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.speed}>
          Speed<br />
          0
        </EVDisplay>
      </RG.Col>
    </RG.Row>
  </Card>
)

/**
 * Card which lists the Pokemon's moves.
 */
export const MoveCard = (props) => (
  <Card>
    <h2>Moveset</h2>
    <RG.Table>
      <thead>
        <tr>
          <th>Level</th>
          <th>Move</th>
          <th>Learned By</th>
        </tr>
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
/**
 * Card which lists other miscellaneous information.
 */
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
/**
 * Pokemon informational display, including name, stats, moves, and a picture.
 */
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

export default Info
