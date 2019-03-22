import axios from 'axios'
import Swal from 'sweetalert2'
import {
  CREATE_LECTURE,
  CREATE_LECTURE_FAILURE,
  CREATE_LECTURE_SUCESS,
  EDIT_LECTURE,
  EDIT_LECTURE_FAILURE,
  EDIT_LECTURE_SUCESS,
  FETCH_ONE_LECTURE,
  FETCH_ONE_LECTURE_FAILURE,
  FETCH_ONE_LECTURE_SUCESS,
  DELETE_LECTURE,
  DELETE_LECTURE_FAILURE,
  DELETE_LECTURE_SUCESS
} from './type'
import { fetchOneCourse } from './CourseActions'
import { api } from './api'

export const fetchOneLecture = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_ONE_LECTURE })
    axios
      .get(`${api}/restricted/lecturesone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        dispatch({ type: FETCH_ONE_LECTURE_SUCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_ONE_LECTURE_FAILURE })
        console.log(error.response)
      })
  }
}

export const editLecture = (idlec, data, id) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_LECTURE })
    axios
      .put(`${api}/restricted/lectures?id=${idlec}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: EDIT_LECTURE_SUCESS })
        dispatch(fetchOneCourse(id))
        Swal({
          type: 'success',
          title: 'แก้ไขLectureสำเร็จ!'
        }).then(result => {
          if (result.value) {
            window.location.reload()
          } else {
            window.location.reload()
          }
        })
      })
      .catch(error => {
        dispatch({ type: EDIT_LECTURE_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'แก้ไขLectureล้มเหลว!'
        })
      })
  }
}

export const createLecture = (idsec, data, id) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_LECTURE })
    axios
      .post(`${api}/restricted/lectures?id=${idsec}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: CREATE_LECTURE_SUCESS })
        dispatch(fetchOneCourse(id))
        Swal({
          type: 'success',
          title: 'เพิ่มLectureสสำเร็จ!'
        }).then(result => {
          if (result.value) {
            window.location.reload()
          } else {
            window.location.reload()
          }
        })
      })
      .catch(error => {
        dispatch({ type: CREATE_LECTURE_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มLectureล้มเหลว!'
        })
      })
  }
}

export const deleteLecture = (idlec, idsec, id) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_LECTURE })
    axios
      .delete(`${api}/restricted/lectures?idlec=${idlec}&idsec=${idsec}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: DELETE_LECTURE_SUCESS })
        dispatch(fetchOneCourse(id))
        Swal({
          type: 'success',
          title: 'ลบVideoสสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: DELETE_LECTURE_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'ลบVideoล้มเหลว!'
        })
      })
  }
}
