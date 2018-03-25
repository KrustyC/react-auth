import React from 'react'
import { Navbar } from 'UiKit/blocks'

export default () => (
  <Navbar>
    <Navbar.Brand>
      React Auth
    </Navbar.Brand>
    <Navbar.List>
      <Navbar.Link to="/">Home</Navbar.Link>
      <Navbar.Link to="/dashboard">Dashboard</Navbar.Link>
    </Navbar.List>
    <Navbar.List right>
      <Navbar.Link to="/auth/login">Login</Navbar.Link>
      <Navbar.Link to="/auth/signup">Signup</Navbar.Link>
    </Navbar.List>
  </Navbar>
)
