import Swal from 'sweetalert2'
import axios from 'axios'
import {
  FETCH_PROMOTION_CONTENT,
  FETCH_PROMOTION_CONTENT_SUCESS,
  FETCH_PROMOTION_CONTENT_FAILURE
} from './type'

export const fetchPromotionContent = () => {
  return dispatch => {
    dispatch({ type: FETCH_PROMOTION_CONTENT })
    axios
      .get('https://mytutorapi.herokuapp.com/promotion')
      .then(response => {
        dispatch({
          type: FETCH_PROMOTION_CONTENT_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ type: FETCH_PROMOTION_CONTENT_FAILURE })
        console.log(error)
      })
  }
}

export const createPromotionContent = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .post(`http://localhost:80/restricted/promotion`, data, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({ type: FETCH_PROMOTION_CONTENT, payload: response.data })
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
