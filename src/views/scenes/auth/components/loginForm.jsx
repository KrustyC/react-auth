import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm, isValid } from 'redux-form'

import Input from '../../../components/form/input'
import SubmitButton from '../../../components/form/submitButton'
import { isValidEmail, isValidPassword } from '../../../../utils/validator'

class LoginForm extends Component {
  static propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  }

  static defaultProps = {
    error: null
  }

  render() {
    const { error, submitting, valid, handleSubmit, meta } = this.props

    return (
      <form onSubmit={handleSubmit(v => this.props.onLogin(v))}>
        { !_.isNull(error) && <div className="notification is-danger">{error}</div> }
        <Field
          large
          name="email"
          placeholder="Email address"
          component={Input}
        />
        <Field
          large
          name="password"
          placeholder="Password"
          component={Input}
        />
        <SubmitButton
          large
          text="Login"
          submitting={submitting}
          isFormValid={valid}
        />
      </form>
    )
  }
}

const validate = (values) => {
  const { email, password } = values
  const errors = {}

  if (_.isEmpty(email)) {
    errors.email = 'Email address is required'
  } else if(!isValidEmail(email)) {
    errors.email = 'Please insert a valid email address'
  }

  if (_.isEmpty(password)) {
    errors.password = 'Please enter your password'
  } else if (!isValidPassword(password)) {
    errors.password = 'Password must be in a valid format'
  }

  return errors
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm)

export default connect(state => ({
  valid: isValid('login')(state)
}))(LoginForm)
