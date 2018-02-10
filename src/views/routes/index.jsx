import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Home from '../scenes/home'
import Auth from '../scenes/auth'

const AppRoutes =() => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/auth" component={Auth}/>
  </Switch>
)

export default AppRoutes
