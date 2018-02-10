import React from 'react'
import { Link } from 'react-router-dom'

const rightLinks = [{
  text: 'Home',
  path: '/'
}]

const Navbar =() => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">React Auth</Link>
    </div>
    <div className="navbar-start">
    <Link className="navbar-item" to="/">Home</Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <Link className="button is-primary" to="/auth/login">Login</Link>
          </p>
          <p className="control">
            <Link className="button is-link" to="/auth/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
