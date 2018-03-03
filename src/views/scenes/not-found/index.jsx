import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="section is-large">
    <div>
      <h1 className="title">404 - Page not found!</h1>
      <h2 className="subtitle">Ops! This page doesn't exists...</h2>
      <Link className="button is-link" to="/">Back to home</Link>
    </div>
  </section>
)

export default NotFound
