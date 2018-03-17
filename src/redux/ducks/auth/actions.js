import { SubmissionError } from 'redux-form'

import { INITIALIZE, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from './types'
// import { Action } from '../../../utils/remoteCall'
import api from '../../../services/ApiSingleton'

export const login = data => dispatch => api.auth.login(data).then((res) => {
  // console.log('LOGGATO', res)
    // @TODO DISPATCH TO SET THE TOKEN
    // @TODO ROTUING WITH BROWSER HISTORY
}).catch((err) => {
  if (err.status >= 400 && err.status < 500) {
    throw new SubmissionError(err.data.errors)
  }

  throw new SubmissionError({ _error: err.error })
})

// dispatch({ type: LOGIN, promise: api.auth.login(data) })

export const logout = () => ({
  type: LOGOUT
})

export const initializeSession = () => ({
  type: INITIALIZE
})

export const setRedirectAfterLogin = () => ({
  type: SET_REDIRECT_AFTER_LOGIN
})
