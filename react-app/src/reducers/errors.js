import { ActionTypes } from '../actions/index'

const {
  NEW_ERROR,
  CLEAR_ERRORS,
  CHANGE_ACTIVE_PAGE,
} = ActionTypes

const initialState = {
  errorMessages: [],
  activePage: 'home',
}

export function errors(state = initialState, action) {
  switch (action.type) {
    case NEW_ERROR:
      return {
        ...state,
        errorMessages: [...state.errorMessages, action.errorMessage]
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errorMessages: []
      }
    case CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.page,
      }
    default:
      return {
        ...state,
      }
  }
}