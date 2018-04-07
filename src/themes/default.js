import { injectGlobal } from 'styled-components'
import colors from './colors'

// eslint-disable-next-line
injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default {
  colors,
  fontSize: {
    xl: '125%',
    lg: '110%',
    md: '100%',
    sm: '85%'
  },
  button: {
    margin: {
      xl: '20px',
      lg: '15px',
      md: '10px',
      sm: '5px'
    }
  },
  navbar: {
    background: colors.dark,
    color: colors.white,
    height: '64px'
  }
}
