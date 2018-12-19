import {
  USERS_CREATE,
  USERS_FETCH,
  USER_DELETE,
  USER_EDIT_TYPE
} from '../actions/type'

export default function(state = [], action) {
  switch (action.type) {
    case USERS_FETCH:
      return action.payload
    case USER_DELETE:
      return action.payload
    case USERS_CREATE:
      return action.payload
    case USER_EDIT_TYPE:
      return action.payload
    default:
      return state
  }
}
