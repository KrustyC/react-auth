import { injectGlobal } from 'styled-components'

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
  colors: {
    primary: 'royalblue',
    secondary: 'teal',
    success: '#00B233',
    warning: '#FFDA23',
    danger: '#B20000',
    default: 'royalblue',
    text: {
      dark: 'black',
      light: '#fff'
    }
  },
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
  }
}
