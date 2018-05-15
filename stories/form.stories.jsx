import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import Box from '../lib/elements/Box';
import Container from '../lib/layout/Container';

import Input from '../lib/form/Input';

const boxDecorator = story => (
  <Container style={{ marginTop: 10 }}>
    <Box>
      {story()}
    </Box>
  </Container>
);

storiesOf('Input', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <Input name="test" placeholder="write" type="number" onClick={action('Clicked!')} onChange={action('Changed!')} />
  ))
  .add('colors', () => (
    <React.Fragment>
      <Input placeholder="With color" primary />
      <Input placeholder="With color" info />
      <Input placeholder="With color" success />
      <Input placeholder="With color" warning />
      <Input placeholder="With color" danger />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Input placeholder="With sizes" small />
      <Input placeholder="With sizes" />
      <Input placeholder="With sizes" medium />
      <Input placeholder="With sizes" large />
    </React.Fragment>
  ))
  .add('styles and stattes', () => (
    <React.Fragment>
      <Input placeholder="With style" rounded />
      <Input placeholder="With states" />
      <Input placeholder="With states" hovered />
      <Input placeholder="With states" focused />
      <Input placeholder="With states" loading />
      <Input placeholder="With states" disabled />
      <Input placeholder="With states" value="Text" readOnly />
      <Input placeholder="With states" value="Text" readOnly static />
    </React.Fragment>
  ));
