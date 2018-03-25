import styled, { css } from 'styled-components'

const List = styled.nav`
  display: none;
  flex-flow: row nowrap;
  align-items: center;
  white-space: nowrap;
  margin-left: ${props => (props.right ? 'auto' : 'none')};

  ${({ theme: { navbar } }) => css`
    @media (min-width: ${navbar.collapseBreakPoint}px) {
      display: flex;
    }

    @media (max-width: ${navbar.collapseBreakPoint}px) {
      position: fixed;
      top: ${navbar.height}px;
      left: 0;
      width: 100%;
      overflow-y: hidden;
      overflow-x: auto;
      border-top: 1px solid ${navbar.border.color};
      background-color: ${navbar.colors.background};
    }
  `}
`

export default List
