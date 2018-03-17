import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import AppRoutes from './routes'

const history = createBrowserHistory()

// @TODO Mode and size could change for responsive stuff
const App = () => (
  <Router history={history}>
    <AppRoutes />
  </Router>
)

export default App
