import { handleActions } from 'redux-actions'
import * as types from '../constants/MenuActions'
import { TYPE_HOTENTRY, CATEGORY_ALL } from '../constants/ApiCategory'

const initialState = {
  open: false,
  selectedType: TYPE_HOTENTRY,
  selectedCategory: CATEGORY_ALL,
}

const menu = handleActions({
  [types.TOGGLE_MENU]: (state, action) => (
    { ...state, open: !state.open }
  ),

  [types.SELECT_MENU]: (state, action) => (
    { ...state, open: false, selectedCategory: action.payload }
  ),

  [types.SELECT_TAB]: (state, action) => (
    { ...state, selectedType: action.payload }
  )
}, initialState)

export default menu
