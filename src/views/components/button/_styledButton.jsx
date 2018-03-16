import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'styled-theming'

import { colors } from 'Utils/variables'

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: colors.default.light, dark: colors.default.dark },
  primary: { light: colors.primary.light, dark: colors.primary.dark },
  success: { light: colors.success.light, dark: colors.success.dark },
  warning: { light: colors.warning.light, dark: colors.warning.dark }
})

const StyledButton = styled.button`
  background-color: ${backgroundColor};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

StyledButton.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning']).isRequired
}

export default StyledButton
