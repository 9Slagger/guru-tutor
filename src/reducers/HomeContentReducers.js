import { FETCH_HOME_CONTENT, CREATE_HOME_CONTENT } from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME_CONTENT:
      return action.payload
    case CREATE_HOME_CONTENT:
      return action.payload
    default:
      return state
  }
}
