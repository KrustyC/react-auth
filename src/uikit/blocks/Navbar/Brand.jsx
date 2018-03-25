import styled, { css } from 'styled-components'

const Brand = styled.a`
  display: block;
  font-size: 16px;
  color: #777;
  ${({ theme }) => css`
    margin: ${(theme.navbar.height - 20) / 2}px;
  `}
`

export default Brand
