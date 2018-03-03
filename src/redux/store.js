import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import thunkMiddleware   from 'redux-thunk'

import * as reducers from './ducks'
import { promiseMiddleware } from './middlewares'

const logger = createLogger({
  predicate: (getState, action) => !action.type.includes('@@redux-form')
})

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
  })

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      promiseMiddleware,
      thunkMiddleware,
      logger
    )
  )
}
