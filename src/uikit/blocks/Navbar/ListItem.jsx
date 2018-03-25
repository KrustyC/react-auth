import styled, { css } from 'styled-components'

const Brand = styled.div`
  display: block;
  flex-shrink: 0;
  text-transform: uppercase;

  ${({ theme: { navbar } }) => css`
    color: ${navbar.color};
    font-size: ${navbar.item.fontSize};
    height: ${navbar.height}px;
    line-height: ${navbar.height}px;
    padding-left: ${(navbar.height - 20) / 2}px;
    padding-right: ${(navbar.height - 20) / 2}px;
  `}
`

export default Brand
