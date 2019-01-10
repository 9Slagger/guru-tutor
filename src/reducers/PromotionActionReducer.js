import {
  FETCH_PROMOTION_CONTENT,
  FETCH_PROMOTION_CONTENT_SUCESS,
  FETCH_PROMOTION_CONTENT_FAILURE
} from '../actions/type'

const initialState = {
  data: [],
  isFetching: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROMOTION_CONTENT:
      return { ...state, isFetching: true, isError: false }
    case FETCH_PROMOTION_CONTENT_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_PROMOTION_CONTENT_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
