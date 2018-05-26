/* eslint-disable jsx-a11y/anchor-is-valid */
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
import Card from '../lib/components/Card';
import CardContent from '../lib/components/Card/components/CardContent';
import CardFooter from '../lib/components/Card/components/CardFooter';
import CardFooterItem from '../lib/components/Card/components/CardFooterItem';
import CardHeader from '../lib/components/Card/components/CardHeader';
import CardHeaderIcon from '../lib/components/Card/components/CardHeaderIcon';
import CardHeaderTitle from '../lib/components/Card/components/CardHeaderTitle';
import CardImage from '../lib/components/Card/components/CardImage';
import Image from '../lib/elements/Image';
import Media from '../lib/layout/Media/Media';
import MediaLeft from '../lib/layout/Media/components/MediaLeft';
import Title from '../lib/elements/Title';
import MediaContent from '../lib/layout/Media/components/MediaContent';
import Subtitle from '../lib/elements/Subtitle';
import Content from '../lib/elements/Content';
import Columns from '../lib/grid/Columns';
import Column from '../lib/grid/Column';
import Icon from '../lib/elements/Icon';
import Dropdown from '../lib/components/Dropdown/Dropdown';
import Menu from '../lib/components/Menu/Menu';
import MenuLabel from '../lib/components/Menu/components/MenuLabel';
import MenuList from '../lib/components/Menu/components/MenuList';
import MenuListItem from '../lib/components/Menu/components/MenuListItem';

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

storiesOf('Card', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Columns>
        <Column oneQuarter>
          <Card>
            <CardImage>
              <Image ratio="4by3" src="https://bulma.io/images/placeholders/1280x960.png" alt="image" />
            </CardImage>
            <CardContent>
              <Media>
                <MediaLeft>
                  <Image square="48" src="https://bulma.io/images/placeholders/96x96.png" alt="image" />
                </MediaLeft>
                <MediaContent>
                  <Title four>John Smith</Title>
                  <Subtitle six>@johnsmith</Subtitle>
                </MediaContent>
              </Media>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </Content>
            </CardContent>
          </Card>
        </Column>
        <Column oneQuarter>
          <Card>
            <CardHeader>
              <CardHeaderTitle>Component</CardHeaderTitle>
              <CardHeaderIcon>
                <Icon icon="fas fa-angle-down" />
              </CardHeaderIcon>
            </CardHeader>
            <CardContent>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </Content>
            </CardContent>
            <CardFooter>
              <CardFooterItem>Save</CardFooterItem>
              <CardFooterItem>Edit</CardFooterItem>
              <CardFooterItem>Delete</CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
        <Column oneQuarter>
          <Card>
            <CardContent>
              <Title>
                “There are two hard things in computer science:
                cache invalidation, naming things, and off-by-one errors.”
              </Title>
              <Subtitle>Jeff Atwood</Subtitle>
            </CardContent>
            <CardFooter>
              <CardFooterItem as="p">
                <span>
                  View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                </span>
              </CardFooterItem>
              <CardFooterItem as="p">
                <span>
                  Share on <a href="#">Facebook</a>
                </span>
              </CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      </Columns>
    </React.Fragment>
  ));

const normalItems = [
  { content: 'Dropdown Item' },
  { content: 'Another Dropdown Item' },
  { content: 'Active Dropdown Item', active: true },
  { content: 'Just another Dropdown Item' },
  { type: 'divider' },
  { content: 'With divider Dropdown Item' },
];

const contentItems = [
  { type: 'div', content: (<p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>), active: true },
  { type: 'divider' },
  { type: 'div', content: (<p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>) },
  { type: 'divider' },
  { content: 'This is a link' },
];

storiesOf('Dropdown', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Dropdown items={normalItems} trigger="A clickeable Dropodown" />
      <Dropdown hoverable items={normalItems} trigger="A Hoverable Dropodown" />
      <Dropdown active items={normalItems} trigger="A Dropodown" />
    </React.Fragment>
  ))
  .add('content', () => (
    <React.Fragment>
      <Dropdown items={contentItems} trigger={{ label: 'A clickeable Dropodown', icon: <Icon icon="fas fa-camera-retro" /> }} />
      <Dropdown hoverable items={contentItems} trigger="A Hoverable Dropodown" />
    </React.Fragment>
  ))
  .add('right aligment', () => (
    <React.Fragment>
      <Dropdown hoverable items={contentItems} trigger="Left" />
      <Dropdown right hoverable items={contentItems} trigger="Right" />
    </React.Fragment>
  ))
  .add('up', () => (
    <React.Fragment>
      <br />
      <br />
      <br />
      <br />
      <Dropdown up hoverable items={contentItems} trigger="Dropup button" />
    </React.Fragment>
  ));

const subMenu = [
  <MenuListItem key={1}>Members</MenuListItem>,
  <MenuListItem key={2}>Plugins</MenuListItem>,
  <MenuListItem key={3}>Add a member</MenuListItem>,
];
storiesOf('Menu', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Menu>
        <MenuLabel>General</MenuLabel>
        <MenuList>
          <MenuListItem>Dashboard</MenuListItem>
          <MenuListItem>Customers</MenuListItem>
        </MenuList>
        <MenuLabel>Administration</MenuLabel>
        <MenuList>
          <MenuListItem>Team Settings</MenuListItem>
          <MenuListItem active subList={subMenu}>Manage Your Team</MenuListItem>
          <MenuListItem>Invitations</MenuListItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  ));
