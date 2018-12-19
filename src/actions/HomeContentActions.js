import axios from 'axios'
import { FETCH_HOME_CONTENT } from './type'

export const fetchHomeContent = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .get('https://mytutorapi.herokuapp.com/homecontent', {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({ type: FETCH_HOME_CONTENT, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
