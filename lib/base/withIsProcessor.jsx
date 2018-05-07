/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isProcessor } from '../utils/helpers';

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

export const buttonKeys = [
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

export const allKeys = [...(new Set([...colorsKeys, ...colorsStateKeys]))];
const withIsProcessor = (keys = allKeys) => (Component) => {
  class WithIsProcessor extends PureComponent {
    render() {
      const { className, props } = isProcessor(keys, this.props);
      return <Component className={className} {...props} />;
    }
  }

  WithIsProcessor.propTypes = {
    ...Component.propTypes,
    ...keys.reduce((acum, key) => ({ ...acum, [key]: PropTypes.bool }), {}),
    is: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  };
  WithIsProcessor.defaultProps = {
    ...Component.defaultProps,
    ...keys.reduce((acum, key) => ({ ...acum, [key]: null }), {}),
    is: null,
    className: [],
  };
  WithIsProcessor.displayName = Component.displayName || Component.name;
  return WithIsProcessor;
};

export default withIsProcessor;
