import { createAction } from 'redux-actions'
import * as types from '../constants/MenuActions'

export const toggleMenu = createAction(types.TOGGLE_MENU)
export const selectMenu = createAction(types.SELECT_MENU)
export const selectTab = createAction(types.SELECT_TAB)
