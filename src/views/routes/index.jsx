import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import DefaultLayout from '../layouts/defaultLayout'

import Home from '../scenes/home'
import Auth from '../scenes/auth'
import NotFound from '../scenes/not-found'

const AppRoutes =() => (
  <Switch>
    <DefaultLayout exact path="/" component={Home}/>
    <Route path="/auth" component={Auth}/>
    <Route path="*" component={NotFound}/>
  </Switch>
)

export default AppRoutes
