import { InfoDisplay } from '../components/Info'
import { connect } from 'react-redux'
import { getSpecies, getVariant } from '../actions/info'

const mapDispatchToProps = dispatch => ({
  getSpecies: name => dispatch(getSpecies(name)),
  getVariant: name => dispatch(getVariant(name))
})

const mapStateToProps = (state, ownProps) => ({
  ...state.info,
  pokemon: ownProps.match.params.pokemon
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoDisplay)
