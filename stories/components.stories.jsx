/* eslint-disable jsx-a11y/anchor-is-valid,react/no-multi-comp */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import faker from 'faker';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import {
  Breadcrumb,
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  CardImage,
  Dropdown,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
  Message,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarDivider,
  NavbarEnd,
  Pagination,
  Panel,
  PanelHeading,
  PanelBlock,
  PanelTabs,
  PanelBlockLink,
  PanelBlockCheckbox,
  Tabs,
} from '../lib/components';
import {
  Image,
  Title,
  Subtitle,
  Content,
  Icon,
  Button,
  Box,
} from '../lib/elements';
import {
  Field,
  Control,
  Input,
} from '../lib/form';
import { Column, Columns } from '../lib/grid';
import {
  Media,
  MediaLeft,
  MediaContent,
  Container,
} from '../lib/layout';

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

const body = faker.lorem.paragraphs();
storiesOf('Message', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Message header="Hello World" body={body} onDeleteClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('color', () => (
    <React.Fragment>
      <Message dark header="dark" body={body} onDeleteClick={action('clicked')} />
      <Message primary header="primary" body={body} onDeleteClick={action('clicked')} />
      <Message link header="link" body={body} onDeleteClick={action('clicked')} />
      <Message info header="info" body={body} onDeleteClick={action('clicked')} />
      <Message success header="success" body={body} onDeleteClick={action('clicked')} />
      <Message warning header="warning" body={body} onDeleteClick={action('clicked')} />
      <Message danger header="danger" body={body} onDeleteClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('body only', () => (
    <React.Fragment>
      <Message body={body} />
      <Message dark body={body} />
      <Message primary body={body} />
      <Message link body={body} />
      <Message info body={body} />
      <Message success body={body} />
      <Message warning body={body} />
      <Message danger body={body} />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Message small header="small" body={body} onDeleteClick={action('clicked')} />
      <Message header="normal" body={body} onDeleteClick={action('clicked')} />
      <Message medium header="medium" body={body} onDeleteClick={action('clicked')} />
      <Message large header="large" body={body} onDeleteClick={action('clicked')} />
    </React.Fragment>
  ));

const makeModal = ModalComp => class extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { active: false };
    this.setActive = this.setActive.bind(this);
  }
  setActive(active) {
    this.setState({ active });
  }
  render() {
    return (
      <React.Fragment>
        <Button large primary onClick={() => this.setActive(true)}>Open Modal</Button>
        <ModalComp
          {...this.props}
          setActive={val => this.setActive(val)}
          activeState={this.state.active}
        />
      </React.Fragment>
    );
  }
};

const ModalNormal = makeModal(({ setActive, activeState }) => {
  const content = (
    <Box>
      <Media>
        <MediaLeft>
          <Image src="https://bulma.io/images/placeholders/128x128.png" square="128" />
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean efficitur sit amet massa fringilla egestas.
              Nullam condimentum luctus turpis.
            </p>
          </Content>
        </MediaContent>
      </Media>
    </Box>
  );
  return (
    <Modal
      active={activeState}
      onOverlayClick={() => setActive(false)}
      onCloseClick={() => setActive(false)}
      content={content}
    />
  );
});

const ModalImage = makeModal(({ setActive, activeState }) => {
  const content = (
    <Image src="https://bulma.io/images/placeholders/1280x960.png" alt="alt" ratio="4by3" />
  );
  return (
    <Modal
      active={activeState}
      onOverlayClick={() => setActive(false)}
      onCloseClick={() => setActive(false)}
      content={content}
    />
  );
});

const ModalCard = makeModal(({ setActive, activeState }) => {
  const bodyElement = (
    <Content>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla accumsan, metus ultrices eleifend gravida,
        nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
        Ut vulputate semper dui. Fusce erat odio,
        sollicitudin vel erat vel, interdum mattis neque.
      </p>
      <h2>Second level</h2>
      <p>
        Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
        Quisque condimentum maximus mi,
        sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis.
        Suspendisse potenti. Etiam mattis
        sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
      </p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </Content>
  );
  const footer = (
    <React.Fragment>
      <Button success onClick={() => setActive(false)}>Save changes</Button>
      <Button onClick={() => setActive(false)}>Cancel</Button>
    </React.Fragment>
  );
  const card = {
    head: 'Modal title',
    body: bodyElement,
    foot: footer,
  };
  return (
    <Modal
      active={activeState}
      onOverlayClick={() => setActive(false)}
      onCloseClick={() => setActive(false)}
      card={card}
    />
  );
});

storiesOf('Modal', module)
  .addDecorator(boxDecorator)
  .add('normal', () => <ModalNormal />)
  .add('image modal', () => <ModalImage />)
  .add('modal card', () => <ModalCard />);

const commonBrand = (
  <NavbarBrand onBurgerClick={action('click')}>
    <NavbarItem href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </NavbarItem>
  </NavbarBrand>
);
const commonMenu = (
  <NavbarMenu>
    <NavbarStart>
      <NavbarItem href="https://bulma.io/">Home</NavbarItem>
      <NavbarItem
        dropdown
        link="Docs"
        href="https://bulma.io/documentation/overview/start/"
        hoverable
      >
        <NavbarItem href="https://bulma.io/documentation/overview/start/" target="_blank">
          Overview
        </NavbarItem>
        <NavbarItem href="https://bulma.io/documentation/modifiers/syntax/">
          Modifiers
        </NavbarItem>
        <NavbarItem href="https://bulma.io/documentation/columns/basics/">
          Columns
        </NavbarItem>
        <NavbarItem href="https://bulma.io/documentation/layout/container/">
          Layout
        </NavbarItem>
        <NavbarItem href="https://bulma.io/documentation/form/general/">
          Form
        </NavbarItem>
        <NavbarDivider />
        <NavbarItem href="https://bulma.io/documentation/elements/box/">
          Elements
        </NavbarItem>
        <NavbarItem active href="https://bulma.io/documentation/components/breadcrumb/">
          Components
        </NavbarItem>
      </NavbarItem>
    </NavbarStart>
    <NavbarEnd>
      <NavbarItem as="div">
        <Field grouped>
          <Control>
            <Button success as="a" icon="fas fa-download">Github</Button>
          </Control>
          <Control>
            <Button primary as="a" icon="fas fa-download" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">Download</Button>
          </Control>
        </Field>
      </NavbarItem>
    </NavbarEnd>
  </NavbarMenu>
);
storiesOf('Navbar', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <Navbar>
      <NavbarBrand>
        <NavbarItem href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </NavbarItem>
        <NavbarBurger />
      </NavbarBrand>
    </Navbar>
  ))
  .add('menus and dropdown', () => (
    <Navbar>
      {commonBrand}
      {commonMenu}
    </Navbar>
  ))
  .add('transparent', () => (
    <Navbar transparent>
      {commonBrand}
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href="https://bulma.io/">Home</NavbarItem>
          <NavbarItem
            dropdown
            link="Docs"
            href="https://bulma.io/documentation/overview/start/"
            hoverable
            boxed
          >
            <NavbarItem href="https://bulma.io/documentation/overview/start/" target="_blank">
              Overview
            </NavbarItem>
            <NavbarItem href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </NavbarItem>
            <NavbarItem href="https://bulma.io/documentation/columns/basics/">
              Columns
            </NavbarItem>
            <NavbarItem href="https://bulma.io/documentation/layout/container/">
              Layout
            </NavbarItem>
            <NavbarItem href="https://bulma.io/documentation/form/general/">
              Form
            </NavbarItem>
            <NavbarDivider />
            <NavbarItem href="https://bulma.io/documentation/elements/box/">
              Elements
            </NavbarItem>
            <NavbarItem active href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </NavbarItem>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem as="div">
            <Field grouped>
              <Control>
                <Button success as="a" icon="fas fa-download">Github</Button>
              </Control>
              <Control>
                <Button primary as="a" icon="fas fa-download" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">Download</Button>
              </Control>
            </Field>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  ))
  .add('fixed top', () => (
    <Navbar fixedTop>
      {commonBrand}
      {commonMenu}
    </Navbar>
  ))
  .add('fixed bottom', () => (
    <Navbar fixedBottom>
      {commonBrand}
      {commonMenu}
    </Navbar>
  ))
  .add('colors', () => (
    <React.Fragment>
      <Navbar>{commonBrand}{commonMenu}</Navbar>
      <Navbar primary>{commonBrand}{commonMenu}</Navbar>
      <Navbar link>{commonBrand}{commonMenu}</Navbar>
      <Navbar info>{commonBrand}{commonMenu}</Navbar>
      <Navbar success>{commonBrand}{commonMenu}</Navbar>
      <Navbar warning>{commonBrand}{commonMenu}</Navbar>
      <Navbar danger>{commonBrand}{commonMenu}</Navbar>
      <Navbar black>{commonBrand}{commonMenu}</Navbar>
      <Navbar dark>{commonBrand}{commonMenu}</Navbar>
      <Navbar light>{commonBrand}{commonMenu}</Navbar>
      <Navbar white>{commonBrand}{commonMenu}</Navbar>
    </React.Fragment>
  ));


class PaginationShow extends Component {
  constructor() {
    super();
    this.state = { current: 10 };
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(current) {
    this.setState({ current });
  }

  render() {
    return (
      <Pagination
        pages={20}
        currentIndex={this.state.current}
        onPageClick={this.setCurrent}
        {...this.props}
      />
    );
  }
}
storiesOf('Pagination', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <PaginationShow />
      <PaginationShow links={6} />
      <PaginationShow links={7} />
    </React.Fragment>
  ))
  .add('align', () => (
    <React.Fragment>
      <PaginationShow />
      <PaginationShow centered />
      <PaginationShow right />
    </React.Fragment>
  ))
  .add('styles and sizes', () => (
    <React.Fragment>
      <PaginationShow rounded />
      <PaginationShow small />
      <PaginationShow />
      <PaginationShow medium />
      <PaginationShow large />
    </React.Fragment>
  ));

storiesOf('Panel', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <Panel>
      <PanelHeading>repositories</PanelHeading>
      <PanelBlock>
        <Control iconLeft="fas fa-search" iconLeftSize="small">
          <Input small placeholder="search" />
        </Control>
      </PanelBlock>
      <PanelTabs onTabClick={action('clicked')} tabs={['all', 'public', 'private', 'sources', 'forks']} activeTabIndex={0} />
      <PanelBlockLink onClick={action('clicked')} icon="fas fa-book" active>bulma</PanelBlockLink>
      <PanelBlockLink icon="fas fa-book">marksheet</PanelBlockLink>
      <PanelBlockLink icon="fas fa-book">minireset.css</PanelBlockLink>
      <PanelBlockLink icon="fas fa-book">jgthms.github.io</PanelBlockLink>
      <PanelBlockLink icon="fas fa-code-branch">daniellowtw/infboard</PanelBlockLink>
      <PanelBlockLink icon="fas fa-code-branch">mojs</PanelBlockLink>
      <PanelBlockCheckbox onChange={action('changed')}>remember me</PanelBlockCheckbox>
      <PanelBlock>
        <Button link outlined fullwidth>reset all filters</Button>
      </PanelBlock>
    </Panel>
  ));

const normalTabs = ['Pictures', 'Music', 'Videos', 'Documents'];
const iconsTabs = [
  { tab: 'Pictures', icon: 'fas fa-image', iconSize: 'small' },
  { tab: 'Music', icon: 'fas fa-music', iconSize: 'small' },
  { tab: 'Videos', icon: 'fas fa-film', iconSize: 'small' },
  { tab: 'Documents', icon: 'fas fa-file-alt', iconSize: 'small' },
];
const alternIconsTabs = iconsTabs.map(tab => ({ ...tab, iconPosition: 'right' }));
storiesOf('Tabs', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Tabs tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs tabs={iconsTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs tabs={alternIconsTabs} activeTabIndex={0} onTabClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('aligment', () => (
    <React.Fragment>
      <Tabs tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs centered tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs right tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Tabs small tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs medium tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs large tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('styles', () => (
    <React.Fragment>
      <Tabs boxed tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs toggle tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs toggle toggleRounded tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
      <Tabs fullwidth tabs={normalTabs} activeTabIndex={0} onTabClick={action('clicked')} />
    </React.Fragment>
  ));
