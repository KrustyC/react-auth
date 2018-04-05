import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import UiKit from 'uikit/docs'
import DefaultLayout from '../layouts/defaultLayout'

import Home from '../scenes/home'
import Dashboard from '../scenes/dashboard'
import Auth from '../scenes/auth'
import NotFound from '../scenes/not-found'

const AppRoutes = () => (
  <Switch>
    <DefaultLayout exact path="/" component={Home} />
    <DefaultLayout path="/dashboard" component={Dashboard} />
    <Route path="/auth" component={Auth} />
    <Route path="/uikit" component={UiKit} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default AppRoutes
