import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Row, Column } from 'reactackle'

const PaddedLayout = ({ children }) => (
  <Fragment>
    <Row>
      <Column size={{ xsmall: 0, small: 2, medium: 2 }} />
      <Column size={{ xsmall: 0, small: 8, medium: 8 }}>{children}</Column>
      <Column size={{ xsmall: 0, small: 2, medium: 2 }} />
    </Row>
  </Fragment>
)

PaddedLayout.propTypes = {
  children: PropTypes.any.isRequired
}


export default PaddedLayout
