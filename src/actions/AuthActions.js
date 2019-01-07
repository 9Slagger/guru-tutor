import axios from 'axios'
import { push } from 'connected-react-router'
import { LOGIN_AUTH, CHECK_AUTH, LOGOUT_AUTH, VERIFY_AUTH } from './type'

// check token
export const checkAuth = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({
      type: CHECK_AUTH,
      payload: { data: token, isFetching: true, isError: false }
    })
  }
}

// click login
export const signinAuth = user => {
  return dispatch => {
    axios
      .post(`https://mytutorapi.herokuapp.com/login`, user)
      .then(res => {
        const token = `Bearer ${res.data.token}`
        localStorage.setItem('token', token)
        dispatch({
          type: LOGIN_AUTH,
          payload: { data: [res.data.user], isFetching: true, isError: false }
        })
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
    token &&
      axios
        .get(`https://mytutorapi.herokuapp.com/restricted/auth`, {
          headers: { Authorization: token }
        })
        .then(res => {
          dispatch({
            type: VERIFY_AUTH,
            payload: { data: [res.data], isFetching: true, isError: false }
          })
        })
        .catch(error => {
          dispatch({ type: VERIFY_AUTH, payload: [] })
          console.log(error.message)
        })
  }
}

// click logout
export const SignoutAuth = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({ type: LOGOUT_AUTH })
    dispatch(push('/'))
  }
}
