import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import 'bulma/css/bulma.min.css';

import Button from '../lib/elements/Button/Button';


// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button className="button is-primary" onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
storiesOf('Button', module)
  .add('normal button', () => <Button onClick={action('click')}>I am a Button</Button>)
  .add('a button like a link tag', () => <Button as="a" href="https://google.com" title="Google" target="blank">I am a link</Button>)
  .add('a button like a input tag', () => <Button onClick={action('click')} as="input" type="submit">I am an input</Button>);
