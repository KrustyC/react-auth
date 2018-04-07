import styled from 'styled-components'

const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize};
`

const Title = P.withComponent('h1').extend`
  font-size: 24px;
`

const Subtitle = P.withComponent('h2').extend`
  font-size: 24px;
`

export { P, Title, Subtitle }
