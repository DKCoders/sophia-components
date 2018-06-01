import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const LevelLeft = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('level-left', className)} {...restAttrs}>{children}</div>);


LevelLeft.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

LevelLeft.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(LevelLeft);
