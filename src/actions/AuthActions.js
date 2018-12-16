import axios from 'axios'
import { push } from 'connected-react-router'
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
        console.log(res.data.user)
        const token = `Bearer ${res.data.token}`
        localStorage.setItem('token', token)
        dispatch({ type: LOGIN_AUTH, payload: res.data.user })

        dispatch(push('/'))
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
    axios
      .get(`https://mytutorapi.herokuapp.com/restricted/auth`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({ type: VERIFY_AUTH, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: VERIFY_AUTH, payload: null })
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
