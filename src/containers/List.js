import { PokemonSidebar } from '../components/Sidebar'
import { connect } from 'react-redux'
import { getList, filterList } from '../actions/list'

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
  handleSearch: (evt) => {
    dispatch(filterList(evt.target.value.trim()))
  }
})

const mapStateToProps = state => state.list

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonSidebar)
