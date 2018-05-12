import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import faker from 'faker';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import Box from '../lib/elements/Box';
import Notification from '../lib/elements/Notification';
import Subtitle from '../lib/elements/Subtitle';
import Button from '../lib/elements/Button';

import Container from '../lib/layout/Container';
import Level, { LevelLeft, LevelRight, LevelItem } from '../lib/layout/Level';

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
