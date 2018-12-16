import axios from 'axios'
import { USERS_FETCH, USER_DELETE } from './type'

const maketoken = localStorage.getItem('token')

export const usersFetch = () => {
  return dispatch => {
    axios
      .get('https://mytutorapi.herokuapp.com/restricted/member', {
        headers: { Authorization: maketoken }
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
  return dispatch => {
    axios
      .delete(`https://mytutorapi.herokuapp.com/restricted/member?id=${id}`, {
        headers: { Authorization: maketoken }
      })
      .then(() => {
        axios
          .get('https://mytutorapi.herokuapp.com/restricted/member', {
            headers: { Authorization: maketoken }
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
