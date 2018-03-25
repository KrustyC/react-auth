import styled, { css } from 'styled-components'

const List = styled.div`
  display: none;
  flex-flow: row nowrap;
  align-items: center;
  white-space: nowrap;

  ${({ theme: { navbar } }) => css`
    @media (min-width: ${navbar.collapseBreakPoint}) {
      display: flex;
    }

    @media (max-width: ${navbar.collapseBreakPoint}) {
      position: fixed;
      top: ${navbar.height};
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
