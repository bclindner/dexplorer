import React, { Component } from 'react'
import styled from 'styled-components'
import { RG } from './Layout.js'
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
EVDisplay.PropTypes = {
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
StatBarInner.PropTypes = {
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
export const StatBar = ({percent, color, label}) => (
  <StatBarOuter>
    <StatBarInner percent={percent} color={color}>{label}</StatBarInner>
  </StatBarOuter>
)
StatBar.PropTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

/**
 * Card to display the Pokemon sprite image, and a selector for the Pokemon's variants, if there are any.
 */
export const SpriteVariantCard = ({sprite, variants, handleVariantChange}) => (
  <Card>
    <RG.Centered>
      <RG.Image src={sprite} />
    </RG.Centered>
    {variants.length > 1 && (
      <RG.Select onChange={handleVariantChange}>
        {variants.map((variant, i) => (
          <option value={variant.name} key={i}>{variant.name}</option>
        ))}
      </RG.Select>
    )}
  </Card>
)
SpriteVariantCard.PropTypes = {
  sprite: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
  handleVariantChange: PropTypes.func.isRequired
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
NameCard.PropTypes = {
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
export const StatCard = ({stats}) => (
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
StatCard.PropTypes = {
  stats: PropTypes.shape({
    hp: PropTypes.number.isRequired,
    atk: PropTypes.number.isRequired,
    def: PropTypes.number.isRequired,
    spatk: PropTypes.number.isRequired,
    spdef: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
  }).isRequired
}

/**
 * Card to display the effort values the Pokemon gives when defeated in battle.
 */
export const EVCard = ({effortValues}) => (
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
EVCard.PropTypes = {
  effortValues: PropTypes.shape({
    hp: PropTypes.number.isRequired,
    atk: PropTypes.number.isRequired,
    def: PropTypes.number.isRequired,
    spatk: PropTypes.number.isRequired,
    spdef: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
  }).isRequired
}

/**
 * Card which lists the Pokemon's moves.
 */
export const MoveCard = ({handleGroupChange, groups, moves}) => (
  <Card>
    <h2>Moveset</h2>
    <RG.Select onChange={handleGroupChange}>
      {groups.map((group, i) => (
        <option value={group} key={i}>{group}</option>
      ))}
    </RG.Select>
    <RG.StaticRow>
      <RG.Col span='2'><strong>Lv.</strong></RG.Col>
      <RG.Col span='5'><strong>Move</strong></RG.Col>
      <RG.Col span='5'><strong>Learned By</strong></RG.Col>
    </RG.StaticRow>
    <ScrollingMoveList>
      {moves.map((move, i) => (
        <RG.StaticRow key={i}>
          <RG.Col span='2'>
            {}
          </RG.Col>
          <RG.Col span='5'>
            <Capitalize>
              {}
            </Capitalize>
          </RG.Col>
          <RG.Col span='5'>
            <Capitalize>
              {}
            </Capitalize>
          </RG.Col>
        </RG.StaticRow>
      ))}
    </ScrollingMoveList>
  </Card>
)
MoveCard.PropTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  moves: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    versionGroups: PropTypes.opjectOf(PropTypes.shape({
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
      {props.baseExperience}
    </p>
    <p>
      <b>Gender Ratio</b> {props.genderRatio < 0
        ? 'Genderless'
        : (100 - props.genderRatio) + '% male to ' + (props.genderRatio) + '% female'
      }
    </p>
  </Card>
)
MiscCard.PropTypes = {
  eggGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  captureRate: PropTypes.number.isRequired,
  growthRate: PropTypes.string.isRequired,
  baseHappiness: PropTypes.number.isRequired,
  baseExperience: PropTypes.number.isRequired,
  genderRatio: PropTypes.number.isRequired
}

/**
 * Pokemon informational display, including name, stats, moves, and a picture.
 */
export const InfoDisplay = props => (
  <Container>
    <RG.Row>
      <RG.Col span='4'>
        <SpriteVariantCard />
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

export class InfoDisplayContainer extends Component {
  constructor (props) {
    super(props)
    // initialize state
    this.state = {
      loaded: false,
      speciesName: '',
      pokemonName: '',
      pokemonData: {},
      speciesData: {},
      versionGroups: [],
      moves: []
    }
    // bind functions to be passed to children
    this.handleVariantChange = this.handleVariantChange.bind(this)
    this.handleGroupChange = this.handleGroupChange.bind(this)
  }
  // restrict updating since we put a hook to refetch on componentWillUpdate
  async shouldComponentUpdate (newProps, newState) {
    return newState.speciesName === newProps.match.params.speciesName
  }
  filterGroups (group) {
    // get the moves from the first version group
    let moves = this.state.pokemonData.moves.filter(move => {
      const vgroups = move.version_group_details
      if (vgroups.find(vgroup => vgroup.version_group.name === group)) {
        return true
      } else {
        return false
      }
    })
    // sort moves by name
    moves = moves.sort((a, b) => a.move.name > b.move.name)
    // set the moves state accordingly
    this.setState({moves: moves})
  }
  async changeVariant (variant) {
    const pokemonData = await getPokemon(variant)
    // get the version groups from the moveset
    let groups = []
    // for each move
    pokemonData.moves.forEach(move => {
      // for each version group
      move.version_group_details.forEach(group => {
        // check if its name is already in the array
        if (groups.indexOf(group.version_group.name) === -1) {
          // if it isn't, add it
          groups.push(group.version_group.name)
        }
      })
    })
    this.setState({
      pokemonName: variant,
      pokemonData: pokemonData,
      versionGroups: groups
    }, () => { this.filterGroups(groups[0]) })
  }
  handleGroupChange (e) {
    this.filterGroups(e.target.value)
  }
  async handleVariantChange (e) {
    console.log('running?')
    this.changeVariant(e.target.value)
  }
  async updateData () {
    try {
      // get the species data first
      // unfortunately pokemon data can't be fetched in parallel because
      // species name !== the default variant name. see: deoxys, aegislash, etc
      const speciesName = this.props.match.params.speciesName
      const speciesData = await getSpecies(speciesName)
      // get the default variant out of speciesData
      const defaultVariant = speciesData.varieties.find(variant => variant.is_default).pokemon.name
      // get the pokemon data for the default variant
      const pokemonData = await getPokemon(defaultVariant)
      // get the version groups from the moveset
      let groups = []
      // for each move
      pokemonData.moves.forEach(move => {
        // for each version group
        move.version_group_details.forEach(group => {
          // check if its name is already in the array
          if (groups.indexOf(group.version_group.name) === -1) {
            // if it isn't, add it
            groups.push(group.version_group.name)
          }
        })
      })
      // set our state accordingly, then trigger an initial group filter
      this.setState({
        error: '',
        speciesName: speciesName,
        pokemonName: defaultVariant,
        pokemonData: pokemonData,
        speciesData: speciesData,
        versionGroups: groups
      }, () => { this.filterGroups(groups[0]) })
    } catch (err) {
      console.log(err)
      this.setState({
        error: err,
        speciesName: this.props.match.params.speciesName
      })
    }
  }
  // run the update when the component mounts (in the event the page is accessed with a pokemon already in URL)
  async componentDidMount () {
    return this.updateData()
  }
  // run the update when the component updates (which happens whenever the location changes) AND when the data already fetched does not appear to match the new URL
  async componentDidUpdate () {
    if (this.state.speciesName !== this.props.match.params.speciesName) {
      return this.updateData()
    }
  }
  render () {
    if ('name' in this.state.pokemonData && this.state.speciesName === this.props.match.params.speciesName) {
      return (
        <InfoDisplay
          pokemon={this.state.pokemonData}
          species={this.state.speciesData}
          groups={this.state.versionGroups}
          moves={this.state.moves}
          handleGroupChange={this.handleGroupChange}
          handleVariantChange={this.handleVariantChange}
        />
      )
    } else if (this.state.error) {
      // error screen
      return (
        <Container>
          <RG.Centered>
            <h1>Something went wrong, sorry!</h1>
          </RG.Centered>
        </Container>
      )
    } else {
      // loading screen
      return (
        <Container>
          <RG.Centered>
            <PokeballSpinner />
          </RG.Centered>
        </Container>
      )
    }
  }
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
