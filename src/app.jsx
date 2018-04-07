import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import AppRoutes from './views/routes'
import apiClient from './services/ApiSingleton2'
import theme from './themes/default'

const history = createBrowserHistory()

render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apiClient}>
      <Router history={history}>
        <AppRoutes />
      </Router>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('app')
)

