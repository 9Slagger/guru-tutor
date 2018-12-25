import Swal from 'sweetalert2'
import axios from 'axios'
import { FETCH_HOME_CONTENT, CREATE_HOME_CONTENT } from './type'

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

export const createHomeContent = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .post(
        `https://mytutorapi.herokuapp.com/restricted/homecontentfirst`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(response => {
        dispatch({ type: CREATE_HOME_CONTENT, payload: response.data })
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
      })
      .catch(error => {
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!'
        })
      })
  }
}
