import { FETCH_NEW_CONTENT } from '../actions/type'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NEW_CONTENT:
      return action.payload
    default:
      return state
  }
}
