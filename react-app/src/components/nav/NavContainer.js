import { connect } from 'react-redux'
import Nav from './NavApp';
import { logOut, clearErrors, changeActivePage } from '../../actions'

const mapStateToProps = (state) => ({
  user: state.registration.user,
  activePage: state.errors.activePage,
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
  clearErrors: () => dispatch(clearErrors()),
  changePage: (newPage) => dispatch(changeActivePage(newPage)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)