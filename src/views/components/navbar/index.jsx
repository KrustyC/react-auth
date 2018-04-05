import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, HeaderRegion, HeaderTitle, Tabs } from 'reactackle'

import Link from './Link'

const leftLinks = [{
  text: 'Home',
  to: '/'
}, {
  text: 'Dashboard',
  to: '/dashboard'
}]

const rightLinks = [{
  text: 'Sign In',
  to: '/auth/login'
}, {
  text: 'Sign Up',
  to: '/auth/signup'
}]

export default class Navbar extends Component {
  state = {
    selected: 0
  }

  onSelectItem = (e) => {
    console.log('selected', e)
  }

  render() {
    return (
      <Header behavior="fixed">
        <HeaderRegion verticalAlign="center">
          <HeaderTitle>
            React Auth Boilerplate
          </HeaderTitle>
        </HeaderRegion>
        <HeaderRegion
          spread
          size="blank"
          verticalAlign="stretch"
        >
          <Tabs
            tabs={_.map(leftLinks, ({ text, to }) => ({ text, linkHref: to }))}
            selected={this.state.selected}
            onChange={this.onSelectItem}
            linkComponent={Link}
          />
        </HeaderRegion>
        <HeaderRegion
          spread
          size="blank"
          verticalAlign="stretch"
        >
          <Tabs
            tabs={_.map(rightLinks, ({ text, to }) => ({ text, linkHref: to }))}
            selected={this.state.selected}
            onChange={this.onSelectItem}
            linkComponent={Link}
          />
        </HeaderRegion>
      </Header>
    )
  }
}
