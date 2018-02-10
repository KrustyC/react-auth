import React from 'react'
import AuthRoutes from './routes'

const Auth = () => (
  <section className="section is-large">
    <div className="columns">
      <div className="column is-4" />
      <div className="column is-4">
        <AuthRoutes />
      </div>
      <div className="column is-4" />
    </div>
  </section>
)

export default Auth
