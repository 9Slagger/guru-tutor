import axios from 'axios'
import { LOGIN_AUTH, CHECK_AUTH, LOGOUT_AUTH, VERIFY_AUTH } from './type'

// check token
export const checkAuth = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CHECK_AUTH, payload: token })
  }
}

// click login
export const signinAuth = user => {
  return dispatch => {
    axios
      .post(`https://mytutorapi.herokuapp.com/login`, user)
      .then(res => {
        const token = `Bearer +${res.data.token}`
        localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_AUTH, payload: token })
      })
      .catch(error => {
        console.log(error)
        alert('Error')
      })
  }
}

export const VerifyAuth = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios.get(`https://mytutorapi.herokuapp.com/restricted/auth`, {
      headers: { Authorization: token }
    })
    .then(response => {
      dispatch({ type: VERIFY_AUTH, payload: response.data })
    })
    .catch(error => {
      console.log(error)
    })
  }
}

// click logout
export const SignoutAuth = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({ type: LOGOUT_AUTH, payload: null })
  }
}
