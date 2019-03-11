import axios from 'axios'
import { FETCH_IMAGE, FETCH_IMAGE_FAILURE, FETCH_IMAGE_SUCESS } from './type'
import { api } from './api'

export const fetchImage = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_IMAGE })
    axios
      .get(`${api}/restricted/img`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_IMAGE_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ type: FETCH_IMAGE_FAILURE })
        console.log(error.response)
      })
  }
}
