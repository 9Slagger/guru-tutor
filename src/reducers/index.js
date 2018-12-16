import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'

export default history =>
  combineReducers({
    users: UserReducer,
    auth: AuthReducer,
    router: connectRouter(history)
  })
