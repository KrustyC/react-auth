import React from 'react'

const Home =() => (
  <section className="section is-large">
    <div>
      <h1 className="title">Hi!</h1>
      <h2 className="subtitle">
        Hi this is my <strong>react boilerplate</strong>. 
        It has been developed using:
        <p className="menu-label">
          Used libraries
        </p>
        <ul className="menu-list">
          <li>
            <ul>
              <li><a>react (v16)</a></li>
              <li><a>redux (v)</a></li>
              <li><a>react router (v4)</a></li>
              <li><a>redux form (v)</a></li>
              <li><a>bulma</a></li>
            </ul>
          </li>
        </ul>
        <br />
        <p>Run  <code>npm start</code> to start developing</p>
      </h2>
    </div>
  </section>
)

export default Home
