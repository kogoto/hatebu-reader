import { combineReducers } from 'redux'
import menu from './menu'
import bookmarks from './bookmarks'

const reducers = combineReducers({
  menu,
  bookmarks
})

export default reducers
