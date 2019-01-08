import axios from 'axios'
import { push } from 'connected-react-router'
import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCESS,
  LOGIN_AUTH_FAILURE,
  CHECK_AUTH,
  CHECK_AUTH_SUCESS,
  CHECK_AUTH_FAILURE,
  LOGOUT_AUTH,
  VERIFY_AUTH,
  VERIFY_AUTH_SUCESS,
  VERIFY_AUTH_FAILURE
} from './type'

// check token
export const checkAuth = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CHECK_AUTH })
    if (token) {
      dispatch({
        type: CHECK_AUTH_SUCESS,
        payload: token
      })
    } else {
      dispatch({
        type: CHECK_AUTH_FAILURE
      })
    }
  }
}

// click login
export const signinAuth = user => {
  return dispatch => {
    dispatch({ type: LOGIN_AUTH })
    axios
      .post(`https://mytutorapi.herokuapp.com/login`, user)
      .then(res => {
        const token = `Bearer ${res.data.token}`
        localStorage.setItem('token', token)
        dispatch({
          type: LOGIN_AUTH_SUCESS,
          payload: [res.data.user]
        })
        dispatch(push('/'))
      })
      .catch(error => {
        dispatch({ type: LOGIN_AUTH_FAILURE })
        console.log(error)
        alert('Error')
      })
  }
}

export const VerifyAuth = () => {
  return async dispatch => {
    dispatch({ type: VERIFY_AUTH })
    const token = await localStorage.getItem('token')
    token &&
      axios
        .get(`https://mytutorapi.herokuapp.com/restricted/auth`, {
          headers: { Authorization: token }
        })
        .then(res => {
          dispatch({
            type: VERIFY_AUTH_SUCESS,
            payload: [res.data]
          })
        })
        .catch(error => {
          dispatch({ type: VERIFY_AUTH_FAILURE })
          console.log(error.message)
        })
  }
}

// click logout
export const SignoutAuth = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_AUTH })
    localStorage.clear()
    dispatch(push('/'))
  }
}
