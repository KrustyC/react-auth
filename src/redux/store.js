import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware   from 'redux-thunk'
import * as reducers from './ducks'
import { createLogger, promiseMiddleware } from './middlewares'
import { routerReducer } from 'react-router-redux'

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

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
