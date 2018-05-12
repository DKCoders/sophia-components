import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import Box from '../lib/elements/Box';
import Notification from '../lib/elements/Notification';
import Title from '../lib/elements/Title';
import Subtitle from '../lib/elements/Subtitle';
import Button from '../lib/elements/Button';
import Image from '../lib/elements/Image';
import Content from '../lib/elements/Content';
import Delete from '../lib/elements/Delete';

import Container from '../lib/layout/Container';
import Level, { LevelLeft, LevelRight, LevelItem } from '../lib/layout/Level';
import Media, { MediaLeft, MediaRight, MediaContent } from '../lib/layout/Media';
import Hero, { HeroBody, HeroFoot, HeroHead } from '../lib/layout/Hero';
import Section from '../lib/layout/Section';

const boxDecorator = story => (
  <Box>
    {story()}
  </Box>
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
        <LevelItem>Published</LevelItem>
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
