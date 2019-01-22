import axios from 'axios'
import Swal from 'sweetalert2'
import { push } from 'connected-react-router'
import {
  FETCH_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_SUCESS,
  CREATE_COURSE,
  CREATE_COURSE_SUCESS,
  CREATE_COURSE_FAILURE,
  EDIT_COURSE,
  EDIT_COURSE_FAILURE,
  EDIT_COURSE_SUCESS,
  FETCH_ONE_COURSE,
  FETCH_ONE_COURSE_FAILURE,
  FETCH_ONE_COURSE_SUCESS,
  DELETE_COURSE,
  DELETE_COURSE_FAILURE,
  DELETE_COURSE_SUCESS
} from './type'

export const fetchCourse = () => {
  return dispatch => {
    dispatch({ type: FETCH_COURSE })
    axios
      .get(`https://mytutorapi.herokuapp.com/course`)
      .then(res => {
        dispatch({ type: FETCH_COURSE_SUCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_COURSE_FAILURE })
        console.log(error)
      })
  }
}

export const fetchOneCourse = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_ONE_COURSE })
    axios
      .get(`https://mytutorapi.herokuapp.com/restricted/courseone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        dispatch({ type: FETCH_ONE_COURSE_SUCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_ONE_COURSE_FAILURE })
        console.log(error)
      })
  }
}

export const createCourse = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_COURSE })
    axios
      .post(`https://mytutorapi.herokuapp.com/restricted/course`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: CREATE_COURSE_SUCESS })
        dispatch(push('/dashboard/course'))
        Swal({
          type: 'success',
          title: 'เพิ่มคอร์สสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: CREATE_COURSE_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มคอร์สล้มเหลว!'
        })
      })
  }
}

export const editCourse = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_COURSE })
    axios
      .put(
        `https://mytutorapi.herokuapp.com/restricted/course?id=${id}`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: EDIT_COURSE_SUCESS })
        dispatch(push('/dashboard/course'))
        Swal({
          type: 'success',
          title: 'แก้ไขคอร์สสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: EDIT_COURSE_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'แก้ไขคอร์สล้มเหลว!'
        })
      })
  }
}

export const deleteCourse = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_COURSE })
    axios
      .delete(`https://mytutorapi.herokuapp.com/restricted/course?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: DELETE_COURSE_SUCESS })
        dispatch(fetchCourse())
        Swal({
          type: 'success',
          title: 'ลบคอร์สสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: DELETE_COURSE_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'ลบคอร์สล้มเหลว!'
        })
      })
  }
}
