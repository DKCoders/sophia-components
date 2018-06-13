import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withEvents from '../base/withEvents';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';

const Box = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<div className={classNameJoiner('box', className)} {...restAttrs} {...events}>{children}</div>);

Box.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Box.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Box);
