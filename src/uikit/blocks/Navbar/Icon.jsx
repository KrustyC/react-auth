import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

const I = Link.extend`
  font-size: 20px;
  width: 60px;
`

const Icon = ({ icon, to }) => <I to={to} className={`fa fa-${icon}`} />

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default Icon
