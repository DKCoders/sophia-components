/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { processor } from '../utils/helpers';

export const isAcceptStringVal = [
  'flex',
  'inline',
  'inlineBlock',
  'inlineFlex',
  'hidden',
  'size',
];

export const hasAcceptStringVal = [
  // color text background
  'text',
  'background',
  'textCentered',
  'textJustified',
  'textLeft',
  'textRight',
  'textWeight',
];

export const helpersIsKeys = [
  'clearfix',
  'pulledLeft',
  'pulledRight',
  'marginless',
  'paddingless',
  'overlay',
  'clipped',
  'radiusless',
  'shadowless',
  'unselectable',
  'invisible',
  'block',
  'capitalized',
  'lowercase',
  'uppercase',
  'italic',
  'flex',
  'inline',
  'inlineBlock',
  'inlineFlex',
  'hidden',
  'size',
];

// All accept strings
export const helpersHasKeys = [
  // color text background
  'text',
  'background',
  'textCentered',
  'textJustified',
  'textLeft',
  'textRight',
  'textWeight',
];

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
  ...helpersIsKeys,
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

export const buttonHasKeys = [
  ...helpersHasKeys,
];

export const buttonsIsKeys = [
  ...helpersIsKeys,
  ...aligmentKeys,
];

export const buttonsHasKeys = [
  ...helpersHasKeys,
  'addons',
];

const propTypesReduceFunc = (acceptString = []) => (acum, key) => ({
  ...acum,
  [key]: !acceptString.includes(key)
    ? PropTypes.bool
    : PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
});

const withIsProcessor = (isKeys = [], hasKeys = []) => (Component) => {
  class WithProcessor extends PureComponent {
    render() {
      console.log(Component.propTypes);
      const { className, props } = processor(isKeys, hasKeys, this.props);
      if (className.length) {
        return <Component className={className} {...props} />;
      }
      return <Component {...props} />;
    }
  }

  WithProcessor.propTypes = {
    ...Component.propTypes,
    ...isKeys.reduce(propTypesReduceFunc(isAcceptStringVal), {}),
    ...hasKeys.reduce(propTypesReduceFunc(hasAcceptStringVal), {}),
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
