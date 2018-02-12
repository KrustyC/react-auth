import React from 'react'

// @TODO ADD REDUX FORM!

const LoginForm =() => (
  <form>
    <div className="field">
      <div className="control">
        <input className="input is-large" type="email" placeholder="Email" />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <input className="input is-large" type="password" placeholder="Password" />
      </div>
    </div>
    <button className="button is-block is-info is-large is-fullwidth">
      Login
    </button>
  </form>
)

export default LoginForm
