import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import Box from '../lib/elements/Box';
import Container from '../lib/layout/Container';

import Breadcrumb from '../lib/components/Breadcrumb';

const boxDecorator = story => (
  <Container style={{ marginTop: 10 }}>
    <Box>
      {story()}
    </Box>
  </Container>
);

const items = ['Bulma', 'Documentation', 'Components', 'Breadcrumb'];
const itemsWithIcon = items.map(label => ({ label, icon: 'fas fa-home' }));
storiesOf('Breadcrumb', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Breadcrumb items={items} onItemClick={action('clicked!')} />
    </React.Fragment>
  ))
  .add('aligment', () => (
    <React.Fragment>
      <Breadcrumb items={items} />
      <Breadcrumb items={items} centered />
      <Breadcrumb items={items} right />
    </React.Fragment>
  ))
  .add('icons', () => (
    <React.Fragment>
      <Breadcrumb items={itemsWithIcon} activeIndex={1} />
    </React.Fragment>
  ))
  .add('separators', () => (
    <React.Fragment>
      <Breadcrumb items={itemsWithIcon} />
      <Breadcrumb arrowSeparator items={itemsWithIcon} />
      <Breadcrumb bulletSeparator items={itemsWithIcon} />
      <Breadcrumb dotSeparator items={itemsWithIcon} />
      <Breadcrumb succeedsSeparator items={itemsWithIcon} />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Breadcrumb small items={itemsWithIcon} />
      <Breadcrumb items={itemsWithIcon} />
      <Breadcrumb medium items={itemsWithIcon} />
      <Breadcrumb large items={itemsWithIcon} />
    </React.Fragment>
  ));
