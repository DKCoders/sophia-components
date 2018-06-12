import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import {
  Box,
  Notification,
  Title,
  Subtitle,
  Button,
  Image,
  Content,
  Delete,
} from '../lib/elements';

import { Container,
  Level,
  LevelLeft,
  LevelRight,
  LevelItem,
  Media,
  MediaLeft,
  MediaRight,
  MediaContent,
  Hero,
  HeroBody,
  HeroFoot,
  HeroHead,
  Section,
  Footer,
  Tile,
} from '../lib/layout';

const boxDecorator = story => (
  <Container style={{ marginTop: 10 }}>
    <Box>
      {story()}
    </Box>
  </Container>
);

storiesOf('Container', module)
  .add('normal container', () => (
    <Container>
      <Notification>
        This container is <strong>centered</strong> on desktop.
      </Notification>
    </Container>
  ))
  .add('fluid container', () => (
    <Container fluid>
      <Notification>
        This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
        viewport size.
      </Notification>
    </Container>
  ))
  .add('widescreen container', () => (
    <Container widescreen>
      <Notification>
        This container is <strong>fullwidth</strong> <em>until</em>
        the <code>$widescreen</code> breakpoint.
      </Notification>
    </Container>
  ))
  .add('fullhd container', () => (
    <Container fullhd>
      <Notification>
        This container is <strong>fullwidth</strong> <em>until</em>
        the <code>$fullhd</code> breakpoint.
      </Notification>
    </Container>
  ));

storiesOf('Level', module)
  .addDecorator(boxDecorator)
  .add('normal level', () => (
    <Level>
      <LevelLeft>
        <LevelItem>
          <Subtitle>
            <strong>123</strong> posts
          </Subtitle>
        </LevelItem>
        <LevelItem>
          <Button>Search</Button>
        </LevelItem>
      </LevelLeft>
      <LevelRight>
        <LevelItem><strong>All</strong></LevelItem>
        <LevelItem as="a" href="#">Published</LevelItem>
        <LevelItem>Drafts</LevelItem>
        <LevelItem>Deleted</LevelItem>
        <LevelItem><Button success>New</Button></LevelItem>
      </LevelRight>
    </Level>
  ));

storiesOf('Media', module)
  .addDecorator(boxDecorator)
  .add('normal media', () => (
    <Media>
      <MediaLeft>
        <Image src="https://bulma.io/images/placeholders/128x128.png" alt="Bulma img" square="64" />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
            eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </Content>
      </MediaContent>
      <MediaRight>
        <Delete />
      </MediaRight>
    </Media>
  ))
  .add('nested media', () => (
    <Media>
      <MediaLeft>
        <Image src="https://bulma.io/images/placeholders/128x128.png" alt="Bulma img" square="64" />
      </MediaLeft>
      <MediaContent>
        <Content>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
            eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </Content>
        <Media>
          <MediaLeft>
            <Image src="https://bulma.io/images/placeholders/128x128.png" alt="Bulma img" square="64" />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
                eu pellentesque tortor vestibulum ut. Maecenas non massa sem.
                Etiam finibus odio quis feugiat facilisis.
              </p>
            </Content>
          </MediaContent>
          <MediaRight>
            <Delete />
          </MediaRight>
        </Media>
      </MediaContent>
      <MediaRight>
        <Delete />
      </MediaRight>
    </Media>
  ));

const commonInnerHero = (
  <HeroBody>
    <Container>
      <Title>Hero title</Title>
      <Subtitle>Hero subtitle</Subtitle>
    </Container>
  </HeroBody>
);

storiesOf('Hero', module)
  .addDecorator(boxDecorator)
  .add('normal hero', () => (
    <Hero>
      {commonInnerHero}
    </Hero>
  ))
  .add('colors hero', () => (
    <React.Fragment>
      <Hero primary>
        {commonInnerHero}
      </Hero>
      <Hero info>
        {commonInnerHero}
      </Hero>
      <Hero success>
        {commonInnerHero}
      </Hero>
      <Hero warning>
        {commonInnerHero}
      </Hero>
      <Hero danger>
        {commonInnerHero}
      </Hero>
      <Hero light>
        {commonInnerHero}
      </Hero>
      <Hero dark>
        {commonInnerHero}
      </Hero>
    </React.Fragment>
  ))
  .add('bold hero', () => (
    <React.Fragment>
      <Hero bold primary>
        {commonInnerHero}
      </Hero>
      <Hero bold info>
        {commonInnerHero}
      </Hero>
      <Hero bold success>
        {commonInnerHero}
      </Hero>
      <Hero bold warning>
        {commonInnerHero}
      </Hero>
      <Hero bold danger>
        {commonInnerHero}
      </Hero>
      <Hero bold light>
        {commonInnerHero}
      </Hero>
      <Hero bold dark>
        {commonInnerHero}
      </Hero>
    </React.Fragment>
  ))
  .add('size hero', () => (
    <React.Fragment>
      <Hero primary>
        {commonInnerHero}
      </Hero>
      <Hero medium info>
        {commonInnerHero}
      </Hero>
      <Hero large success>
        {commonInnerHero}
      </Hero>
      <Hero fullheight danger>
        {commonInnerHero}
      </Hero>
    </React.Fragment>
  ))
  .add('fullheight complete hero', () => (
    <Hero large success>
      <HeroHead>
        <p>This is the head. Always on top</p>
      </HeroHead>
      {commonInnerHero}
      <HeroFoot>
        <p>This is the foot. Always on bottom</p>
      </HeroFoot>
    </Hero>
  ));

storiesOf('Section', module)
  .addDecorator(boxDecorator)
  .add('normal section', () => (
    <Section>
      <Container>
        <Title>Section</Title>
        <Subtitle>
          A simple container to divide your page into <strong>sections</strong>.
          Use sections as direct children of <code>body</code>
        </Subtitle>
      </Container>
    </Section>
  ))
  .add('sizes section', () => (
    <React.Fragment>
      <Section background="primary">
        <Container>
          <Title>Section</Title>
          <Subtitle>
            A simple container to divide your page into <strong>sections</strong>.
            Use sections as direct children of <code>body</code>
          </Subtitle>
        </Container>
      </Section>
      <Section medium background="info">
        <Container>
          <Title>Section</Title>
          <Subtitle>
            A simple container to divide your page into <strong>sections</strong>.
            Use sections as direct children of <code>body</code>
          </Subtitle>
        </Container>
      </Section>
      <Section large background="success">
        <Container>
          <Title>Section</Title>
          <Subtitle>
            A simple container to divide your page into <strong>sections</strong>.
            Use sections as direct children of <code>body</code>
          </Subtitle>
        </Container>
      </Section>
    </React.Fragment>
  ));

storiesOf('Footer', module)
  .addDecorator(boxDecorator)
  .add('normal footer', () => (
    <Footer>
      <Container>
        <Content textCentered>
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </Content>
      </Container>
    </Footer>
  ));

storiesOf('Tile', module)
  .addDecorator(boxDecorator)
  .add('normal tiles', () => (
    <Tile ancestor>
      <Tile vertical eight>
        <Tile>
          <Tile parent vertical>
            <Tile child>
              <Notification primary style={{ height: '100%' }}>
                <Title>Vertical</Title>
                <Subtitle>Top tile</Subtitle>
              </Notification>
            </Tile>
            <Tile child>
              <Notification warning style={{ height: '100%' }}>
                <Title>...tiles</Title>
                <Subtitle>Bottom tile</Subtitle>
              </Notification>
            </Tile>
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile child>
          <Notification success>
            <Title>Tall tile</Title>
            <Subtitle>With even more content</Subtitle>
            <Content>
              <p>{faker.lorem.paragraphs()}</p>
            </Content>
          </Notification>
        </Tile>
      </Tile>
    </Tile>
  ));
