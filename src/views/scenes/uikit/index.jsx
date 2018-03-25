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
        <Navbar.ListItem>
          <Navbar.Link>
            Item 1
          </Navbar.Link>
          <Navbar.Link>
            Item 2
          </Navbar.Link>
        </Navbar.ListItem>
      </Navbar.List>
    </Navbar>
    <Title>Title</Title>
    <Button modifiers={['success']}>
      Success Button
    </Button>
  </Fragment>
)

export default UiKit
