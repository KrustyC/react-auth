import React, { Fragment } from 'react'
import { Button, Title } from 'UiKit/elements'
import { Navbar } from 'UiKit/blocks'

const UiKit = () => (
  <Fragment>
    <Navbar>
      <Navbar.Brand>
        BRAND
      </Navbar.Brand>
      <Navbar.List>
        <Navbar.Link to="/">Item 1</Navbar.Link>
        <Navbar.Link to="/">Item 2</Navbar.Link>
      </Navbar.List>
    </Navbar>
    <Title>Title</Title>
    <Button modifiers={['success']}>
      Success Button
    </Button>
  </Fragment>
)

export default UiKit
