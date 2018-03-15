import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlainButton = ({ className, children, onClick }) => (
  <button className={`${className} button`} onClick={() => onClick()}>
    {children}
  </button>
)

PlainButton.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

PlainButton.defaultProps = {
  onClick: () => {}
}

const Button = styled(PlainButton)`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default Button
