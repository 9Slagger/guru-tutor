import Swal from 'sweetalert2'
import axios from 'axios'
import { FETCH_HOME_CONTENT, CREATE_HOME_CONTENT } from './type'

export const fetchHomeContent = () => {
  return dispatch => {
    axios
      .get('https://mytutorapi.herokuapp.com/homecontent')
      .then(response => {
        dispatch({
          type: FETCH_HOME_CONTENT,
          payload: { data: response.data, isFetching: true, isError: false }
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_HOME_CONTENT,
          payload: { data: [], isFetching: true, isError: true }
        })
        console.log(error)
      })
  }
}

export const createHomeContentFirst = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .post(
        `https://mytutorapi.herokuapp.com/restricted/homecontentfirst`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
        axios
          .get('https://mytutorapi.herokuapp.com/homecontent')
          .then(response => {
            dispatch({
              type: CREATE_HOME_CONTENT,
              payload: { data: response.data, isFetching: true, isError: false }
            })
          })
          .catch(error => {
            dispatch({
              type: CREATE_HOME_CONTENT,
              payload: { data: [], isFetching: true, isError: true }
            })
            console.log(error)
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

export const createHomeContentThird = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    axios
      .post(
        `https://mytutorapi.herokuapp.com/restricted/homecontentthird`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
        axios
          .get('https://mytutorapi.herokuapp.com/homecontent')
          .then(response => {
            dispatch({
              type: CREATE_HOME_CONTENT,
              payload: { data: response.data, isFetching: true, isError: false }
            })
          })
          .catch(error => {
            dispatch({
              type: CREATE_HOME_CONTENT,
              payload: { data: [], isFetching: true, isError: true }
            })
            console.log(error)
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
