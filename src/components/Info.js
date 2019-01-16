import React, { Component } from 'react'
import styled from 'styled-components'
import { RG } from './Layout.js'
import { StyledSelect, SpriteImage } from './StyledLayout'
import { PokeballSpinner } from './LoadingSpinner.js'
import colors from '../utils/colors.js'
import PropTypes from 'prop-types'

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
 * Literally just a span that capitalizes text, because I'm lazy.
 */
export const Capitalize = styled.span`
  text-transform: capitalize;
`

/**
 * Scrollable list for the moves.
 */
export const ScrollingMoveList = styled.div`
  overflow-y: scroll;
  max-height: 200px;
`

/**
 * A div which somewhat mimics the look of Bulbapedia's EV display boxes.
 * (If it ain't broke...)
 */
const EVDisplay = styled.div`
  background-color: ${props => props.color};
  color: ${colors.darker};
  margin: 0.5em;
  padding: 0.5em;
  text-align: center;
`
EVDisplay.propTypes = {
  color: PropTypes.string
}
EVDisplay.defaultProps = {
  color: colors.light
}

/**
 * Stat bar outer portion.
 */
const StatBarOuter = styled.td`
  position: relative;
  width: 100%;
  height: 1.25em;
  background-color: ${colors.darker};
`
/**
 * Stat bar inner portion.
 */
const StatBarInner = styled.div`
  position:relative;
  height: 100%;
  /* invert the color if the percentage is too low to display the stat inside the bar
   * so that it can still be viewed
   */
  color: ${props => props.percent < 10 ? 'white' : colors.darker};
  text-align: right;
  width: ${props => props.percent}%;
  background-color: ${props => props.color};
`
StatBarInner.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string
}
StatBarInner.defaultProps = {
  color: colors.light
}

/**
 * Simple stat bar component.
 * Takes percentage, color, and label attributes.
 */
export const StatBar = ({ percent, color, label }) => (
  <StatBarOuter>
    <StatBarInner percent={percent} color={color}>{label}</StatBarInner>
  </StatBarOuter>
)
StatBar.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired
}

/**
 * Card to display the Pokemon sprite image, and a selector for the Pokemon's variants, if there are any.
 */
const SpriteVariantCard = ({ sprite, variants, getVariant, currentVariant }) => (
  <Card>
    <RG.Centered>
      <SpriteImage src={sprite} />
    </RG.Centered>
    {variants.length > 1 && (
      <StyledSelect onChange={(evt) => getVariant(evt.target.value)} value={currentVariant}>
        {variants.map((variant, i) => (
          <option value={variant.name} key={i}>{variant.name}</option>
        ))}
      </StyledSelect>
    )}
  </Card>
)
SpriteVariantCard.propTypes = {
  sprite: PropTypes.string.isRequired,
  variants: PropTypes.array.isRequired,
  getVariant: PropTypes.func.isRequired
}

/**
 * Card to display basic info about the Pokemon.
 */
export const NameCard = props => (
  <Card>
    <Capitalize>
      <small>#{props.pokedexNumber !== null
        ? props.pokedexNumber
        : '???'
      }
      </small>
      <h1>{props.name}</h1>
      <p>{props.genus}</p>
      <p>Types:&nbsp;{props.types.length > 1
        ? (props.types[0] + ' / ' + props.types[1])
        : (props.types[0])
      }
      </p>
      <p>Abilities:&nbsp;{props.abilities.length > 1
        ? (props.abilities[0] + ' / ' + props.abilities[1])
        : (props.abilities[0])
      }
      </p>
      <p>Height: {props.height}m</p>
      <p>Weight: {props.weight}kg</p>
    </Capitalize>
  </Card>
)
NameCard.propTypes = {
  pokedexNumber: PropTypes.number,
  name: PropTypes.string.isRequired,
  genus: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
}

/**
 * Card to display the Pokemon's stats with graphical bars.
 */
export const StatCard = (stats) => (
  <Card>
    <h2>Stats</h2>
    <table>
      <tbody>
        <tr>
          <td>HP</td>
          <StatBar
            label={stats.hp}
            percent={stats.hp / 255 * 100}
            color={colors.stat.hp}
          />
        </tr>
        <tr>
          <td>Attack</td>
          <StatBar
            label={stats.atk}
            percent={stats.atk / 255 * 100}
            color={colors.stat.atk}
          />
        </tr>
        <tr>
          <td>Defense</td>
          <StatBar
            label={stats.def}
            percent={stats.def / 255 * 100}
            color={colors.stat.def}
          />
        </tr>
        <tr>
          <td>Sp.Atk.</td>
          <StatBar
            label={stats.spatk}
            percent={stats.spatk / 255 * 100}
            color={colors.stat.spatk}
          />
        </tr>
        <tr>
          <td>Sp.Def.</td>
          <StatBar
            label={stats.spdef}
            percent={stats.spdef / 255 * 100}
            color={colors.stat.spdef}
          />
        </tr>
        <tr>
          <td>Speed</td>
          <StatBar
            label={stats.speed}
            percent={stats.speed / 255 * 100}
            color={colors.stat.speed}
          />
        </tr>
      </tbody>
    </table>
  </Card>
)
StatCard.propTypes = {
  hp: PropTypes.number.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  spatk: PropTypes.number.isRequired,
  spdef: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
}

/**
 * Card to display the effort values the Pokemon gives when defeated in battle.
 */
export const EVCard = (effortValues) => (
  <Card>
    <h2>Effort Values</h2>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.hp}>
          HP<br />
          {effortValues.hp}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.atk}>
          Atk<br />
          {effortValues.atk}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.def}>
          Def<br />
          {effortValues.def}
        </EVDisplay>
      </RG.Col>
    </RG.Row>
    <RG.Row>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.spatk}>
          Sp.Atk.<br />
          {effortValues.spatk}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.spdef}>
          Sp.Def.<br />
          {effortValues.spdef}
        </EVDisplay>
      </RG.Col>
      <RG.Col span='4'>
        <EVDisplay color={colors.stat.speed}>
          Speed<br />
          {effortValues.speed}
        </EVDisplay>
      </RG.Col>
    </RG.Row>
  </Card>
)
EVCard.propTypes = {
  hp: PropTypes.number.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  spatk: PropTypes.number.isRequired,
  spdef: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
}

/**
 * Card which lists the Pokemon's moves.
 */
export const MoveCard = ({ currentGroup, selectGroup, groups, moves }) => (
  <Card>
    <h2>Moveset</h2>
    <StyledSelect onChange={(evt) => selectGroup(evt.target.value)} selected={currentGroup}>
      {groups.map((group, i) => (
        <option value={group} key={i}>{group}</option>
      ))}
    </StyledSelect>
    <RG.StaticRow>
      <RG.Col span='2'><strong>Lv.</strong></RG.Col>
      <RG.Col span='5'><strong>Move</strong></RG.Col>
      <RG.Col span='5'><strong>Learned By</strong></RG.Col>
    </RG.StaticRow>
    <ScrollingMoveList>
      {moves.filter(move => currentGroup in move.versionGroups).map((move, i) => (
        <RG.StaticRow key={i}>
          <RG.Col span='2'>
            {move.versionGroups[currentGroup].level === 0
              ? '-'
              : move.versionGroups[currentGroup].level}
          </RG.Col>
          <RG.Col span='5'>
            <Capitalize>
              {move.name}
            </Capitalize>
          </RG.Col>
          <RG.Col span='5'>
            <Capitalize>
              {move.versionGroups[currentGroup].learnedBy}
            </Capitalize>
          </RG.Col>
        </RG.StaticRow>
      ))}
    </ScrollingMoveList>
  </Card>
)
MoveCard.propTypes = {
  currentGroup: PropTypes.string.isRequired,
  selectGroup: PropTypes.func.isRequired,
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  moves: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    versionGroups: PropTypes.objectOf(PropTypes.shape({
      level: PropTypes.number,
      learnedBy: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
}

/**
 * Card which lists other miscellaneous information.
 */
export const MiscCard = props => (
  <Card>
    <h2>Other Info</h2>
    <p>
      <Capitalize>
        <b>Egg Group</b>&nbsp;
        {props.eggGroups.length > 1
          ? (props.eggGroups[0] + ' / ' + props.eggGroups[1])
          : (props.eggGroups[0])
        }
      </Capitalize>
    </p>
    <p>
      <b>Catch Rate</b>&nbsp;
      {props.captureRate}
    </p>
    <p>
      <b>Growth Rate</b>&nbsp;
      <Capitalize>
        {props.growthRate}
      </Capitalize>
    </p>
    <p>
      <b>Base Happiness</b>&nbsp;
      {props.baseHappiness}
    </p>
    <p>
      <b>Base Experience</b>&nbsp;
      {props.baseExp}
    </p>
    <p>
      <b>Gender Ratio</b> {props.genderRatio < 0
        ? 'Genderless'
        : (100 - props.genderRatio) + '% male to ' + (props.genderRatio) + '% female'
      }
    </p>
  </Card>
)
MiscCard.propTypes = {
  eggGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  captureRate: PropTypes.number.isRequired,
  growthRate: PropTypes.string.isRequired,
  baseHappiness: PropTypes.number.isRequired,
  baseExp: PropTypes.number.isRequired,
  genderRatio: PropTypes.number.isRequired
}

/**
 * Pokemon informational display, including name, stats, moves, and a picture.
 */
export class InfoDisplay extends Component {
  componentDidMount () {
    // get the current pokemon on mount, if available
    if (this.props.pokemon) {
      this.props.getSpecies(this.props.pokemon)
    }
  }
  componentDidUpdate () {
    // set document title accordingly
    if (this.props.pokemon) {
      document.title = 'Dexplorer - ' + this.props.pokemon
    } else {
      document.title = 'Dexplorer'
    }
  }
  render () {
    const {
      status,
      currentGroup,
      currentVariant,
      info,
      stats,
      effortValues,
      moves,
      groups,
      misc,
      getVariant,
      selectGroup
    } = this.props
    switch (status) {
      case 'loading':
        return <InfoDisplayLoading />
      case 'errored':
        return <InfoDisplayError />
      case 'ready':
        return (
          <Container>
            <RG.Row>
              <RG.Col span='4'>
                <SpriteVariantCard
                  {...info}
                  currentVariant={currentVariant}
                  getVariant={getVariant}
                />
              </RG.Col>
              <RG.Col span='8'>
                <NameCard
                  {...info}
                />
              </RG.Col>
            </RG.Row>
            <RG.Row>
              <RG.Col span='6'>
                <StatCard
                  {...stats}
                />
              </RG.Col>
              <RG.Col span='6'>
                <EVCard
                  {...effortValues}
                />
              </RG.Col>
            </RG.Row>
            <RG.Row>
              <RG.Col span='6'>
                <MoveCard
                  moves={moves}
                  groups={groups}
                  currentGroup={currentGroup}
                  selectGroup={selectGroup}
                />
              </RG.Col>
              <RG.Col span='6'>
                <MiscCard
                  {...misc}
                />
              </RG.Col>
            </RG.Row>
          </Container>
        )
      default:
        return <InfoDisplayWelcome />
    }
  }
}
InfoDisplay.propTypes = {
  status: PropTypes.string.isRequired,
  currentGroup: PropTypes.string.isRequired,
  currentVariant: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
  effortValues: PropTypes.object.isRequired,
  moves: PropTypes.array.isRequired,
  misc: PropTypes.object.isRequired,
  getVariant: PropTypes.func.isRequired,
  selectGroup: PropTypes.func.isRequired,
  getSpecies: PropTypes.func.isRequired
}

export const InfoDisplayWelcome = () => (
  <Container>
    <RG.Centered>
      <Card>
        <h3>Welcome! Select a Pokemon from the list to begin.</h3>
      </Card>
    </RG.Centered>
  </Container>
)
export const InfoDisplayError = () => (
  <Container>
    <RG.Centered>
      <h1>Something went wrong, sorry!</h1>
    </RG.Centered>
  </Container>
)
export const InfoDisplayLoading = () => (
  <Container>
    <RG.Centered>
      <PokeballSpinner />
    </RG.Centered>
  </Container>
)
