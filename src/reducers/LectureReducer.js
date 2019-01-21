import {
  FETCH_ONE_LECTURE,
  FETCH_ONE_LECTURE_FAILURE,
  FETCH_ONE_LECTURE_SUCESS
} from '../actions/type'
const initialState = {
  data: [],
  dataone: {},
  isFetching: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ONE_LECTURE:
      return { ...state, isFetching: true, isError: false }
    case FETCH_ONE_LECTURE_SUCESS:
      return { ...state, dataone: payload, isFetching: false, isError: false }
    case FETCH_ONE_LECTURE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
