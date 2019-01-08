import Swal from 'sweetalert2'
import axios from 'axios'
import {
  FETCH_HOME_CONTENT,
  FETCH_HOME_CONTENT_SUCESS,
  FETCH_HOME_CONTENT_FAILURE,
  CREATE_HOME_CONTENT_FIRST,
  CREATE_HOME_CONTENT_FIRST_SUCESS,
  CREATE_HOME_CONTENT_FIRST_FAILURE,
  CREATE_HOME_CONTENT_SECOND,
  CREATE_HOME_CONTENT_SECOND_SUCESS,
  CREATE_HOME_CONTENT_SECOND_FAILURE
  // EDIT_HOME_CONTENT_FIRST,
  // EDIT_HOME_CONTENT_FIRST_SUCESS_sucess,
  // EDIT_HOME_CONTENT_FIRST_FAILURE,
  // DELETE_HOME_CONTENT_FIRST,
  // DELETE_HOME_CONTENT_FIRST_SUCESS,
  // DELETE_HOME_CONTENT_FIRST_FAILURE,
  // CREATE_HOME_CONTENT_SECOND,
  // CREATE_HOME_CONTENT_SECOND_SUCESS,
  // CREATE_HOME_CONTENT_SECOND_FAILURE,
  // EDIT_HOME_CONTENT_SECOND,
  // EDIT_HOME_CONTENT_SECOND_SUCESS,
  // EDIT_HOME_CONTENT_SECOND_FAILURE,
  // DELETE_HOME_CONTENT_SECOND,
  // DELETE_HOME_CONTENT_SECOND_SUCESS,
  // DELETE_HOME_CONTENT_SECOND_FAILURE
} from './type'

export const fetchHomeContent = () => {
  return dispatch => {
    dispatch({ type: FETCH_HOME_CONTENT })
    axios
      .get('https://mytutorapi.herokuapp.com/homecontent')
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

export const createHomeContentFirst = data => {
  return async dispatch => {
    const token = await localStorage.getItem('token')
    dispatch({ type: CREATE_HOME_CONTENT_FIRST })
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
        dispatch({ type: CREATE_HOME_CONTENT_FIRST_SUCESS })
        axios
          .get('https://mytutorapi.herokuapp.com/homecontent')
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
      })
      .catch(error => {
        dispatch({
          type: CREATE_HOME_CONTENT_FIRST_FAILURE
        })
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
    dispatch({ type: CREATE_HOME_CONTENT_SECOND })
    axios
      .post(
        `https://mytutorapi.herokuapp.com/restricted/homecontentthird`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(() => {
        dispatch({
          type: CREATE_HOME_CONTENT_SECOND_SUCESS
        })
        Swal({
          type: 'success',
          title: 'เพิ่มเนื้อหาสำเร็จ!'
        })
        axios
          .get('https://mytutorapi.herokuapp.com/homecontent')
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
      })
      .catch(error => {
        dispatch({
          type: CREATE_HOME_CONTENT_SECOND_FAILURE
        })
        console.log(error)
        Swal({
          type: 'error',
          title: 'เพิ่มเนื้อหาล้มเหลว!'
        })
      })
  }
}
