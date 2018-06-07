import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import './index.css';

import { Box } from '../lib/elements';
import { Container } from '../lib/layout';
import {
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  FileInput,
  Help,
  Control,
  Label,
  Field,
  FieldLabel,
  FieldBody,
} from '../lib/form';

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

const unselectedLabel = 'Select a number';
const optionsArray = ['One', 'Two', 'Three', 'Four'];
const optionsArrayArray = [[undefined, unselectedLabel], [1, 'One'], [2, 'Two'], [3, 'Three'], [4, 'Four']];
const optionsArrayShape = [
  { label: unselectedLabel },
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 },
];
const optionsShape = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
};

storiesOf('Select', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Select onChange={action('changed')} onClick={action('clicked')}>
        <option>Select a number</option>
        <option value="1">One</option>
      </Select>
      <Select options={optionsArray} noSelectedLabel={unselectedLabel} onChange={action('changed')} onClick={action('clicked')} />
      <Select options={optionsArrayArray} onChange={action('changed')} onClick={action('clicked')} />
      <Select options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select options={optionsShape} noSelectedLabel={unselectedLabel} onChange={action('changed')} onClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('multiple', () => (
    <React.Fragment>
      <Select multiple size="8" options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('color', () => (
    <React.Fragment>
      <Select primary options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select info options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select success options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select warning options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select danger options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('styles and states', () => (
    <React.Fragment>
      <Select options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select rounded options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select hovered options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select focused options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select loading options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Select small options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select medium options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
      <Select large options={optionsArrayShape} onChange={action('changed')} onClick={action('clicked')} />
    </React.Fragment>
  ));

storiesOf('Checkbox', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Checkbox checked label="Test" onChange={action('Changed')} />
      <br />
      <Checkbox checked label="Test" onChange={action('Changed')} disabled />
    </React.Fragment>
  ));

storiesOf('Radio', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Radio name="test" label="Test 1" onChange={action('Changed')} />
      <Radio name="test" label="Test 2" onChange={action('Changed')} />
    </React.Fragment>
  ));

storiesOf('FileInput', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." onChange={action('Changed!')} />
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." fileName="File name.docx" />
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." fileName="File name.docx" right />
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." fileName="File name.docx" fullwidth />
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." boxed />
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." fileName="File name.docx" boxed />
    </React.Fragment>
  ))
  .add('color', () => (
    <React.Fragment>
      <FileInput primary name="test-file" icon="fas fa-upload" label="Choose a file..." />
      <FileInput info name="test-file" icon="fas fa-upload" label="Choose a file..." boxed />
      <FileInput danger name="test-file" icon="fas fa-upload" label="Choose a file..." fileName="Testing.xls" boxed />
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <FileInput small name="test-file" icon="fas fa-upload" label="Choose a file..." />
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." />
      <FileInput medium name="test-file" icon="fas fa-upload" label="Choose a file..." />
      <FileInput large name="test-file" icon="fas fa-upload" label="Choose a file..." />
    </React.Fragment>
  ))
  .add('aligment', () => (
    <React.Fragment>
      <FileInput name="test-file" icon="fas fa-upload" label="Choose a file..." />
      <FileInput centered name="test-file" icon="fas fa-upload" label="Choose a file..." />
      <FileInput right name="test-file" icon="fas fa-upload" label="Choose a file..." />
    </React.Fragment>
  ));

storiesOf('Field', module)
  .addDecorator(boxDecorator)
  .add('normal', () => (
    <React.Fragment>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input name="test-name" placeholder="Name" />
        </Control>
        <Help primary>A help</Help>
      </Field>
      <Field addons>
        <Control iconLeft="fas fa-upload">
          <Input name="test-name" placeholder="Name" />
        </Control>
        <Control expanded iconRight="fas fa-upload">
          <Input name="test-name" placeholder="Last Name" />
        </Control>
      </Field>
      <Field grouped groupedCentered>
        <Control iconLeft="fas fa-upload">
          <Input name="test-name" placeholder="Name" />
        </Control>
        <Control expanded iconRight="fas fa-upload">
          <Input name="test-name" placeholder="Last Name" />
        </Control>
      </Field>
    </React.Fragment>
  ))
  .add('horizontal', () => (
    <React.Fragment>
      <Field horizontal>
        <FieldLabel normal>
          <Label>Name</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input name="test-name" placeholder="Name" />
            </Control>
            <Help primary>A help</Help>
          </Field>
        </FieldBody>
      </Field>
      <Field horizontal>
        <FieldLabel large>
          <Label>Name</Label>
        </FieldLabel>
        <FieldBody>
          <Field>
            <Control>
              <Input large name="test-name" placeholder="Name" />
            </Control>
            <Help large primary>A help</Help>
          </Field>
        </FieldBody>
      </Field>
      <Field addons>
        <FieldLabel />
        <FieldBody>
          <Field addons>
            <Control iconLeft="fas fa-upload">
              <Input name="test-name" placeholder="Name" />
            </Control>
            <Control expanded iconRight="fas fa-upload">
              <Input name="test-name" placeholder="Last Name" />
            </Control>
          </Field>
        </FieldBody>
      </Field>
    </React.Fragment>
  ));
