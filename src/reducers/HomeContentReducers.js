import {
  FETCH_HOME_CONTENT,
  FETCH_HOME_CONTENT_SUCESS,
  FETCH_HOME_CONTENT_FAILURE
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_HOME_CONTENT:
      return { ...state, data: [], isFetching: true, isError: false }
    case FETCH_HOME_CONTENT_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_HOME_CONTENT_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }
    default:
      return state
  }
}
