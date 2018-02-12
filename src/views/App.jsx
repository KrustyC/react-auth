import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import AppRoutes from './routes'
import Navbar from './components/navbar'
import Footer from './components/footer'

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <div>
      <Navbar />
        <div className="hero is-fullheight">
          <div className="hero-body">
            <AppRoutes />
          </div>
        </div>
      <Footer />
    </div>
  </Router>
)

export default App
