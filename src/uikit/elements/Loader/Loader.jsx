import styled from 'styled-components'
import { applyStyleModifiers, styleModifierPropTypes } from 'styled-components-modifiers'
import { Block } from 'styled-loaders-react'

const MODIFIER_CONFIG = {
  xlarge: () => `
    height: 50px !important;
    width: 50px !important;
  `,

  large: () => `
    height: 40px !important;
    width: 40px !important;
  `,

  small: () => `
  height: 20px !important;
  width: 20px !important;
  `,

  xsmall: () => `
    height: 10px !important;
    width: 10px !important;
  `
}

const Loader = styled(Block)`
  height: 30px !important;
  width: 30px !important;

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`
Loader.propTypes = {
  modifiers: styleModifierPropTypes(MODIFIER_CONFIG)
}

export default Loader
