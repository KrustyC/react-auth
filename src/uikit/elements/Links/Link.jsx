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

const Link = styled.a`
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`
Link.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}

export default Link
