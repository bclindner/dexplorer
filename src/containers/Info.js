import { InfoDisplay } from '../components/Info'
import { connect } from 'react-redux'
import { getSpecies, getVariant } from '../actions/info'

const mapDispatchToProps = dispatch => ({
  getSpecies,
  getVariant
})

const mapStateToProps = state => state.info

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoDisplay)
