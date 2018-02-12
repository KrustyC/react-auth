import Immutable from 'seamless-immutable'
import { combineReducers } from 'redux'

import { Action, Call } from '../../../utils/remoteCall'

import {
  LOGIN,
  LOGOUT, SET_REDIRECT_AFTER_LOGIN
} from './types'
import { createReducer } from '../../utils'

const initialState = Immutable({
  user: Call.notAsked()
})

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.Pending(LOGIN):
      return Immutable.set(state, 'user', Call.pending())
    case Action.Error(LOGIN):
      return Immutable.set(state, 'user', Call.error(action.payload))
    case Action.Ok(LOGIN):
      return Immutable.set(state, 'user', Call.ok(action.payload.user))
    default:
      return state;
  }
}

export default authReducer

