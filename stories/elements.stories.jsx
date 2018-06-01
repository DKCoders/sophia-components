import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import faker from 'faker';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import { Container } from '../lib/layout';
import {
  Button,
  Buttons,
  Box,
  Content,
  Delete,
  Icon,
  Image,
  Notification,
  ProgressBar,
  Tag,
  Tags,
  Title,
  Subtitle,
  Table,
  Tbody,
  Tfoot,
  Thead,
  Th,
  Tr,
  Td,
} from '../lib/elements';

const boxDecorator = story => (
  <Container style={{ marginTop: 10 }}>
    <Box>
      {story()}
    </Box>
  </Container>
);

storiesOf('Button', module)
  .addDecorator(boxDecorator)
  .add('normal button', () => <Button onClick={action('click')}>I am a Button</Button>)
  .add('a button like a link tag', () => <Button as="a" href="https://google.com" title="Google" target="blank">I am a link</Button>)
  .add('a button like a input tag', () => <Button onClick={action('click')} as="input" type="submit">I am an input</Button>)
  .add('colorsKeys buttons', () => (
    <React.Fragment>
      <Button white>White</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button black>Black</Button>
      <Button primary>Primary</Button>
      <Button link>Link</Button>
      <Button info>Info</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
    </React.Fragment>
  ))
  .add('icon sizes', () => (
    <React.Fragment>
      <Button large primary icon="fas fa-home" iconSize="small" />
      <Button large primary icon="fas fa-home" />
      <Button large primary icon="fas fa-home fa-lg" iconSize="medium" />
      <Button large primary icon="fas fa-home fa-2x" iconSize="large" />
      <Button success icon="fas fa-home" iconSize="small">Warning</Button>
      <Button info icon="fas fa-home" iconSize="medium">Warning</Button>
      <Button warning icon="fas fa-home" iconSize="large">Warning</Button>
      <Button danger icon="fas fa-home">Danger</Button>
      <Button danger icon="fas fa-home" iconPosition="right">Danger</Button>
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
  ))
  .add('groups', () => (
    <Buttons>
      <Button white>White</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button black>Black</Button>
      <Button primary>Primary</Button>
      <Button link>Link</Button>
      <Button info>Info</Button>
      <Button success>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
    </Buttons>
  ))
  .add('addons groups and aligment', () => (
    <React.Fragment>
      <Buttons addons>
        <Button success>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </Buttons>
      <Buttons addons centered>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button danger>Right</Button>
      </Buttons>
      <Buttons addons right>
        <Button>Left</Button>
        <Button info>Center</Button>
        <Button>Right</Button>
      </Buttons>
    </React.Fragment>
  ));

storiesOf('Box', module)
  .addDecorator(boxDecorator)
  .add('normal box', () => <h1>This is a box</h1>);

storiesOf('Content', module)
  .addDecorator(boxDecorator)
  .add('normal content', () => (
    <Content>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit.
        Nulla accumsan, metus ultrices eleifend gravida,
        nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
        Sub<sub>script</sub> works as well!
      </p>
      <h2>Second level</h2>
      <p>
        Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
        Quisque condimentum maximus mi, sit amet commodo arcu rutrum id.
        Proin pretium urna vel cursus venenatis. Suspendisse potenti.
        Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
      </p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
      <h3>Third level</h3>
      <p>
        Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>.
        Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci.
        Fusce eu rutrum tellus.
      </p>
      <ol>
        <li>Donec blandit a lorem id convallis.</li>
        <li>Cras gravida arcu at diam gravida gravida.</li>
        <li>Integer in volutpat libero.</li>
        <li>Donec a diam tellus.</li>
        <li>Aenean nec tortor orci.</li>
        <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
        <li>Vivamus maximus ultricies pulvinar.</li>
      </ol>
    </Content>
  ));

storiesOf('Delete', module)
  .addDecorator(boxDecorator)
  .add('normal delete', () => <Delete onClick={action('click!')} />)
  .add('sizes delete', () => (
    <React.Fragment>
      <Delete small />
      <Delete />
      <Delete medium />
      <Delete large />
    </React.Fragment>
  ));

storiesOf('Icon', module)
  .addDecorator(boxDecorator)
  .add('normal icon', () => <Icon icon="fas fa-home" />)
  .add('sizes icon', () => (
    <React.Fragment>
      <Icon icon="fas fa-home fa-xs" small />
      <Icon icon="fas fa-home" />
      <Icon icon="fas fa-home fa-lg" medium />
      <Icon icon="fas fa-home fa-3x" large />
    </React.Fragment>
  ))
  .add('color icon', () => (
    <React.Fragment>
      <Icon icon="fas fa-home" text="success" />
      <Icon icon="fas fa-home" />
    </React.Fragment>
  ));

storiesOf('Image', module)
  .addDecorator(boxDecorator)
  .add('normal image', () => <Image src="https://bulma.io/images/placeholders/128x128.png" alt="Bulma img" square="128" />)
  .add('sizes image', () => (
    <React.Fragment>
      <Image src="https://bulma.io/images/placeholders/16x16.png" alt="Bulma img" square="16" /><br />
      <Image src="https://bulma.io/images/placeholders/24x24.png" alt="Bulma img" square="24" /><br />
      <Image src="https://bulma.io/images/placeholders/32x32.png" alt="Bulma img" square="32" /><br />
      <Image src="https://bulma.io/images/placeholders/48x48.png" alt="Bulma img" square="48" /><br />
      <Image src="https://bulma.io/images/placeholders/64x64.png" alt="Bulma img" square="64" /><br />
      <Image src="https://bulma.io/images/placeholders/96x96.png" alt="Bulma img" square="96" /><br />
      <Image src="https://bulma.io/images/placeholders/128x128.png" alt="Bulma img" square="128" />
    </React.Fragment>
  ))
  .add('ratio image', () => (
    <div style={{ width: 200 }}>
      <Image src="https://bulma.io/images/placeholders/480x480.png" alt="Bulma img" ratio="square" /><br />
      <Image src="https://bulma.io/images/placeholders/480x480.png" alt="Bulma img" ratio="5by4" /><br />
      <Image src="https://bulma.io/images/placeholders/480x480.png" alt="Bulma img" ratio="16by9" /><br />
    </div>
  ));

const lorem = faker.lorem.paragraphs();
storiesOf('Notification', module)
  .addDecorator(boxDecorator)
  .add('normal notification', () => (<Notification onDeleteClick={action('click!')}>{lorem}</Notification>))
  .add('color notification', () => (
    <React.Fragment>
      <Notification>{lorem}</Notification>
      <Notification primary onDeleteClick={action('click!')}>{lorem}</Notification>
      <Notification link onDeleteClick={action('click!')}>{lorem}</Notification>
      <Notification info onDeleteClick={action('click!')}>{lorem}</Notification>
      <Notification warning onDeleteClick={action('click!')}>{lorem}</Notification>
      <Notification success onDeleteClick={action('click!')}>{lorem}</Notification>
      <Notification danger onDeleteClick={action('click!')}>{lorem}</Notification>
    </React.Fragment>
  ));

storiesOf('ProgressBar', module)
  .addDecorator(boxDecorator)
  .add('normal progress bar', () => <ProgressBar value={30} />)
  .add('color progress bar', () => (
    <React.Fragment>
      <ProgressBar value={30} />
      <ProgressBar value={40} primary />
      <ProgressBar value={50} link />
      <ProgressBar value={60} info />
      <ProgressBar value={70} warning />
      <ProgressBar value={80} success />
      <ProgressBar value={90} danger />
    </React.Fragment>
  ))
  .add('size progress bar', () => (
    <React.Fragment>
      <ProgressBar value={30} small />
      <ProgressBar value={40} />
      <ProgressBar value={50} medium />
      <ProgressBar value={60} large />
    </React.Fragment>
  ));

const headers = ['Product', 'Color', 'Quantity', 'Price', 'Total'];
const data = [...Array(6)].map(() => {
  const qty = faker.random.arrayElement([1, 2, 3]);
  const price = faker.commerce.price();
  return [
    faker.commerce.product(),
    faker.commerce.color(),
    qty,
    price,
    qty * price,
  ];
});
const total = data.reduce((acum, item) => acum + item[4], 0);
const footers = ['', '', '', '', total];

const thead = (
  <Thead>
    <Tr>{headers.map(cell => <Th key={cell}>{cell}</Th>)}</Tr>
  </Thead>
);
const tfoot = (
  <Tfoot>
    <Tr>{footers.map((cell, index) => <Th key={index}>{cell}</Th>)}</Tr>
  </Tfoot>
);
const tbody = (
  <Tbody>
    {data.map((row, index) => (
      <Tr key={row[0] + index} selected={index === 1}>
        {row.map(cell => <Td key={cell + index}>{cell}</Td>)}
      </Tr>
    ))}
  </Tbody>
);

storiesOf('Table', module)
  .addDecorator(boxDecorator)
  .add('normal table', () => (
    <Table>
      {thead}
      {tfoot}
      {tbody}
    </Table>
  ))
  .add('bordered table', () => (
    <Table bordered>
      {thead}
      {tfoot}
      {tbody}
    </Table>
  ))
  .add('striped table', () => (
    <Table striped>
      {thead}
      {tfoot}
      {tbody}
    </Table>
  ))
  .add('narrow table', () => (
    <Table narrow>
      {thead}
      {tfoot}
      {tbody}
    </Table>
  ))
  .add('hoverable table', () => (
    <Table hoverable>
      {thead}
      {tfoot}
      {tbody}
    </Table>
  ))
  .add('fullwidth table', () => (
    <Table fullwidth>
      {thead}
      {tfoot}
      {tbody}
    </Table>
  ));

storiesOf('Tag', module)
  .addDecorator(boxDecorator)
  .add('normal tag', () => <Tag onClick={action('click!')}>Tag Label</Tag>)
  .add('sizes tag', () => (
    <React.Fragment>
      <Tag>Normal</Tag>
      <Tag medium primary>Medium</Tag>
      <Tag large danger>Large</Tag>
    </React.Fragment>
  ))
  .add('color tag', () => (
    <React.Fragment>
      <Tag>Normal</Tag>
      <Tag black>Black</Tag>
      <Tag dark>Dark</Tag>
      <Tag light>Light</Tag>
      <Tag white>White</Tag>
      <Tag primary>Primary</Tag>
      <Tag link>Link</Tag>
      <Tag info>Info</Tag>
      <Tag success>Success</Tag>
      <Tag warning>Warning</Tag>
      <Tag danger>Danger</Tag>
    </React.Fragment>
  ))
  .add('modified tag', () => (
    <React.Fragment>
      <Tag delete as="a" />
      <Tag rounded>Rounded</Tag>
    </React.Fragment>
  ))
  .add('with Delete Component tag', () => (
    <React.Fragment>
      <Tag medium primary onDeleteClick={action('click!')}>
        Hello
      </Tag>
      <Tag large danger onDeleteClick={action('click!')}>
        World
      </Tag>
    </React.Fragment>
  ))
  .add('groups of tags', () => (
    <Tags>
      <Tag>Normal</Tag>
      <Tag black>Black</Tag>
      <Tag dark>Dark</Tag>
      <Tag light>Light</Tag>
      <Tag white>White</Tag>
      <Tag primary>Primary</Tag>
      <Tag link>Link</Tag>
      <Tag info>Info</Tag>
      <Tag success>Success</Tag>
      <Tag warning>Warning</Tag>
      <Tag danger>Danger</Tag>
    </Tags>
  ))
  .add('Addons of tags', () => (
    <React.Fragment>
      <Tags addons>
        <Tag>Normal</Tag>
        <Tag black>Black</Tag>
      </Tags>
      <Tags addons>
        <Tag link>Normal</Tag>
        <Tag delete as="a" />
      </Tags>
    </React.Fragment>
  ));

storiesOf('Title and Subtitle', module)
  .addDecorator(boxDecorator)
  .add('normal title and subtitle', () => (
    <React.Fragment>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
    </React.Fragment>
  ))
  .add('sizes title and subtitle', () => (
    <React.Fragment>
      <Title one>Title</Title>
      <Title two>Title</Title>
      <Title three>Title</Title>
      <Title four>Title</Title>
      <Title five>Title</Title>
      <Title six>Title</Title>
      <Subtitle one>Subtitle</Subtitle>
      <Subtitle two>Subtitle</Subtitle>
      <Subtitle three>Subtitle</Subtitle>
      <Subtitle four>Subtitle</Subtitle>
      <Subtitle five>Subtitle</Subtitle>
      <Subtitle six>Subtitle</Subtitle>
    </React.Fragment>
  ))
  .add('spaced title and subtitle', () => (
    <React.Fragment>
      <Title spaced as="p">Title</Title>
      <Subtitle as="p">Subtitle</Subtitle>
    </React.Fragment>
  ));
