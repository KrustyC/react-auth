import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { injectGlobalStyle, injectResetStyle } from 'reactackle'


import apiClient from './services/ApiSingleton2'
import App from './views/App'
import configureStore from './redux/store'

import theme from './theme'

injectGlobalStyle()
injectResetStyle()

// // eslint-disable-next-line
// injectGlobal`
//   html {
//     height: 100%;
//     width: 100%;
//   }

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// `

// const reduxStore = configureStore()

render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={apiClient}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('app')
)
