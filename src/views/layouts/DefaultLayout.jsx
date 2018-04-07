import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import CenteredLayout from './CenteredLayout'
// import AuthenticatedNavbar from '../components/navbars/authenticated'
import UnauthenticatedNavbar from '../components/navbars/unauthenticated'
import Footer from '../components/footer'

const DefaultLayout = ({ component: CustomComponent, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <UnauthenticatedNavbar /> {/* Check if user is authenticated */}
        <CenteredLayout>
          <CustomComponent {...matchProps} />
        </CenteredLayout>
        <Footer />
      </Fragment>
    )}
  />
)

DefaultLayout.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Component)
  ]).isRequired
}

export default DefaultLayout
