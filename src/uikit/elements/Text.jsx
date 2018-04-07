import styled from 'styled-components'

const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize};
`

const Title = P.withComponent('h1')

const Subtitle = P.withComponent('h2')

export { P, Title, Subtitle }
