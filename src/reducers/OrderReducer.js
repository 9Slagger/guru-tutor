import {
  FETCH_ONE_ORDER,
  FETCH_ONE_ORDER_FAILURE,
  FETCH_ONE_ORDER_SUCESS,
  FETCH_ORDER,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_SUCESS
} from '../actions/type'

const initialState = {
  data: [],
  dataone: {},
  isFetching: false,
  isError: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ONE_ORDER:
      return { ...state, isFetching: true, isError: false }
    case FETCH_ONE_ORDER_SUCESS:
      return { ...state, dataone: payload, isFetching: false, isError: false }
    case FETCH_ONE_ORDER_FAILURE:
      return { ...state, isFetching: false, isError: true }

    case FETCH_ORDER:
      return { ...state, isFetching: true, isError: false }
    case FETCH_ORDER_SUCESS:
      return { ...state, data: payload, isFetching: false, isError: false }
    case FETCH_ORDER_FAILURE:
      return { ...state, isFetching: false, isError: true }

    default:
      return state
  }
}
