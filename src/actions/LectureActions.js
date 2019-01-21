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
  FETCH_ONE_LECTURE_SUCESS
} from './type'

export const fetchOneLecture = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_ONE_LECTURE })
    axios
      .get(`https://mytutorapi.herokuapp.com/restricted/lecturesone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        dispatch({ type: FETCH_ONE_LECTURE_SUCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_ONE_LECTURE_FAILURE })
        console.log(error)
      })
  }
}

export const editLecture = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_LECTURE })
    axios
      .put(
        `https://mytutorapi.herokuapp.com/restricted/lectures?id=${id}`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: EDIT_LECTURE_SUCESS })
        Swal({
          type: 'success',
          title: 'แก้ไขLectureสำเร็จ!'
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

export const createLecture = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_LECTURE })
    console.log('id = ', id)
    console.log('data = ', data)
    axios
      .post(
        `https://mytutorapi.herokuapp.com/restricted/lectures?id=${id}`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: CREATE_LECTURE_SUCESS })
        Swal({
          type: 'success',
          title: 'เพิ่มLectureสสำเร็จ!'
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
