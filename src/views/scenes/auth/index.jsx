import React from 'react'
import AuthRoutes from './routes'

const Auth = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <AuthRoutes />
        </div>
      </div>
    </div>
  </div>
)

export default Auth
