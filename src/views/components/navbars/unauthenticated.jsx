import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'uikit'

export default class UnauthenticatedNavbar extends Component {
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
          <Navbar.BrandImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Link to="/">Home</Navbar.Link>
          <Navbar.Link to="/dashboard">Dashboard</Navbar.Link>
          <Navbar.Link to="/uikit">Ui Kit</Navbar.Link>
        </Navbar.Menu>
        <Navbar.Menu right>
          <Navbar.Icon icon="user" to="/profile" />
          <Navbar.Icon icon="envelope" to="/" />
        </Navbar.Menu>
      </Navbar>
    )
  }
}
