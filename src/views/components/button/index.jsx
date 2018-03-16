import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './_styledButton'

const Button = ({ className, children, onClick, variant }) => (
  <StyledButton
    className={`${className} button`}
    onClick={() => onClick()}
    variant={variant}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {},
  className: null,
  variant: 'default'
}

export default Button
