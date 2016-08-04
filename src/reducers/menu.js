import { handleActions } from 'redux-actions'
import * as types from '../constants/ActionTypes'

const initialState = {
  open: false
}

const menu = handleActions({
  [types.FETCH_REQUEST]: (state, action) => (
    { ...state, open: false }
  ),

  [types.TOGGLE_MENU]: (state, action) => (
    { ...state, open: !state.open }
  )
}, initialState)

export default menu
