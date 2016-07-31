import { handleActions } from 'redux-actions'
import * as types from '../constants/ApiActions'

let nextBookmarkId = 1

const initialState = {
  about: '',
  bookmarkcount: 0,
  date: '',
  description: '',
  encoded: '',
  link: '',
  subject: '',
  title: '',
}

const bookmark = handleActions({
  [types.FETCH_BOOKMARKS]: (state, action) => ({ ...state, id: nextBookmarkId++ }),
}, initialState)

const bookmarks = handleActions({
  [types.FETCH_BOOKMARKS]: {
    next: (state, action) => {
      let items = action.payload.query.results.item
      return items.map(b => bookmark(b, action))
    },

    throw: (state, action) => {
      return []
    }
  }
}, [])

export default bookmarks
