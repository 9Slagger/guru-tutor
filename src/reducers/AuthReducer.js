import {
  LOGIN_AUTH,
  CHECK_AUTH,
  LOGOUT_AUTH,
  VERIFY_AUTH
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_AUTH:
      return action.payload
    case CHECK_AUTH:
      return action.payload
    case LOGOUT_AUTH:
      return initialState
    case VERIFY_AUTH:
      return action.payload
    default:
      return state
  }
}
