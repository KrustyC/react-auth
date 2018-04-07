import React from 'react'
import styled from 'styled-components'

import { Title } from '../'

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Div>
    <Title>This page will contain the documentation for the uikit</Title>
  </Div>
)
