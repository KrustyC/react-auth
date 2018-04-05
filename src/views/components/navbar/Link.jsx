import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  display: flex;
  
  &,
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const LinkComponent = ({ href, children }) => (
  <StyledLink replace to={href}>
    {children}
  </StyledLink>
)

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default LinkComponent
