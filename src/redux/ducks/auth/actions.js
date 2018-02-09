import { INITIALIZE, LOGIN, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from './types'
import api from '../../../services/ApiSingleton'

export const login = data => dispatch => (
  api.auth.login(data).then(({ user }) => {
    dispatch({ type: LOGIN, payload: user })
  }).catch((err) => {
    // if (err.status >= 400 && err.status < 500) {
    //   throw new SubmissionError(err.data.errors)
    // }

    // throw new SubmissionError({ _error: err.error })
  })
)

export const logout = ( ) => ({
  type: LOGOUT
})

export const initializeSession = ( ) => ({
  type: INITIALIZE
})

export const setRedirectAfterLogin = ( ) => ({
  type: SET_REDIRECT_AFTER_LOGIN
})
