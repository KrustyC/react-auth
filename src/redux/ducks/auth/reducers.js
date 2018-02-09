import { combineReducers } from 'redux'
import { LOGIN, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from './types'
import { createReducer } from '../../utils'

/* State shape
{
    isAuthenticated: bool,
    redirectAfterLogin: string
}
*/

const authReducer = createReducer(false)({
  [LOGIN]: (state, action) => console.log("res", res),
  [LOGOUT]: ( ) => false,
})

const redirectAfterLoginReducer = createReducer( null )( {
  [SET_REDIRECT_AFTER_LOGIN]: ( state, action ) => action.payload.redirectUrl
} )

export default combineReducers({
  isAuthenticated: authReducer,
  redirectAfterLogin: redirectAfterLoginReducer,
})
