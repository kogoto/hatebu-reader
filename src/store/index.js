import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers'

const logger = createLogger()

const middleware = [
  logger,
  thunkMiddleware
]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store
