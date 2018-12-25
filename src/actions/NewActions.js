import Swal from 'sweetalert2'
import axios from 'axios'
import { FETCH_NEW_CONTENT, CREATE_NEW_CONTEN } from './type'

export const fetchNewContent = () => {
  return dispatch => {
    axios
      .get('https://mytutorapi.herokuapp.com/news')
      .then(response => {
        dispatch({ type: FETCH_NEW_CONTENT, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const createNewContent = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .post(`http://localhost:80/restricted/news`, data, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({ type: CREATE_NEW_CONTEN, payload: response.data })
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
