import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import Box from '../lib/elements/Box';
import Notification from '../lib/elements/Notification';
import Container from '../lib/layout/Container';

import Columns from '../lib/grid/Columns';
import Column from '../lib/grid/Column';

const boxDecorator = story => (
  <Container>
    <Box>
      {story()}
    </Box>
  </Container>
);

const content = (<Notification>column</Notification>);
const contentPrimary = (<Notification primary>column</Notification>);

storiesOf('Columns', module)
  .addDecorator(boxDecorator)
  .add('basics', () => (
    <Columns>
      <Column>{contentPrimary}</Column>
      <Column>{contentPrimary}</Column>
      <Column>{contentPrimary}</Column>
      <Column>{contentPrimary}</Column>
    </Columns>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Columns>
        <Column fourFifths>{contentPrimary}</Column>
        <Column>{content}</Column>
      </Columns>
      <Columns>
        <Column twoThirds>{contentPrimary}</Column>
        <Column>{content}</Column>
        <Column>{content}</Column>
      </Columns>
      <Columns>
        <Column three>{contentPrimary}</Column>
        <Column three>{contentPrimary}</Column>
        <Column six>{contentPrimary}</Column>
      </Columns>
      <Columns>
        <Column half offsetOneQuarter>{contentPrimary}</Column>
      </Columns>
      <Columns>
        <Column four offsetFour>{contentPrimary}</Column>
      </Columns>
    </React.Fragment>
  ));
