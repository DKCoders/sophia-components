/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { processor } from '../utils/helpers';

export const colorsKeys = [
  'white',
  'light',
  'dark',
  'black',
];

export const colorsStateKeys = [
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
];

export const sizeKeys = [
  'small',
  'medium',
  'large',
];

export const aligmentKeys = [
  'centered',
  'right',
  'left',
];

export const buttonIsKeys = [
  ...colorsKeys,
  ...colorsStateKeys,
  ...sizeKeys,
  'outlined',
  'inverted',
  'rounded',
  'hovered',
  'focused',
  'active',
  'loading',
  'selected',
  'static',
];

export const buttonsIsKeys = [
  ...aligmentKeys,
];

export const buttonsHasKeys = [
  'addons',
];

export const defaultIsKeys = [...(new Set([...colorsKeys, ...colorsStateKeys, aligmentKeys]))];
export const defaultHasKeys = [...(new Set([]))];
const withIsProcessor = (isKeys = defaultIsKeys, hasKeys = defaultHasKeys) => (Component) => {
  class WithProcessor extends PureComponent {
    render() {
      const { className, props } = processor(isKeys, hasKeys, this.props);
      return <Component className={className} {...props} />;
    }
  }

  WithProcessor.propTypes = {
    ...Component.propTypes,
    ...isKeys.reduce((acum, key) => ({ ...acum, [key]: PropTypes.bool }), {}),
    ...hasKeys.reduce((acum, key) => ({ ...acum, [key]: PropTypes.bool }), {}),
    is: PropTypes.arrayOf(PropTypes.string),
    has: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };
  WithProcessor.defaultProps = {
    ...Component.defaultProps,
    ...isKeys.reduce((acum, key) => ({ ...acum, [key]: null }), {}),
    ...hasKeys.reduce((acum, key) => ({ ...acum, [key]: null }), {}),
    is: null,
    has: null,
    className: [],
  };
  WithProcessor.displayName = Component.displayName || Component.name;
  return WithProcessor;
};

export default withIsProcessor;
