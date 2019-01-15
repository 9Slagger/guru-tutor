import {
  FETCH_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_SUCESS
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSE:
      return { ...state, isFetching: true, isError: false }
    case FETCH_COURSE_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_COURSE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
