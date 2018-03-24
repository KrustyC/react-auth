import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import apiClient from './services/ApiSingleton2'
import App from './views/App'
import configureStore from './redux/store'
import theme from './theme'


// const reduxStore = configureStore()

render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apiClient}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('app')
)
