import { FETCH_HOME_CONTENT, CREATE_HOME_CONTENT } from '../actions/type'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HOME_CONTENT:
      return action.payload
    case CREATE_HOME_CONTENT:
      return state
    default:
      return state
  }
}
