import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

const Button = ({ className, children, onClick }) => (
  <button className={`${className} button`} onClick={() => onClick()}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {},
  variant: 'default'
}

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: 'gray', dark: 'darkgray' },
  primary: { light: 'blue', dark: 'darkblue' },
  success: { light: 'green', dark: 'darkgreen' },
  warning: { light: 'orange', dark: 'darkorange' }
})

const StyledButton = styled(Button)`
  background: ${backgroundColor};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default StyledButton
