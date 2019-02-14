import Swal from 'sweetalert2'
import { push } from 'connected-react-router'
import axios from 'axios'
import {
  FETCH_HOME_CONTENT,
  FETCH_HOME_CONTENT_SUCESS,
  FETCH_HOME_CONTENT_FAILURE,
  FETCH_HOME_CONTENT_FIRST,
  FETCH_HOME_CONTENT_FIRST_SUCESS,
  FETCH_HOME_CONTENT_FIRST_FAILURE,
  FETCH_HOME_CONTENT_SECONDE,
  FETCH_HOME_CONTENT_SECONDE_SUCESS,
  FETCH_HOME_CONTENT_SECONDE_FAILURE,
  FETCH_HOME_CONTENT_THIRD,
  FETCH_HOME_CONTENT_THIRD_SUCESS,
  FETCH_HOME_CONTENT_THIRD_FAILURE,
  CREATE_HOME_CONTENT_FIRST,
  CREATE_HOME_CONTENT_FIRST_SUCESS,
  CREATE_HOME_CONTENT_FIRST_FAILURE,
  CREATE_HOME_CONTENT_SECOND,
  CREATE_HOME_CONTENT_SECOND_SUCESS,
  CREATE_HOME_CONTENT_SECOND_FAILURE,
  EDIT_HOME_CONTENT_FIRST,
  EDIT_HOME_CONTENT_FIRST_SUCESS,
  EDIT_HOME_CONTENT_FIRST_FAILURE,
  EDIT_HOME_CONTENT_SOCOND,
  EDIT_HOME_CONTENT_SOCOND_SUCESS,
  EDIT_HOME_CONTENT_SOCOND_FAILURE,
  EDIT_HOME_CONTENT_THIRD,
  EDIT_HOME_CONTENT_THIRD_SUCESS,
  EDIT_HOME_CONTENT_THIRD_FAILURE,
  DELETE_HOME_CONTENT_FIRST,
  DELETE_HOME_CONTENT_FIRST_SUCESS,
  DELETE_HOME_CONTENT_FIRST_FAILURE,
  // EDIT_HOME_CONTENT_SECOND,
  // EDIT_HOME_CONTENT_SECOND_SUCESS,
  // EDIT_HOME_CONTENT_SECOND_FAILURE,
  DELETE_HOME_CONTENT_SECOND,
  DELETE_HOME_CONTENT_SECOND_SUCESS,
  DELETE_HOME_CONTENT_SECOND_FAILURE
} from './type'
import { api } from './api'

export const fetchHomeContent = () => {
  return dispatch => {
    dispatch({ type: FETCH_HOME_CONTENT })
    axios
      .get(`${api}/homecontent`)
      .then(response => {
        dispatch({
          type: FETCH_HOME_CONTENT_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_HOME_CONTENT_FAILURE
        })
        console.log(error)
      })
  }
}

export const fetchOneHomeContentFrist = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_HOME_CONTENT_FIRST })
    axios
      .get(`${api}/restricted/homecontentfirstone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_HOME_CONTENT_FIRST_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_HOME_CONTENT_FIRST_FAILURE
        })
        console.log(error)
      })
  }
}

export const fetchOneHomeContentSecond = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_HOME_CONTENT_SECONDE })
    axios
      .get(`${api}/restricted/homecontentsecondone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_HOME_CONTENT_SECONDE_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_HOME_CONTENT_SECONDE_FAILURE
        })
        console.log(error)
      })
  }
}

export const fetchOneHomeContentThird = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: FETCH_HOME_CONTENT_THIRD })
    axios
      .get(`${api}/restricted/homecontentthirdone?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(response => {
        dispatch({
          type: FETCH_HOME_CONTENT_THIRD_SUCESS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_HOME_CONTENT_THIRD_FAILURE
        })
        console.log(error)
      })
  }
}

export const createHomeContentFirst = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_HOME_CONTENT_FIRST })
    axios
      .post(`${api}/restricted/homecontentfirst`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
        dispatch({ type: CREATE_HOME_CONTENT_FIRST_SUCESS })
        dispatch(fetchHomeContent())
      })
      .catch(error => {
        dispatch({
          type: CREATE_HOME_CONTENT_FIRST_FAILURE
        })
        console.log(error.response)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!',
          text: error.response.data.Err
        })
      })
  }
}

export const editHomecontentThird = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_HOME_CONTENT_THIRD })
    axios
      .put(`${api}/restricted/homecontentthird?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        Swal({
          type: 'success',
          title: 'แก้ไขเนื้อหาสำเร็จ!'
        })
        dispatch({ type: EDIT_HOME_CONTENT_THIRD_SUCESS })
        dispatch(push('/dashboard/managehome'))
      })
      .catch(error => {
        dispatch({
          type: EDIT_HOME_CONTENT_THIRD_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'แก้ไขเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const editHomecontentSecond = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_HOME_CONTENT_SOCOND })
    axios
      .put(`${api}/restricted/homecontentsecond?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        Swal({
          type: 'success',
          title: 'แก้ไขเนื้อหาสำเร็จ!'
        })
        dispatch({ type: EDIT_HOME_CONTENT_SOCOND_SUCESS })
        dispatch(push('/dashboard/managehome'))
      })
      .catch(error => {
        dispatch({
          type: EDIT_HOME_CONTENT_SOCOND_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'แก้ไขเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const editHomecontentFirst = (id, data) => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: EDIT_HOME_CONTENT_FIRST })
    axios
      .put(`${api}/restricted/homecontentfirst?id=${id}`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        Swal({
          type: 'success',
          title: 'แก้ไขเนื้อหาสำเร็จ!'
        })
        dispatch({ type: EDIT_HOME_CONTENT_FIRST_SUCESS })
        dispatch(push('/dashboard/managehome'))
      })
      .catch(error => {
        dispatch({
          type: EDIT_HOME_CONTENT_FIRST_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'แก้ไขเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const deleteHomeContentFirst = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_HOME_CONTENT_FIRST })
    axios
      .delete(`${api}/restricted/homecontentfirst?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        Swal({
          type: 'success',
          title: 'ลบเนื้อหาสำเร็จ!'
        })
        dispatch({ type: DELETE_HOME_CONTENT_FIRST_SUCESS })
        dispatch(fetchHomeContent())
      })
      .catch(error => {
        dispatch({
          type: DELETE_HOME_CONTENT_FIRST_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'ลบเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const deleteHomeContentThird = id => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: DELETE_HOME_CONTENT_SECOND })
    axios
      .delete(`${api}/restricted/homecontentthird?id=${id}`, {
        headers: { Authorization: token }
      })
      .then(() => {
        Swal({
          type: 'success',
          title: 'ลบเนื้อหาสำเร็จ!'
        })
        dispatch({ type: DELETE_HOME_CONTENT_SECOND_SUCESS })
        dispatch(fetchHomeContent())
      })
      .catch(error => {
        dispatch({
          type: DELETE_HOME_CONTENT_SECOND_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'ลบเนื้อหาล้มเหลว!'
        })
      })
  }
}

export const createHomeContentThird = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_HOME_CONTENT_SECOND })
    axios
      .post(`${api}/restricted/homecontentthird`, data, {
        headers: { Authorization: token }
      })
      .then(() => {
        dispatch({
          type: CREATE_HOME_CONTENT_SECOND_SUCESS
        })
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
        dispatch(fetchHomeContent())
      })
      .catch(error => {
        dispatch({
          type: CREATE_HOME_CONTENT_SECOND_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!',
          text: error.response.data.Err
        })
      })
  }
}
