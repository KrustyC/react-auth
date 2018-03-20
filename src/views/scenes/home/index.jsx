import React from 'react'
import { Title, Subtitle, Text } from 'UiKit/text'
import { Button, ButtonLink } from 'UiKit/buttons'

const Home = () => (
  console.log(Button),
  <section className="section is-large">
    <div>
      <Title lg>Hi</Title>
      <Subtitle thin md>
        Hi this is my <strong>react boilerplate</strong>.
        It has been developed using:
      </Subtitle>
      <Text thin uppercase>
        Upper case text
      </Text>
      <Button xl ml_xl>
        Extra large
      </Button>
      <Button primary ml_xl>
        Normal
      </Button>
      <Button sm ml_xl>
        Small
      </Button>
      <Button disabled ml_sm>
        Disabled
      </Button>

      <ul className="menu-list">
        <li>
          <ul>
            <li><a>redux (v)</a></li>
            <li><a>react router (v4)</a></li>
            <li><a>redux form (v)</a></li>
            <li><a>bulma</a></li>
          </ul>
        </li>
      </ul>
      <br />
      <p>Run <code>npm start</code> to start developing</p>
    </div>
  </section>
)

export default Home
