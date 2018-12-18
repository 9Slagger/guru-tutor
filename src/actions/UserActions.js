import axios from 'axios'
import { USERS_CREATE, USERS_FETCH, USER_DELETE } from './type'

export const usersFetch = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .get('https://mytutorapi.herokuapp.com/restricted/member', {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({ type: USERS_FETCH, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const userCreate = user => {
  return async dispatch => {
    axios
      .post('https://mytutorapi.herokuapp.com/register', user)
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: USERS_CREATE, payload: response.data })
          alert(response.data.Message)
        }
      })
      .catch(error => {
        alert(error)
      })
  }
}

export const userDelete = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .delete(`https://mytutorapi.herokuapp.com/restricted/member?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        axios
          .get('https://mytutorapi.herokuapp.com/restricted/member', {
            headers: { Authorization: token }
          })
          .then(response => {
            dispatch({ type: USER_DELETE, payload: response.data })
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
