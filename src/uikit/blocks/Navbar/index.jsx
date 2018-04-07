import styled, { css } from 'styled-components'

import Brand from './Brand'
import BrandImage from './BrandImage'
import Menu from './Menu'
import Icon from './Icon'
import Link from './Link'

const Navbar = styled.nav`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  width: 100%;
  padding: 0px 80px 0px 80px;
  ${({ theme: { navbar } }) => css`
    background: ${navbar.background};
    color: ${navbar.color};
    height: ${navbar.height};
  `}
`

Navbar.Brand = Brand
Navbar.BrandImage = BrandImage
Navbar.Icon = Icon
Navbar.Link = Link
Navbar.Menu = Menu

export default Navbar
