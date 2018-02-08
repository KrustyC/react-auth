import React from 'react'
import { createBrowserHistory } from 'history'
import { Route, Switch } from 'react-router-dom'

import HomePage from './components/homePage.jsx'
import LoginPage from './containers/loginPage.jsx'
import SignUpPage from './containers/signUpPage.jsx'

// const browserHistory = createBrowserHistory()

const Routes  = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/login' component={LoginPage}/>
    <Route path='/signup' component={SignUpPage}/>
  </Switch>
)

export default Routes
