import React from 'react'

// @TODO ADD REDUX FORM!

const LoginForm =() => (
  <div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-right">
        <input className="input is-danger" type="email" placeholder="Inser email" />
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p className="help is-danger">This email is invalid</p>
    </div>
    <div className="field">
      <label className="label">Username</label>
      <div className="control has-icons-right">
        <input className="input is-success" type="password"/>
        <span className="icon is-small is-right">
          <i className="fas fa-check" />
        </span>
      </div>
      <p className="help is-success">This username is available</p>
    </div>
  </div>
)

export default LoginForm
