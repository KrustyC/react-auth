import styled from 'styled-components'

export default styled.span`
  color: ${(props) => {
    if (props.primary) return props.theme.colors.primary
    if (props.secondary) return props.theme.colors.secondary
    if (props.success) return props.theme.colors.success
    if (props.link) return props.theme.colors.link
    if (props.warning) return props.theme.colors.warning
    if (props.danger) return props.theme.colors.danger
    return props.theme.colors.text
  }};

  font-size: ${(props) => {
    if (props.xl) return props.theme.fontSize.xl
    if (props.lg) return props.theme.fontSize.lg
    if (props.md) return props.theme.fontSize.md
    if (props.sm) return props.theme.fontSize.sm
    return props.theme.fontSize.nm
  }};

  font-weight: ${props => (props.thin ? 'normal' : 'bold')};

  text-transform: ${(props) => {
    if (props.capitalize) return 'capitalize'
    if (props.uppercase) return 'uppercase'
    return 'none'
  }};
`
