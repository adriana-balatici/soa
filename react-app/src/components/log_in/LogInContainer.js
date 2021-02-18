import { connect } from 'react-redux'
import LogInComponent from './LogInComponent'
import { logIn } from '../../actions'

const mapStateToProps = (state) => ({
  user: state.registration.user,
  loading: state.registration.logInLoading,
  errors: state.errors.errorMessages,
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(logIn(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInComponent)