import { FETCH_HOME_CONTENT } from '../actions/type'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HOME_CONTENT:
      return action.payload
    default:
      return state
  }
}
