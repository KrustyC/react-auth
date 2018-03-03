import Immutable from 'seamless-immutable'
import { combineReducers } from 'redux'

import { Action, Call } from '../../../utils/remoteCall'

import { LOGOUT, SET_REDIRECT_AFTER_LOGIN } from './types'
import { createReducer } from '../../utils'

const initialState = Immutable({
  user: Call.notAsked()
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer

