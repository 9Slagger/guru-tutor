import {
  LOGIN_AUTH,
  LOGIN_AUTH_SUCESS,
  LOGIN_AUTH_FAILURE,
  CHECK_AUTH,
  CHECK_AUTH_SUCESS,
  CHECK_AUTH_FAILURE,
  LOGOUT_AUTH,
  VERIFY_AUTH,
  VERIFY_AUTH_SUCESS,
  VERIFY_AUTH_FAILURE
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_AUTH:
      return { ...state, data: [], isFetching: true, isError: false }
    case LOGIN_AUTH_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case LOGIN_AUTH_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }

    case CHECK_AUTH:
      return { ...state, data: [], isFetching: true, isError: false }
    case CHECK_AUTH_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case CHECK_AUTH_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }

    case LOGOUT_AUTH:
      return { ...state, data: [], isFetching: false, isError: false }

    case VERIFY_AUTH:
      return { ...state, data: [], isFetching: false, isError: false }
    case VERIFY_AUTH_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case VERIFY_AUTH_FAILURE:
      return { ...state, data: [], isFetching: false, isError: true }
    default:
      return state
  }
}
