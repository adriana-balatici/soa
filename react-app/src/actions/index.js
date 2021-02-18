export const ActionTypes = {
  LOG_IN_REQUEST: 'LOG_IN_REQUEST',
  LOG_IN_RECEIVED: 'LOG_IN_RECEIVED',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_RECEIVED: 'REGISTER_RECEIVED',
  UPDATE_REQUEST: 'UPDATE_REQUEST',
  UPDATE_RECEIVED: 'UPDATE_RECEIVED',
  LOG_OUT: 'LOG_OUT',
  GET_USER_FROM_COOKIE: 'GET_USER_FROM_COOKIE',
  NEW_ERROR: 'NEW_ERROR',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
  CHANGE_ACTIVE_PAGE: 'CHANGE_ACTIVE_PAGE',
}

const PROD_URL = "http://localhost:5001"

export const getUser = (id, token) => (dispatch) => {
  fetch(PROD_URL + "/users/" + id, {
    method: 'GET',
    headers: getHeaders(token),
  }).then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch({
        type: ActionTypes.GET_USER_FROM_COOKIE,
        data: {
          ...data.data,
          token: token,
        },
      })
    })
}

export const logIn = (data = {}) => (dispatch, getState) => {
  const state = getState()
  dispatch(loginRequest())
  dispatch(clearErrors())
  postData(PROD_URL + "/login", {
    email: data.email || state.registration.user.email,
    password: data.password || state.registration.user.email,
  }).then(response => response.json())
    .then(res => {
      if (res.message) {
        dispatch(newError(res.message))
      } else {
        document.cookie = "token=" + res.token
        document.cookie = "userId=" + res.data._id
        dispatch(loginReceived(res))
      }
    })
    .catch(err => {
      dispatch(newError(err.message))
    })
}

export const logOut = () => (dispatch) => {
  dispatch({
    type: ActionTypes.LOG_OUT,
  })
  document.cookie = "token="
  document.cookie = "userId="
}

export const loginRequest = () => {
  return {
    type: ActionTypes.LOG_IN_REQUEST,
  }
}
export const loginReceived = (data) => {
  return {
    type: ActionTypes.LOG_IN_RECEIVED,
    data: {
      token: data.token,
      ...data.data,
    },
  }
}

export const register = (data) => (dispatch) => {
  dispatch(registerRequest())
  dispatch(clearErrors())
  postData(PROD_URL + "/register", {
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.email,
    password: data.password,
  }).then(response => response.json())
    .then(res => {
      if (res.message) {
        dispatch(newError(res.message))
      } else {
        dispatch(registerReceived(data))
        dispatch(logIn({ email: data.email, password: data.password }))
      }
    }).catch(err => {
      dispatch(newError(err.message))
    })
}

export const registerRequest = () => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
  }
}
export const registerReceived = (data) => {
  return {
    type: ActionTypes.REGISTER_RECEIVED,
    data,
  }
}

const getHeaders = (token) => {
  if (token) {
    return {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  } else {
    return {
      'Content-Type': 'application/json',
    }
  }
}

const postData = (url, data, token) => {
  return fetch(url, {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify(data),
  })
}

const putData = (url, data, token) => {
  return fetch(url, {
    method: 'PUT',
    headers: getHeaders(token),
    body: JSON.stringify(data),
  })
}

const deleteData = (url, data, token) => {
  return fetch(url, {
    method: 'DELETE',
    headers: getHeaders(token),
    body: JSON.stringify(data),
  })
}

export const newError = (msg) => ({
  type: ActionTypes.NEW_ERROR,
  errorMessage: msg,
})

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_ERRORS,
  })
}

export const changeActivePage = (page) => (dispatch) => {
  dispatch({
    type: ActionTypes.CHANGE_ACTIVE_PAGE,
    page,
  })
}
