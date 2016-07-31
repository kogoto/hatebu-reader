import { createAction } from 'redux-actions'
import * as types from '../constants/ApiActions'
import api from '../api/bookmarks'

export const fetchBookmarks =
  createAction(types.FETCH_BOOKMARKS, api.fetchBookmarks)
