import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import App from './views/App'
import configureStore from './redux/store'

const reduxStore = configureStore()

render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('app')
)
