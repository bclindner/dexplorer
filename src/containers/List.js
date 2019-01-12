import { PokemonSidebar } from '../components/Sidebar'
import { connect } from 'react-redux'
import { getList, filterList } from '../actions/list'
import { getSpecies } from '../actions/info'

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
  filterList: (term) => dispatch(filterList(term)),
  getSpecies: (species) => dispatch(getSpecies(species))
})

const mapStateToProps = state => state.list

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSidebar)
