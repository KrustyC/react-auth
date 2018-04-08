import styled, { css } from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    let height = null
    switch (props.size) {
      case 'xlarge':
        height = 1000
        break
      case 'large':
        height = 700
        break
      case 'small':
        height = 300
        break
      default: // medium
        height = 500
    }
    return css`height: ${height}px;`
  }}
`

export default Section
