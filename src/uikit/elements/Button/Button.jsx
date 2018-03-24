import styled from 'styled-components'
import { applyStyleModifiers, styleModifierPropTypes } from 'styled-components-modifiers'

const MODIFIER_CONFIG = {
  // The functions receive the props of the component as the only argument.
  // Here, we destructure the theme from the argument for use within the modifier styling.
  disabled: ({ theme }) => `
    // These styles are applied any time this modifier is used.
    background-color: ${theme.colors.chrome_400};
    color: ${theme.colors.chrome_100};
  `,

  // Alternatively, you can return an object with your styles under the key `styles`.
  success: ({ theme }) => `
    background-color: ${theme.colors.success};
  `,

  warning: ({ theme }) => `
    background-color: ${theme.colors.warning};
  `,

  large: () => `
    height: 3em;
    width: 6em;
  `
}

const Button = styled.button`
  background: #1FB6FF;
  border: none;
  border-radius: 2px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #009EEB;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`
Button.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}

export default Button
