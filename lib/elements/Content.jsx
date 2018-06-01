import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';

const Content = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('content', className)} {...restAttrs}>{children}</div>);

Content.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

Content.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Content);
