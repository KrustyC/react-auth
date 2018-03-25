import styled, { css } from 'styled-components'

const Link = styled.div`
  ${({ theme: { navbar } }) => css`
    line-height: ${navbar.height} + ${navbar.item.border.width};
    color: ${navbar.item.color};
    border-bottom: ${navbar.item.border.width} solid ${navbar.item.border.color};
    
    &.-active,
    &:hover,
    &:focus {
        color: ${navbar.item.active.color};
        border-bottom-color: ${navbar.item.active.borderColor};
    }
  `}
`

export default Link
