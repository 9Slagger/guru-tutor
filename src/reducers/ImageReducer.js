import {
  FETCH_IMAGE,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_SUCESS
} from '../actions/type'

const initialState = {
  data: [],
  dataone: {},
  isFetching: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_IMAGE:
      return { ...state, isFetching: true, isError: false }
    case FETCH_IMAGE_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_IMAGE_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
