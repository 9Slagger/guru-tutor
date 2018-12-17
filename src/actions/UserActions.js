import axios from 'axios'
import { USERS_FETCH, USER_DELETE } from './type'

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
