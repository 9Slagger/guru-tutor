import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as reduxForm } from 'redux-form'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import HomeContentReducers from './HomeContentReducers'
import NewContentReducer from './NewContentReducer'
import PromotionActionReducer from './PromotionActionReducer'
import CourseReducer from './CourseReducer'

export default history =>
  combineReducers({
    users: UserReducer,
    auth: AuthReducer,
    homecontent: HomeContentReducers,
    newcontent: NewContentReducer,
    promotioncontent: PromotionActionReducer,
    courses: CourseReducer,
    form: reduxForm,
    router: connectRouter(history)
  })
