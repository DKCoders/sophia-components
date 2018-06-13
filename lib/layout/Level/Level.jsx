import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner } from '../../utils/helpers';
import withEvents from '../../base/withEvents';

const Level = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<nav className={classNameJoiner('level', className)} {...restAttrs} {...events}>{children}</nav>);


Level.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Level.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Level);
