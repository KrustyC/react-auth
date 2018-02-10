import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authOperations } from '../../../../redux/ducks/auth'

import LoginForm from '../components/loginForm'

class Login extends Component {
  onLogin() {
    this.props.login()
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Login Section</h1>
          <h2 className="subtitle">
            <LoginForm />
          </h2>
        </div>
      </section>
    )
  }
}

export default connect((state) => ({
  user: state.auth.user
}), {
  login: authOperations.login
})(Login)
