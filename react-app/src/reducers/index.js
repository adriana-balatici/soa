import { combineReducers } from 'redux'
import { registration } from './registration'
import { errors } from './errors'

const rootReducer = combineReducers({
  registration,
  errors,
})

export default rootReducer