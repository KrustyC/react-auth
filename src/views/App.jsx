import _ from 'lodash'
import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import AppRoutes from './routes'
import Navbar from './components/navbar'
import Footer from './components/footer'

const history = createBrowserHistory()
const isAuthRoute = _.includes(history.location.pathname, '/auth/')

const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
      <AppRoutes />
      { !isAuthRoute && <Footer /> }
    </div>
  </Router>
)

export default App
