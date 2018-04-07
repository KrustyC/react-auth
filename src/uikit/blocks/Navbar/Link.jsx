import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  width: 90px;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 200px;

  &:hover {
    color: white;
    text-decoration: none;
  }
`

export default LinkItem
