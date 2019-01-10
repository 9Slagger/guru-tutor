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
  FETCH_HOME_CONTENT_THIRD_FAILURE
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

    case FETCH_HOME_CONTENT_FIRST:
      return { ...state, data: [], isFetching: true, isError: false }
    case FETCH_HOME_CONTENT_FIRST_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_HOME_CONTENT_FIRST_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }

    case FETCH_HOME_CONTENT_SECONDE:
      return { ...state, data: [], isFetching: true, isError: false }
    case FETCH_HOME_CONTENT_SECONDE_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_HOME_CONTENT_SECONDE_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }

    case FETCH_HOME_CONTENT_THIRD:
      return { ...state, data: [], isFetching: true, isError: false }
    case FETCH_HOME_CONTENT_THIRD_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_HOME_CONTENT_THIRD_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }
    default:
      return state
  }
}
