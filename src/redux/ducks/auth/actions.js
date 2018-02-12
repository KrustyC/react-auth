import { INITIALIZE, LOGIN, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from './types'
import api from '../../../services/ApiSingleton'

export const login = data => dispatch => (
  dispatch({ type: LOGIN, promise: api.auth.login(data) })
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
