import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bulma/css/bulma.min.css';
import './index.css';

import Button from '../lib/elements/Button';

storiesOf('Button', module)
  .addDecorator(story => (
    <div className="box">
      {story()}
    </div>
  ))
  .add('normal button', () => <Button onClick={action('click')}>I am a Button</Button>)
  .add('a button like a link tag', () => <Button as="a" href="https://google.com" title="Google" target="blank">I am a link</Button>)
  .add('a button like a input tag', () => <Button onClick={action('click')} as="input" type="submit">I am an input</Button>)
  .add('colorsKeys buttons', () => (
    <React.Fragment>
      <Button white>White</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button black>Black</Button>
      <Button text>Text</Button>
      <Button primary>Primary</Button>
      <Button link>Link</Button>
      <Button info>Info</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
    </React.Fragment>
  ))
  .add('sizes buttons', () => (
    <React.Fragment>
      <Button small>Small</Button>
      <Button>Normal</Button>
      <Button medium>Medium</Button>
      <Button large>Large</Button>
    </React.Fragment>
  ))
  .add('styles buttons', () => (
    <React.Fragment>
      <div style={{ padding: 5 }}>
        <Button outlined>Outlined</Button>
        <Button primary outlined>Outlined</Button>
        <Button link outlined>Outlined</Button>
        <Button info outlined>Outlined</Button>
        <Button success outlined>Outlined</Button>
        <Button danger outlined>Outlined</Button>
      </div>
      <div style={{ backgroundColor: '#00d1b2', padding: 5 }}>
        <Button primary inverted>Inverted</Button>
        <Button link inverted>Inverted</Button>
        <Button info inverted>Inverted</Button>
        <Button success inverted>Inverted</Button>
        <Button danger inverted>Inverted</Button>
      </div>
      <div style={{ backgroundColor: '#00d1b2', padding: 5 }}>
        <Button primary inverted outlined>Inverted Outlined</Button>
        <Button link inverted outlined>Inverted Outlined</Button>
        <Button info inverted outlined>Inverted Outlined</Button>
        <Button success inverted outlined>Inverted Outlined</Button>
        <Button danger inverted outlined>Inverted Outlined</Button>
      </div>
      <div style={{ padding: 5 }}>
        <Button rounded>Rounded</Button>
        <Button primary rounded>Rounded</Button>
        <Button link rounded>Rounded</Button>
        <Button info rounded>Rounded</Button>
        <Button success rounded>Rounded</Button>
        <Button danger rounded>Rounded</Button>
      </div>
    </React.Fragment>
  ))
  .add('states buttons', () => (
    <React.Fragment>
      <div style={{ padding: 5 }}>
        <Button>Normal</Button>
        <Button primary>Normal</Button>
        <Button link>Normal</Button>
        <Button info>Normal</Button>
        <Button success>Normal</Button>
        <Button danger>Normal</Button>
      </div>
      <div style={{ padding: 5 }}>
        <Button hovered>Hover</Button>
        <Button primary hovered>Hover</Button>
        <Button link hovered>Hover</Button>
        <Button info hovered>Hover</Button>
        <Button success hovered>Hover</Button>
        <Button danger hovered>Hover</Button>
      </div>
      <div style={{ padding: 5 }}>
        <Button focused>Focus</Button>
        <Button primary focused>Focus</Button>
        <Button link focused>Focus</Button>
        <Button info focused>Focus</Button>
        <Button success focused>Focus</Button>
        <Button danger focused>Focus</Button>
      </div>
      <div style={{ padding: 5 }}>
        <Button active>Active</Button>
        <Button primary active>Active</Button>
        <Button link active>Active</Button>
        <Button info active>Active</Button>
        <Button success active>Active</Button>
        <Button danger active>Active</Button>
      </div>
      <div style={{ padding: 5 }}>
        <Button loading>Loading</Button>
        <Button primary loading>Loading</Button>
        <Button link loading>Loading</Button>
        <Button info loading>Loading</Button>
        <Button success loading>Loading</Button>
        <Button danger loading>Loading</Button>
      </div>
      <div style={{ padding: 5 }}>
        <Button static as="span">Span Static</Button>
        <Button primary disabled>Disabled</Button>
        <Button link disabled>Disabled</Button>
        <Button info disabled>Disabled</Button>
        <Button success disabled>Disabled</Button>
        <Button danger disabled>Disabled</Button>
      </div>
    </React.Fragment>
  ));

