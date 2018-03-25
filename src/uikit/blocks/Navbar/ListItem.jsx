import styled, { css } from 'styled-components'

const Brand = styled.div`
  display: block;
  flex-shrink: 0;
  text-transform: uppercase;

  ${({ theme: { navbar } }) => css`
    color: ${navbar.color};
    font-size: ${navbar.item.fontSize};
    height: ${navbar.height};
    line-height: ${navbar.height};
    padding-left: round((${navbar.height} - 20) / 2);
    padding-right: round((${navbar.height} - 20) / 2);
  `}
`

export default Brand
