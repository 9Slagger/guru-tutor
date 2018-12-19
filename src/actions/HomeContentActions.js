import axios from 'axios'
import { FETCH_HOME_CONTENT } from './type'

export const fetchHomeContent = () => {
  return dispatch => {
    axios
      .get('https://mytutorapi.herokuapp.com/homecontent')
      .then(response => {
        dispatch({ type: FETCH_HOME_CONTENT, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
