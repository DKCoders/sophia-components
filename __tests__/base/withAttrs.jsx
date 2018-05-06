import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import withAttrs, { defaultAttrs } from '../../lib/base/withAttrs';

const TestComponent = ({ another, ...props }) => <div {...props}>{another}</div>;
TestComponent.propTypes = {
  another: PropTypes.string,
};
TestComponent.defaultProps = {
  another: 'Test',
};

describe('HOC withAttrs', () => {
  test('should receive a component and return a new component', () => {
    const Component = withAttrs()(TestComponent);
    expect(Component).not.toBe(TestComponent);
  });
  test('should accept an array of string to choose attributes', () => {
    const Component = withAttrs(['className', 'style'])(TestComponent);
    expect(Component.propTypes).toBeDefined();
    expect(Object.keys(Component.propTypes)).toEqual(['another', 'className', 'style']);
    expect(Component.defaultProps).toBeDefined();
    expect(Object.keys(Component.defaultProps)).toEqual(['another', 'className', 'style']);
  });
  test('should use a default attributes if none is provided', () => {
    const Component = withAttrs()(TestComponent);
    expect(Component.propTypes).toBeDefined();
    expect(Object.keys(Component.propTypes)).toEqual(['another', ...defaultAttrs]);
    expect(Component.defaultProps).toBeDefined();
    expect(Object.keys(Component.defaultProps)).toEqual(['another', ...defaultAttrs]);
  });
  test('should warn if an invalid attribute is passed', () => {
    const spy = jest.spyOn(console, 'warn');
    spy.mockImplementation(() => {});
    withAttrs(['data-test', 'style'])(TestComponent);
    expect(spy).toBeCalledWith('Invalid attributes: ', 'data-test');
    spy.mockRestore();
  });
  test('should warn if an empty array is provided', () => {
    const spy = jest.spyOn(console, 'warn');
    spy.mockImplementation(() => {});
    withAttrs([])(TestComponent);
    expect(spy).toBeCalledWith('At least one attribute must be passed');
    spy.mockRestore();
  });
  test('should warn if the array contains non-string values', () => {
    const spy = jest.spyOn(console, 'warn');
    spy.mockImplementation(() => {});
    withAttrs(['id', true, 'style'])(TestComponent);
    expect(spy).toBeCalledWith('Invalid attribute at array index', 1);
    spy.mockRestore();
  });
  test('should mount the Component and receive the props and the Inner Component too', () => {
    const Component = withAttrs()(TestComponent);
    const props = {
      id: 'test-id',
      className: ['test1', 'test2'],
      style: { color: 'blue' },
      another: 'Hello',
    };
    const wrapper = shallow(<Component {...props} />);
    const expected = {
      ...props,
      className: props.className.join(' '),
    };
    expect(wrapper.props()).toEqual(expected);
    const inner = wrapper.find(TestComponent).first();
    expect(inner.props()).toEqual(expected);
  });
  test('should not receive null props the inner component', () => {
    const Component = withAttrs()(TestComponent);
    const props = {
      id: 'test-id',
      className: [],
      style: null,
      another: 'Hello',
    };
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper.instance().props).toEqual(props);
    const inner = wrapper.find(TestComponent).first();
    const { style, className, ...innerExpected } = props;
    expect(inner.props()).toEqual(innerExpected);
  });
});
