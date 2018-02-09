import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware   from 'redux-thunk'
import * as reducers from './ducks'
import { createLogger, promiseMiddleware } from './middlewares'

export default function configureStore(initialState) {
  const rootReducer = combineReducers(reducers)

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      promiseMiddleware,
      thunkMiddleware,
      createLogger(true)
    )
  )
}
