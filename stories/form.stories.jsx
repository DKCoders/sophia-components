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
import Textarea from '../lib/form/Textarea';
import Select from '../lib/form/Select';

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

storiesOf('Textarea', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <Textarea name="test" placeholder="write" onClick={action('Clicked!')} onChange={action('Changed!')} />
  ))
  .add('rows', () => (
    <Textarea name="test" rows="10" placeholder="write" onClick={action('Clicked!')} onChange={action('Changed!')} />
  ))
  .add('colors', () => (
    <React.Fragment>
      <Textarea placeholder="With color" primary />
      <Textarea placeholder="With color" info />
      <Textarea placeholder="With color" success />
      <Textarea placeholder="With color" warning />
      <Textarea placeholder="With color" danger />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Textarea placeholder="With sizes" small />
      <Textarea placeholder="With sizes" />
      <Textarea placeholder="With sizes" medium />
      <Textarea placeholder="With sizes" large />
    </React.Fragment>
  ))
  .add('styles and stattes', () => (
    <React.Fragment>
      <Textarea placeholder="With style" rounded />
      <Textarea placeholder="With states" />
      <Textarea placeholder="With states" hovered />
      <Textarea placeholder="With states" focused />
      <Textarea placeholder="With states" loading />
      <Textarea placeholder="With states" disabled />
      <Textarea placeholder="With states" value="Text" readOnly />
    </React.Fragment>
  ));

storiesOf('Select', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <Select onChange={action('changed')} onClick={action('clicked')}>
      <option>Select an thing</option>
      <option value="1">One</option>
    </Select>
  ));
