import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import PaddedLayout from './PaddedLayout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <Navbar />
        <PaddedLayout>
          <Component {...matchProps} />
        </PaddedLayout>
        <Footer />
      </Fragment>
    )}
  />
)

export default DefaultLayout
