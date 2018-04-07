import React from 'react'
import PropTypes from 'prop-types'

import { Row, Column } from 'uikit'

const PaddedLayout = ({ children }) => (
  <Row>
    <Column span={6} />
    <Column span={12}>{children}</Column>
    <Column span={6} />
  </Row>
)

PaddedLayout.propTypes = {
  children: PropTypes.any.isRequired
}


export default PaddedLayout
