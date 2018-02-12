import React from 'react'
import { Link } from 'react-router-dom'

const Footer =() => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>React Auth Boilerplate</strong> by <a href="https://dcrestini.me">Davide Crestini</a>.
          The source code is licensed
          {' '}<a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
