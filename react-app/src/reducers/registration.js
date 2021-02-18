import { ActionTypes } from '../actions/index'

const {
  LOG_IN_REQUEST,
  LOG_IN_RECEIVED,
  REGISTER_REQUEST,
  REGISTER_RECEIVED,
  LOG_OUT,
  GET_USER_FROM_COOKIE,
  UPDATE_REQUEST,
  UPDATE_RECEIVED,
  NEW_ERROR,
} = ActionTypes

const initialState = {
  user: {
    step: 1,
    token: "",
    firstName: "",
    lastName: "",
    id: "",
    email: "",
    password: "",
  },
  logInLoading: false,
  registerLoading: false,
  editProfileLoading: false,
  editUser: {
    firstName: "",
    lastName: "",
    email: "",
  },
}

export function registration(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true
      }
    case LOG_IN_RECEIVED: {
      return {
        ...state,
        user: {
          ...state.user,
          token: action.data.token,
          firstName: action.data.firstname,
          lastName: action.data.lastname,
          email: action.data.email,
          password: action.data.password,
          id: action.data._id,
        },
        editUser: {
          firstName: action.data.firstname,
          lastName: action.data.lastname,
          email: action.data.email,
        },
        logInLoading: false,
      }
    }
    case REGISTER_REQUEST:
      return {
        ...state,
        registerLoading: true,
      }
    case REGISTER_RECEIVED:
      return {
        ...state,
        registerLoading: false,
      }

    case UPDATE_REQUEST:
      return {
        ...state,
        editProfileLoading: true,
      }
    case UPDATE_RECEIVED:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.data.email,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
        },
        editProfileLoading: false,
      }
    case LOG_OUT:
      return {
        ...state,
        user: {
          step: 1,
          token: '',
        },
      }
    case GET_USER_FROM_COOKIE:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.data.token,
          firstName: action.data.firstname,
          lastName: action.data.lastname,
          email: action.data.email,
          password: action.data.password,
          id: action.data._id,
        },
        editUser: {
          firstName: action.data.firstname,
          lastName: action.data.lastname,
          email: action.data.email,
        },
      }
    case NEW_ERROR:
      return {
        ...state,
        logInLoading: false,
        registerLoading: false,
        editProfileLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
