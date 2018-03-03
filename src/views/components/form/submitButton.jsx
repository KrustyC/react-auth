import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = (props) => {
  const { text, type, large, isFormValid, submitting } = props

  return (
    <button
        className={`button is-block is-${type} ${large && 'is-large'} is-fullwidth ${submitting && 'is-loading'}`}
        disabled={submitting || !isFormValid}
        type="submit"
    >
      {text}
    </button>
  )
}

SubmitButton.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'primary', 'danger', 'dark', 'light', 'warning']),
  large: PropTypes.bool,
  text: PropTypes.string.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

SubmitButton.defaultProps = {
  type: 'info',
  large: false
}

export default SubmitButton
