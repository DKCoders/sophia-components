/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter, processor } from '../utils/helpers';

export const columnSizesIsKeys = [
  'half',
  'oneFifths',
  'twoFifths',
  'threeFifths',
  'fourFifths',
  'oneThird',
  'twoThirds',
  'oneQuarter',
  'threeQuarters',
];

export const columnOffsetIsKeys = columnSizesIsKeys
  .map(size => `offset${capitalizeFirstLetter(size)}`);

export const isAcceptStringVal = [
  'flex',
  'inline',
  'inlineBlock',
  'inlineFlex',
  'hidden',
  'size',
  'half',
  'narrow',
  ...columnSizesIsKeys,
  ...columnOffsetIsKeys,
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

const withIsProcessor = (isKeys = [], hasKeys = []) => (InnerComponent) => {
  class WithProcessor extends Component {
    render() {
      const { className, props } = processor(isKeys, hasKeys, this.props);
      if (className.length) {
        return <InnerComponent className={className} {...props} />;
      }
      return <InnerComponent {...props} />;
    }
  }

  WithProcessor.propTypes = {
    ...InnerComponent.propTypes,
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
    ...InnerComponent.defaultProps,
    ...isKeys.reduce((acum, key) => ({ ...acum, [key]: null }), {}),
    ...hasKeys.reduce((acum, key) => ({ ...acum, [key]: null }), {}),
    is: null,
    has: null,
    className: [],
  };
  WithProcessor.displayName = InnerComponent.displayName || InnerComponent.name;
  return WithProcessor;
};

export default withIsProcessor;
