import React, { Fragment } from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import Icon from './Icon'
import Link from './Link'
import List from './List'
import ListItem from './ListItem'

const NavbarComponent = styled.div`
  background-color: 'black';
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
`
const Area = styled.div`
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) { width: 750px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 1200px) { width: 1140px; }
`

const Navbar = props => (
  <Fragment>
    <NavbarComponent>
      <Area>
        {props.children}
      </Area>
    </NavbarComponent>
  </Fragment>
)

Navbar.Brand = Brand
Navbar.Icon = Icon
Navbar.Link = Link
Navbar.List = List
Navbar.ListItem = ListItem

export default Navbar
