import { handleActions } from 'redux-actions'
import * as types from '../constants/ActionTypes'
import { TYPE_HOTENTRY, CATEGORY_ALL } from '../constants/ApiCategory'

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
  [types.FETCH_SUCCESS]: (state, action) => ({ ...state, id: nextBookmarkId++ }),
}, initialState)

const initialBookmarksState = {
  type: TYPE_HOTENTRY,
  category: CATEGORY_ALL,
  bookmarks: []
}

const bookmarks = handleActions({
  [types.FETCH_REQUEST]: (state, action) => ({ ...state, bookmarks: [] }),

  [types.FETCH_SUCCESS]: (state, action) => {
    const { type, category, query } = action.payload
    let items = query.results.item

    return {
      ...state,
      type: type,
      category: category,
      bookmarks: items.map(b => bookmark(b, action))
    }
  },

  [types.FETCH_FAILURE]: (state, aciton) => ({ ...state, bookmarks: [] })

}, initialBookmarksState)

export default bookmarks
