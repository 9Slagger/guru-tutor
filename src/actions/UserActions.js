import Swal from 'sweetalert2'
import axios from 'axios'

import {
  USERS_FETCH,
  USERS_FETCH_SUCESS,
  USERS_FETCH_FAILURE,
  USERS_CREATE,
  USERS_CREATE_SUCESS,
  USERS_CREATE_FAILURE,
  USER_DELETE,
  USER_DELETE_SUCESS,
  USER_DELETE_FAILURE,
  USER_EDIT_TYPE,
  USER_EDIT_TYPE_SUCESS,
  USER_EDIT_TYPE_FAILURE,
  USER_EDIT,
  USER_EDIT_FAILURE,
  USER_EDIT_SUCESS
} from './type'
import { api } from './api'
import { VerifyAuth } from './AuthActions'

export const usersFetch = () => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: USERS_FETCH })
    axios
      .get(`${api}/restricted/member`, {
        headers: { Authorization: token }
      })
      .then(response => {
        let result = response.data
        result.map(data => {
          if (data.UserType === 'admin') {
            data.sort = 100000000000 + parseInt(data.TelephoneNumber, 10)
            return data
          } else if (data.UserType === 'tutor') {
            data.sort = 200000000000 + parseInt(data.TelephoneNumber, 10)
            return data
          } else {
            data.sort = 300000000000 + parseInt(data.TelephoneNumber, 10)
            return data
          }
        })
        result.sort((a, b) => parseInt(a.sort, 10) - parseInt(b.sort, 10))
        dispatch({ type: USERS_FETCH_SUCESS, payload: result })
      })
      .catch(error => {
        dispatch({ type: USERS_FETCH_FAILURE })
        console.log(error)
      })
  }
}

export const usersChangeEditStatus = data => {
  return dispatch => {
    dispatch({ type: USERS_FETCH_SUCESS, payload: data })
  }
}

export const userCreate = user => {
  return async dispatch => {
    dispatch({ type: USERS_CREATE })
    axios
      .post(`${api}/register`, user)
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: USERS_CREATE_SUCESS })
          Swal.fire({
            type: 'success',
            title: `${response.data.Message}`
          })
        }
      })
      .catch(error => {
        dispatch({ type: USERS_CREATE_FAILURE })
        Swal.fire({
          type: 'error',
          title: `${
            error.response.data.Message
              ? error.response.data.Message
              : 'สมัครสมาชิกล้มเหลว !'
          }`
        })
      })
  }
}

export const userDelete = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: USER_DELETE })
    axios
      .delete(`${api}/restricted/member?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: USER_DELETE_SUCESS })
        dispatch(usersFetch())
        Swal('ลบผู้ใช้สำเร็จ สำเร็จ', 'success')
      })
      .catch(error => {
        dispatch({ type: USER_DELETE_FAILURE })
        console.log(error)
      })
  }
}

export const userEditTpye = (id, name, selectType) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    const data = await { usertype: selectType }
    dispatch({ type: USER_EDIT_TYPE })
    axios
      .put(`${api}/restricted/member/usertype?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: USER_EDIT_TYPE_SUCESS })
        dispatch(usersFetch())
        Swal(
          'แก้ไขสิทธิ สำเร็จ',
          `แก้ไขสิทธิให้ คุณ ${name} เป็น ${selectType} สำเร็จ`,
          'success'
        )
      })
      .catch(error => {
        dispatch({ type: USER_EDIT_TYPE_FAILURE })
        Swal.fire({
          type: 'error',
          title: `${
            error.response.data.Message
              ? error.response.data.Message
              : 'แก้ไขสิทธิ ล้มเหลว'
          }`
        })
        console.log(error)
      })
  }
}

export const userEditProfile = (id, data) => {
  console.log('values', data)
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: USER_EDIT })
    axios
      .put(`${api}/restricted/member?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({ type: USER_EDIT_SUCESS })
        dispatch(VerifyAuth())
        Swal('แก้ไขโปรไฟล์ สำเร็จ', 'success')
      })
      .catch(error => {
        dispatch({ type: USER_EDIT_FAILURE })
        Swal.fire({
          type: 'error',
          title: `${
            error.response.data.Message
              ? error.response.data.Message
              : 'แก้ไขโปรไฟล์ ล้มเหลว'
          }`
        })
        console.log(error)
      })
  }
}
