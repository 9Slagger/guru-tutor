import {
  FETCH_COURSE,
  FETCH_COURSE_FAILURE,
  FETCH_COURSE_SUCESS,
  FETCH_ONE_COURSE,
  FETCH_ONE_COURSE_FAILURE,
  FETCH_ONE_COURSE_SUCESS
} from '../actions/type'

const initialState = {
  data: [],
  dataone: {},
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

    case FETCH_ONE_COURSE:
      return { ...state, isFetching: true, isError: false }
    case FETCH_ONE_COURSE_SUCESS:
      return { ...state, dataone: payload, isFetching: false, isError: false }
    case FETCH_ONE_COURSE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
