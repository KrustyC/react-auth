import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const { large, input, meta: { touched, error }, ...rest } = props
  const hasError = touched && error

  return (
    <div className="field">

      <div className="control has-icons-right">
        <input
          className={`input ${large && 'is-large'} ${hasError && 'is-danger'}`}
          style={{ width: '100%' }}
          {...input}
          {...rest}
        />
        {touched && !error && (
          <span className="icon is-medium is-right">
            <i className="fas fa-check has-text-success" />
          </span>
        )}

        {touched && error && (
          <span className="icon is-medium is-right">
            <i className="fas fa-times has-text-danger" />
          </span>
        )}
      </div>

      <div className="has-text-left">
        {hasError && (
          <p className="help is-danger">{_.upperFirst(error)}</p>
        )}
      </div>
    </div>
  )
}

Input.propTypes = {
  input: PropTypes.object,
  large: PropTypes.bool,
  meta: PropTypes.object,
  placeholder: PropTypes.string.isRequired
}

Input.defaultProps = {
  input: null,
  large: false,
  meta: null
}

export default Input
