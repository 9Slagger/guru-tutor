import Swal from 'sweetalert2'
import axios from 'axios'
import {
  FETCH_PROMOTION_CONTENT,
  FETCH_PROMOTION_CONTENT_SUCESS,
  FETCH_PROMOTION_CONTENT_FAILURE,
  DELETE_PROMOTION_CONTEN,
  DELETE_PROMOTION_CONTEN_SUCESS,
  DELETE_PROMOTION_CONTEN_FAILURE,
  CREATE_PROMOTION_CONTEN,
  CREATE_PROMOTION_CONTEN_SUCESS,
  CREATE_PROMOTION_CONTEN_FAILURE,
  EDIT_NEW_CONTEN,
  EDIT_NEW_CONTEN_SUCESS,
  EDIT_NEW_CONTEN_FAILURE
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

export const fetchOnePromotionContent = id => {
  return dispatch => {
    dispatch({ type: FETCH_PROMOTION_CONTENT })
    axios
      .get(`https://mytutorapi.herokuapp.com/promotionone?id=${id}`)
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
    dispatch({ type: CREATE_PROMOTION_CONTEN })
    axios
      .post(`https://mytutorapi.herokuapp.com/restricted/promotion`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: CREATE_PROMOTION_CONTEN_SUCESS })
        dispatch(fetchPromotionContent())
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: CREATE_PROMOTION_CONTEN_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const editNewContent = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_NEW_CONTEN })
    axios
      .put(`https://mytutorapi.herokuapp.com/restricted/news?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: EDIT_NEW_CONTEN_SUCESS })
        dispatch(fetchPromotionContent())
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: EDIT_NEW_CONTEN_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const deletePromotionContent = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_PROMOTION_CONTEN })
    axios
      .delete(
        `https://mytutorapi.herokuapp.com/restricted/promotion?id=${id}`,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: DELETE_PROMOTION_CONTEN_SUCESS })
        dispatch(fetchPromotionContent())
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: DELETE_PROMOTION_CONTEN_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!'
        })
      })
  }
}
