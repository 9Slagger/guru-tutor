import {
  USERS_FETCH,
  USERS_FETCH_SUCESS,
  USERS_FETCH_FAILURE,
  USERS_CREATE,
  USERS_CREATE_SUCESS,
  USERS_CREATE_FAILURE,
  USER_DELETE,
  USER_DELETE_SUCESS,
  USER_DELETE_FAILURE,
  USER_EDIT_TYPE,
  USER_EDIT_TYPE_SUCESS,
  USER_EDIT_TYPE_FAILURE
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case USERS_FETCH:
      return { ...state, isFetching: true, isError: false }
    case USERS_FETCH_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case USERS_FETCH_FAILURE:
      return { ...state, isFetching: false, isError: true }

    case USERS_CREATE:
      return { ...state, isFetching: true, isError: false }
    case USERS_CREATE_SUCESS:
      return { ...state, isFetching: false, isError: false }
    case USERS_CREATE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    case USER_DELETE:
      return { ...state, isFetching: true, isError: false }
    case USER_DELETE_SUCESS:
      return { ...state, isFetching: false, isError: false }
    case USER_DELETE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    case USER_EDIT_TYPE:
      return { ...state, isFetching: true, isError: false }
    case USER_EDIT_TYPE_SUCESS:
      return { ...state, isFetching: false, isError: false }
    case USER_EDIT_TYPE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
