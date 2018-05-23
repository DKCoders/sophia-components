import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const LevelItem = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('level-item', className)} {...restAttrs}>{children}</div>);

LevelItem.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

LevelItem.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(LevelItem);
