import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row, Column } from 'uikit'

const CenteredLayout = ({ children }) => (
  <Row>
    <Column span={6} />
    <Column span={12}>{children}</Column>
    <Column span={6} />
  </Row>
)

CenteredLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.instanceOf(Component)
  ]).isRequired
}

export default CenteredLayout
