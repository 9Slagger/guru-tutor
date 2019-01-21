import axios from 'axios'
import Swal from 'sweetalert2'
import {
  FETCH_ONE_SECTION,
  FETCH_ONE_SECTION_FAILURE,
  FETCH_ONE_SECTION_SUCESS,
  EDIT_SECTION,
  EDIT_SECTION_FAILURE,
  EDIT_SECTION_SUCESS,
  CREATE_SECTION,
  CREATE_SECTION_FAILURE,
  CREATE_SECTION_SUCESS,
  DELETE_SECTION,
  DELETE_SECTION_FAILURE,
  DELETE_SECTION_SUCESS
} from './type'

export const fetchOneSection = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_ONE_SECTION })
    axios
      .get(`https://mytutorapi.herokuapp.com/restricted/sectionone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(res => {
        dispatch({ type: FETCH_ONE_SECTION_SUCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_ONE_SECTION_FAILURE })
        console.log(error)
      })
  }
}

export const editSection = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_SECTION })
    axios
      .put(
        `https://mytutorapi.herokuapp.com/restricted/section?id=${id}`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: EDIT_SECTION_SUCESS })
        Swal({
          type: 'success',
          title: 'แก้ไขSectionสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: EDIT_SECTION_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'แก้ไขSectionล้มเหลว!'
        })
      })
  }
}

export const createSection = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_SECTION })
    axios
      .post(
        `https://mytutorapi.herokuapp.com/restricted/section?id=${id}`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: CREATE_SECTION_SUCESS })
        Swal({
          type: 'success',
          title: 'เพิ่มSectionสสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: CREATE_SECTION_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มSectionล้มเหลว!'
        })
      })
  }
}

export const deleteSection = (idsec, idcourse) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_SECTION })
    axios
      .delete(
        `https://mytutorapi.herokuapp.com/restricted/section?idsec=${idsec}&idcourse=${idcourse}`,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({ type: DELETE_SECTION_SUCESS })
        Swal({
          type: 'success',
          title: 'ลบSectionสสำเร็จ!'
        })
      })
      .catch(error => {
        dispatch({ type: DELETE_SECTION_FAILURE })
        console.log(error)
        Swal({
          type: 'error',
          title: 'ลบSectionล้มเหลว!'
        })
      })
  }
}
