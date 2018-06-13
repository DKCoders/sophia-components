import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Content = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<div className={classNameJoiner('content', className)} {...restAttrs} {...events}>{children}</div>);

Content.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Content.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Content);
