import Swal from 'sweetalert2'
import { push } from 'connected-react-router'
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
  DELETE_NEW_CONTEN_FAILURE,
  CREATE_NEW_CONTEN,
  CREATE_NEW_CONTEN_FAILURE,
  CREATE_NEW_CONTEN_SUCESS
} from './type'
import { api } from './api'

export const fetchNewContent = () => {
  return dispatch => {
    dispatch({ type: FETCH_NEW_CONTENT })
    axios
      .get(`${api}/news`)
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
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_NEW_CONTENT })
    axios
      .get(`${api}/restricted/newsone?id=${id}`, {
        headers: { Authorization: token }
      })
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
      .put(`${api}/restricted/news?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: EDIT_NEW_CONTEN_SUCESS })
        dispatch(fetchNewContent())
        dispatch(push('/dashboard/managenew'))
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

export const createNewContent = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_NEW_CONTEN })
    axios
      .post(`${api}/restricted/news`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: CREATE_NEW_CONTEN_SUCESS })
        dispatch(fetchNewContent())
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: CREATE_NEW_CONTEN_FAILURE })
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
      .delete(`${api}/restricted/news?id=${id}`, {
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
