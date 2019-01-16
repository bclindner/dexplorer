import { PokemonSidebar } from '../components/Sidebar'
import { connect } from 'react-redux'
import { getList, filterList } from '../actions/list'
import { getSpecies } from '../actions/info'
import debounce from '../utils/debounce'

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
  filterList: debounce((term) => dispatch(filterList(term)), 100),
  getSpecies: (species) => dispatch(getSpecies(species))
})

const mapStateToProps = state => state.list

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSidebar)
