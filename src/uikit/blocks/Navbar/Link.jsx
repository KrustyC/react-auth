import { css } from 'styled-components'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'


const NavbarLink = ListItem.extend`
  ${({ theme: { navbar } }) => css`
    line-height: ${navbar.height + navbar.item.border.width}px;
    color: ${navbar.item.color};
    border-bottom: ${navbar.item.border.width}px solid ${navbar.item.border.color};

    &:hover,
    &:focus {
      color: ${navbar.item.active.color};
      border-bottom-color: ${navbar.item.active.borderColor};
    }
  `}
`

export default NavbarLink.withComponent(Link)
