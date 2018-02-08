import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../components/loginForm.jsx'


class LoginPage extends Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props)

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    }
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault()
    const { user } = this.state
    console.log('email:', user.email)
    console.log('password:', user.password)
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name
    const { user } = this.state
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  /**
   * Render the component.
   */
  render() {
    const { errors, user } = this.state

    return (
      <LoginForm
        onSubmit={event => this.processForm(event)}
        onChange={event => this.changeUser(event)}
        errors={errors}
        user={user}
      />
    )
  }

}

export default LoginPage