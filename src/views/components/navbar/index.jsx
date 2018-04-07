import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'uikit'

const leftLinks = [{
  text: 'Home',
  to: '/'
}, {
  text: 'Dashboard',
  to: '/dashboard'
}]

const rightLinks = [{
  text: 'Sign In',
  to: '/auth/login'
}, {
  text: 'Sign Up',
  to: '/auth/signup'
}]

export default class DefaultNavbar extends Component {
  state = {
    selected: 0
  }

  onSelectItem = (e) => {
    console.log('selected', e)
  }

  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          Ciao
        </Navbar.Brand>
      </Navbar>
    )
  }
}
