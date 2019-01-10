import Swal from 'sweetalert2'
import axios from 'axios'
import {
  FETCH_NEW_CONTENT,
  FETCH_NEW_CONTENT_SUCESS,
  FETCH_NEW_CONTENT_FAILURE,
  EDIT_NEW_CONTEN,
  EDIT_NEW_CONTEN_SUCESS,
  EDIT_NEW_CONTEN_FAILURE,
  DELETE_NEW_CONTEN,
  DELETE_NEW_CONTEN_SUCESS,
  DELETE_NEW_CONTEN_FAILURE
} from './type'

export const fetchNewContent = () => {
  return dispatch => {
    dispatch({ type: FETCH_NEW_CONTENT })
    axios
      .get('https://mytutorapi.herokuapp.com/news')
      .then(response => {
        dispatch({
          type: FETCH_NEW_CONTENT_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ type: FETCH_NEW_CONTENT_FAILURE })
        console.log(error)
      })
  }
}

export const fetchOneNewContent = id => {
  return dispatch => {
    dispatch({ type: FETCH_NEW_CONTENT })
    axios
      .get(`https://mytutorapi.herokuapp.com/newsone?id=${id}`)
      .then(response => {
        dispatch({
          type: FETCH_NEW_CONTENT_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({ type: FETCH_NEW_CONTENT_FAILURE })
        console.log(error)
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
        dispatch(fetchNewContent())
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

export const deleteNewContent = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_NEW_CONTEN })
    axios
      .delete(`https://mytutorapi.herokuapp.com/restricted/news?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: DELETE_NEW_CONTEN_SUCESS })
        dispatch(fetchNewContent())
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: DELETE_NEW_CONTEN_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!'
        })
      })
  }
}
