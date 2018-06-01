import React from 'react';
import { storiesOf } from '@storybook/react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import { Box, Notification } from '../lib/elements';
import { Container } from '../lib/layout';
import { Columns, Column } from '../lib/grid';

const boxDecorator = story => (
  <Container style={{ marginTop: 10 }}>
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
        <Column four offsetThree>{contentPrimary}</Column>
      </Columns>
    </React.Fragment>
  ))
  .add('responsiveness', () => (
    <React.Fragment>
      <Columns>
        <Column half="mobile" nine>{contentPrimary}</Column>
        <Column>{content}</Column>
      </Columns>
      <Columns>
        <Column half="mobile" eight offsetOne="desktop" offsetTwo="tablet">{contentPrimary}</Column>
        <Column>{content}</Column>
      </Columns>
    </React.Fragment>
  ))
  .add('gap', () => (
    <Columns gapless>
      <Column>{contentPrimary}</Column>
      <Column>{contentPrimary}</Column>
      <Column>{contentPrimary}</Column>
      <Column>{contentPrimary}</Column>
    </Columns>
  ))
  .add('options', () => (
    <React.Fragment>
      <Columns multiline>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column half>{contentPrimary}</Column>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column oneQuarter>{contentPrimary}</Column>
        <Column>{contentPrimary}</Column>
      </Columns>
      <Columns mobile centered>
        <Column half narrow>{contentPrimary}</Column>
      </Columns>
      <Columns mobile centered multiline>
        <Column narrow>{contentPrimary}</Column>
        <Column narrow>{contentPrimary}</Column>
        <Column narrow>{contentPrimary}</Column>
        <Column narrow>{contentPrimary}</Column>
        <Column narrow>{contentPrimary}</Column>
      </Columns>
    </React.Fragment>
  ));
