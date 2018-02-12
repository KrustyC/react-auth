import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FormContainer =({ title, subtitle, leftLink, rightLink, children }) => (
  <div className="box">
    <h3 className="title has-text-grey">{title}</h3>
    <p className="subtitle has-text-grey">{subtitle}</p>
    <div>
      {children}
    </div>
    <div className="level" style={{ marginTop: '15px' }}>
      { !_.isNull(leftLink) && (
        <Link to={leftLink.path} className="level-right">{leftLink.text}</Link>
      )}
      { !_.isNull(rightLink) && (
        <Link to={rightLink.path} className="level-right">{rightLink.text}</Link>
      )}
    </div>
  </div>
)

FormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  leftLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  rightLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  children: PropTypes.array.isRequired
}

FormContainer.defaultProps = {
  leftLink: null,
  rightLink: null
}

export default FormContainer
