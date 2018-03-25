import React from 'react'
import styled, { css } from 'styled-components'

import Brand from './Brand'
import Icon from './Icon'
import Link from './Link'
import List from './List'
import ListItem from './ListItem'

const NavbarComponent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.navbar.colors.background};
  `}
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
`
const NavbarArea = styled.div`
  /*justify-content: space-between;*/
  display: flex;
  flex-flow: row wrap;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  

  @media (min-width: 768px) { width: 750px; }
  @media (min-width: 992px) { width: 970px; }
  @media (min-width: 1200px) { width: 1140px; }
`

const Navbar = props => (
  <NavbarComponent>
    <NavbarArea>
      {props.children}
    </NavbarArea>
  </NavbarComponent>
)

Navbar.Brand = Brand
Navbar.Icon = Icon
Navbar.Link = Link
Navbar.List = List
Navbar.ListItem = ListItem

export default Navbar
