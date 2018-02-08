import React from 'react'
import ReactDom from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { BrowserRouter } from 'react-router-dom'
import Base from './components/base.jsx'
import Routes from './routes.jsx'

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin()

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <Base>
        <Routes />
      </Base>
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('react-app'))