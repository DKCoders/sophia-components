import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';

const sizes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

const Tile = ({
  children, attrs: { className, ...restAttrs }, events, ...restProps
}) => {
  const sizeClassIndex = sizes.findIndex(size => restProps[size]);
  const sizeClassNameProp = sizeClassIndex !== -1
    ? `is-${sizeClassIndex + 1}`
    : null;
  return (<div className={classNameJoiner('tile', className, sizeClassNameProp)} {...restAttrs} {...events}>{children}</div>);
};

Tile.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: PropTypes.bool }), {}),
};

Tile.defaultProps = {
  children: null,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: null }), {}),
};

const isTileKeys = ['ancestor', 'parent', 'child', 'vertical'];

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, isTileKeys), helpersHasKeys),
  withAttrs(),
)(Tile);
