import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authOperations } from '../../../../redux/ducks/auth'

import LoginForm from '../components/loginForm'
import FormContainer from '../components/formContainer'

class Login extends Component {
  render() {
    const { user } = this.props
    
    return (
      <FormContainer
        title="Login"
        subtitle="Please enter your login information"
        leftLink={{ text: 'Create account', path: '/auth/signup' }}
        rightLink={{ text: 'Forgot Password', path: '/auth/forgot-password' }}
      >
        <LoginForm onLogin={v => this.props.login(v)} />
      </FormContainer>
    )
  }
}

export default connect((state) => ({
  user: state.auth.user
}), {
  login: authOperations.login
})(Login)
