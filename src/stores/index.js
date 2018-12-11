import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'

import rootReducers from '../reducers'

export const history = createHistory()
const historyRouterMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducers(history),
  applyMiddleware(thunk, historyRouterMiddleware, createLogger)
)

export default store
