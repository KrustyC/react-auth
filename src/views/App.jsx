import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'

import AppRoutes from './routes'

const history = createBrowserHistory()

// @TODO Mode and size could change for responsive stuff
const App = () => (
  <ThemeProvider theme={{ mode: 'light', size: 'normal' }}>
    <Router history={history}>
      <AppRoutes />
    </Router>
  </ThemeProvider>
)

export default App
