import axios from 'axios'
// import { push } from 'connected-react-router'
import { FETCH_COURSE, FETCH_COURSE_FAILURE, FETCH_COURSE_SUCESS } from './type'

export const fetchCourse = user => {
  return dispatch => {
    dispatch({ type: FETCH_COURSE })
    axios
      .get(`https://mytutorapi.herokuapp.com/course`, user)
      .then(res => {
        dispatch({ type: FETCH_COURSE_SUCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_COURSE_FAILURE })
        console.log(error)
      })
  }
}
