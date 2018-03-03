import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <div className="default-layou">
          <Navbar />
          <div className="container">
            <Component {...matchProps} />
          </div>
          <Footer />
      </div>
    )}
  />
)

export default DefaultLayout
