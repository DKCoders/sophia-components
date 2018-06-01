import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';

const Box = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('box', className)} {...restAttrs}>{children}</div>);

Box.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

Box.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Box);
