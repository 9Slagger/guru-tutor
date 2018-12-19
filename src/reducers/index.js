import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import HomeContentReducers from './HomeContentReducers'

export default history =>
  combineReducers({
    users: UserReducer,
    auth: AuthReducer,
    homecontent: HomeContentReducers,
    router: connectRouter(history)
  })
