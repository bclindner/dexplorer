import {
  REQUEST_SPECIES,
  RECEIVE_SPECIES,
  REQUEST_VARIANT,
  RECEIVE_VARIANT
} from '../actions/info.js'

const lang = 'en'

const initialState = {
  currentVariant: '',
  currentGroup: '',
  status: '',
  info: {
    pokedexNumber: 0,
    name: '',
    genus: '',
    types: [
      // ''
    ],
    abilities: [
      // ''
    ],
    height: 0,
    weight: 0,
    sprite: '',
    variants: [
      // {
      //    name: '',
      //    isSelected: ''
      // }
    ]
  },
  stats: {
    hp: 0,
    atk: 0,
    def: 0,
    spatk: 0,
    spdef: 0,
    spd: 0
  },
  effortValues: {
    hp: 0,
    atk: 0,
    def: 0,
    spatk: 0,
    spdef: 0,
    spd: 0
  },
  moves: [
    // {
    //   name: ''
    //   versionGroups: {
    //     "name": {
    //       level: 0,
    //       learnedBy: ''
    //    }
    //   }
    // }
  ],
  groups: [
    // ''
  ],
  misc: {
    eggGroups: [],
    captureRate: 0,
    growthRate: '',
    baseHappiness: 0,
    baseExp: 0,
    genderRatio: 0 // percent female (0 is all male, 1 is all female)
  }
}

export default function info (state = initialState, action) {
  switch (action.type) {
    case REQUEST_SPECIES:
      return {
        ...state,
        status: 'loading'
      }
    case RECEIVE_SPECIES:
      // determine pokedex number (if available; if not, return null)
      let pokedexNumber = null
      const pokedexEntry = action.data.pokedex_numbers.find(entry => entry.pokedex.name === 'national')
      if (pokedexEntry !== undefined) {
        pokedexNumber = pokedexEntry.entry_number
      }
      // map variants from response
      const variants = action.data.varieties.map(variant => ({
        name: variant.pokemon.name,
        isSelected: variant.is_default
      }))
      return {
        ...initialState,
        currentVariant: action.data.name,
        // remain loading because we need to get default variant info before showing it to the user
        status: 'loading',
        info: {
          ...initialState.info,
          pokedexNumber,
          name: action.data.names.find(entry => entry.language.name === lang),
          genus: action.data.genera.find(entry => entry.language.name === lang),
          variants
        },
        misc: {
          ...initialState.misc,
          eggGroups: action.data.egg_groups.map(entry => entry.name),
          captureRate: action.data.capture_rate,
          growthRate: action.data.growth_rate.name,
          baseHappiness: action.data.base_happiness,
          genderRatio: action.data.gender_rate / 8 * 100
        }
      }
      // determine genus
    case REQUEST_VARIANT:
      return {
        ...state,
        status: 'loading'
      }
    case RECEIVE_VARIANT:
      // stats
      const hp = action.data.stats.find(entry => entry.stat.name === 'hp')
      const atk = action.data.stats.find(entry => entry.stat.name === 'attack')
      const def = action.data.stats.find(entry => entry.stat.name === 'defense')
      const spatk = action.data.stats.find(entry => entry.stat.name === 'special-attack')
      const spdef = action.data.stats.find(entry => entry.stat.name === 'special-defense')
      const speed = action.data.stats.find(entry => entry.stat.name === 'speed')
      // this next block does a lot:
      // maps move array
      // reduces version group details into an object
      // adds the groups into an array as well
      let groups = []
      const moves = action.data.moves.map(move => ({
        name: move.name,
        versionGroups: move.version_group_details.reduce((obj, versionGroup) => {
          // get name
          const name = versionGroup.version_group.name
          // add to the group array, if not done already
          if (!groups.includes(name)) {
            groups.push(name)
          }
          // put the other attributes there with the name as the key
          obj[name] = {
            learnedBy: versionGroup.move_learn_method.name,
            level: versionGroup.level_learned_at
          }
          return obj
        })
      }))
      return {
        ...state,
        currentVariant: action.data.name,
        status: 'ready',
        info: {
          ...state.info,
          abilities: action.data.abilities.map(entry => entry.name),
          types: action.data.types.map(entry => entry.type.name),
          height: action.data.height / 10,
          weight: action.data.weight / 10,
          sprite: action.data.sprites.front_default
        },
        stats: {
          hp: hp.base_stat,
          atk: atk.base_stat,
          def: def.base_stat,
          spatk: spatk.base_stat,
          spdef: spdef.base_stat,
          speed: speed.base_stat
        },
        effortValues: {
          hp: hp.effort,
          atk: atk.effort,
          def: def.effort,
          spatk: spatk.effort,
          spdef: spdef.effort,
          speed: speed.effort
        },
        moves,
        groups,
        misc: {
          ...state.misc,
          baseExp: action.data.base_experience
        }
      }
    default: return state
  }
}
