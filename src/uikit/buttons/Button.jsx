import styled from 'styled-components'

const getBackgroundBorderColor = (props) => {
  if (props.primary) return props.theme.colors.primary
  if (props.secondary) return props.theme.colors.secondary
  if (props.success) return props.theme.colors.success
  if (props.link) return props.theme.colors.link
  if (props.warning) return props.theme.colors.warning
  if (props.danger) return props.theme.colors.danger
  return props.theme.colors.text
}

export default styled.button`
  background-color: ${props => getBackgroundBorderColor(props)};
  color: ${(props) => {
    if (props.primary || props.secondary || props.success || props.link) {
      return props.theme.colors.text.light
    }
    return props.theme.colors.text.light
  }};

  font-family: inherit;
  padding: 0.5em 1em;
  border: 1px solid #999;
  border: none rgba(0, 0, 0, 0);
  text-decoration: none;
  border-radius: 2px;

  margin-left: ${(props) => {
    if (props.ml_xl) return props.theme.button.margin.xl
    if (props.ml_lg) return props.theme.button.margin.lg
    if (props.ml_sm) return props.theme.button.margin.sm
    return '0px'
  }};

  font-size: ${(props) => {
    if (props.xl) return props.theme.fontSize.xl
    if (props.lg) return props.theme.fontSize.lg
    if (props.sm) return props.theme.fontSize.sm
    return props.theme.fontSize.md
  }};

  font-weight: 'normal';

  text-transform: ${(props) => {
    if (props.capitalize) return 'capitalize'
    if (props.uppercase) return 'uppercase'
    return 'capitalize'
  }};

  border: ${(props) => {
    if (props.noBorder) return '0px'
    return `1px solid ${getBackgroundBorderColor(props)}`
  }};

  border-radius: ${(props) => {
    if (props.xl) return props.theme.button.borderRadius.xl
    if (props.lg) return props.theme.button.borderRadius.lg
    if (props.sm) return props.theme.button.borderRadius.sm
    return props.theme.button.borderRadius.md
  }};
`
