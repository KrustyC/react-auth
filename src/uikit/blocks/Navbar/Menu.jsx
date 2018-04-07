import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  height: 100%;
  margin-left: ${props => (props.right ? 'auto' : 'none')};
`

export default Menu
