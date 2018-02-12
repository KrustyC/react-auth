import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authOperations } from '../../../../redux/ducks/auth'

import LoginForm from '../components/loginForm'
import FormContainer from '../components/formContainer'

class Login extends Component {
  onLogin() {
    this.props.login()
  }

  render() {
    return (
      <FormContainer
        title="Login"
        subtitle="Please enter your login information"
        leftLink={{ text: 'Signup', path: '/auth/signup' }}
        rightLink={{ text: 'Forgot Password', path: '/auth/forgot-password' }}
      >
        <LoginForm />
      </FormContainer>
    )
  }
}

export default connect((state) => ({
  user: state.auth.user
}), {
  login: authOperations.login
})(Login)
