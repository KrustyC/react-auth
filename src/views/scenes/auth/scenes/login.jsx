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
      <div>
        <h2 className="subtitle">
          <LoginForm />
        </h2>
      </div>
    )
  }
}

export default connect((state) => ({
  user: state.auth.user
}), {
  login: authOperations.login
})(Login)
