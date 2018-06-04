/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, {
  helpersIsKeys,
  helpersHasKeys,
  columnSizesIsKeys, columnOffsetIsKeys,
} from '../base/withIsHas';
import { classNameJoiner, combineSets, capitalizeFirstLetter } from '../utils/helpers';

const sizes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
const offsetSizes = [...sizes.map(size => `offset${capitalizeFirstLetter(size)}`)];

const reduceSizesToArray = props =>
  (acum, size, index) => (!props[size] ? acum : [...acum, { size: index + 1, value: props[size] }]);
const mapSizeToClasses = prefix => ({ size, value }) => Array.isArray(value)
  ? value.map(val => `${prefix}-${size}${typeof val === 'string' ? `-${val}` : ''}`).join(' ')
  : `${prefix}-${size}${typeof value === 'string' ? `-${value}` : ''}`;

const Column = ({ children, attrs: { className, ...restAttrs }, ...restProps }) => {
  const sizeClassIndex = sizes.reduce(reduceSizesToArray(restProps), []);
  const sizeClassNameProp = !sizeClassIndex.length
    ? null
    : sizeClassIndex
      .map(mapSizeToClasses('is'))
      .join(' ');
  const offsetSizeClassIndex = offsetSizes.reduce(reduceSizesToArray(restProps), []);
  const offsetSizeClassNameProp = !offsetSizeClassIndex.length
    ? null
    : offsetSizeClassIndex
      .map(mapSizeToClasses('is-offset'))
      .join(' ');
  return (<div className={classNameJoiner('column', offsetSizeClassNameProp, sizeClassNameProp, className)} {...restAttrs}>{children}</div>);
};

Column.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  ...sizes.reduce((acum, size) => ({
    ...acum,
    [size]: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  }), {}),
  ...offsetSizes.reduce((acum, size) => ({
    ...acum,
    [size]: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  }), {}),
};

Column.defaultProps = {
  children: null,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: null }), {}),
  ...offsetSizes.reduce((acum, size) => ({ ...acum, [size]: null }), {}),
};

const sets = combineSets(helpersIsKeys, columnSizesIsKeys, columnOffsetIsKeys, ['narrow']);

export default compose(
  withIsHas(sets, helpersHasKeys),
  withAttrs(),
)(Column);
