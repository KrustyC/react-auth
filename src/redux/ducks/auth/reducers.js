import { combineReducers } from 'redux'
import { LOGIN, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from './types'
import { createReducer } from '../../utils'

const initialState = {
  user: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload }
    default:
      return state;
  }
}

export default authReducer

