import styled, { css } from 'styled-components'

const Button = styled.button`
  font-family: inherit;
  padding: 0.5em 1em;
  text-decoration: none;
  border: 1px solid ${props => props.theme.colors.default};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.default};
  color: ${props => props.theme.colors.text.light};

  ${props => props.primary && css`
    background-color: props.theme.colors.primary;
    color: props.theme.colors.text.light;
  `}

  ${props => props.secondary && css`
    background-color: props.theme.colors.secondary;
    color: props.theme.colors.text.light;
  `}

  ${props => props.success && css`
    background-color: props.theme.colors.success;
    color: props.theme.colors.text.light;
  `}

  ${props => props.warning && css`
    background-color: props.theme.colors.warning;
    color: props.theme.colors.text.light;
  `}

  ${props => props.danger && css`
    background-color: props.theme.colors.danger;
    color: props.theme.colors.text.light;
  `}

  ${props => props.disabled && css`
    background-image: none;
    /* csslint ignore:start */
    filter: alpha(opacity=40);
    /* csslint ignore:end */
    opacity: 0.40;
    cursor: not-allowed;
    box-shadow: none;
    pointer-events: none;
  `}

  font-size: ${(props) => {
    if (props.xl) return props.theme.fontSize.xl
    if (props.lg) return props.theme.fontSize.lg
    if (props.sm) return props.theme.fontSize.sm
    return props.theme.fontSize.md
  }};

  margin-left: ${(props) => {
    if (props.ml_xl) return props.theme.button.margin.xl
    if (props.ml_lg) return props.theme.button.margin.lg
    if (props.ml_sm) return props.theme.button.margin.sm
    return '0px'
  }};

  margin-right: ${(props) => {
    if (props.mr_xl) return props.theme.button.margin.xl
    if (props.mr_lg) return props.theme.button.margin.lg
    if (props.mr_sm) return props.theme.button.margin.sm
    return '0px'
  }};

  text-transform: ${(props) => {
    if (props.capitalize) return 'capitalize'
    if (props.uppercase) return 'uppercase'
    return 'capitalize'
  }};

  &:hover {
    background-image: linear-gradient(transparent, rgba(0,0,0, 0.1) 40%, rgba(0,0,0, 0.10));
  }
`

const Icon = styled.i``

Button.Icon = Icon

export default Button
