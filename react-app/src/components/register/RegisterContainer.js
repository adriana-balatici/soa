import { connect } from 'react-redux'
import RegisterComponent from './RegisterComponent'
import { register } from '../../actions'

const mapStateToProps = (state) => ({
  user: state.registration.user,
  loading: state.registration.registerLoading || state.registration.logInLoading,
  errors: state.errors.errorMessages,
})

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent)