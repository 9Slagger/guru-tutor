import { USERS_CREATE, USERS_FETCH, USER_DELETE } from '../actions/type'

export default function(state = [], action) {
  switch (action.type) {
    case USERS_FETCH:
      return action.payload
    case USER_DELETE:
      return action.payload
    case USERS_CREATE:
      return action.payload
    default:
      return state
  }
}
