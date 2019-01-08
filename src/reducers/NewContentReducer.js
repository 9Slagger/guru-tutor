import {
  FETCH_NEW_CONTENT,
  FETCH_NEW_CONTENT_SUCESS,
  FETCH_NEW_CONTENT_FAILURE
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_NEW_CONTENT:
      return { ...state, data: [], isFetching: true, isError: false }
    case FETCH_NEW_CONTENT_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_NEW_CONTENT_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }

    default:
      return state
  }
}
