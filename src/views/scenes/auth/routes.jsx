import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './scenes/login'
import Signup from './scenes/signup'

const AuthRoutes =() => (
  <Switch>
    <Route path="/auth/login" component={Login}/>
    <Route path="/auth/signup" component={Signup}/>
  </Switch>
)

export default AuthRoutes
