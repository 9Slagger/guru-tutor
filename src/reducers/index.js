import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import HomeContentReducers from './HomeContentReducers'
import NewContentReducer from './NewContentReducer'

export default history =>
  combineReducers({
    users: UserReducer,
    auth: AuthReducer,
    homecontent: HomeContentReducers,
    newcontent: NewContentReducer,
    router: connectRouter(history)
  })
