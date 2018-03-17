import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from './views/App'
import configureStore from './redux/store'
import theme from './views/themes'

const reduxStore = configureStore()

render(
  <ThemeProvider theme={theme}>
    <ReduxProvider store={reduxStore}>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  document.getElementById('app')
)
