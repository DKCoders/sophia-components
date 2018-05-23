import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner } from '../../utils/helpers';

const Card = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <div className={classNameJoiner('card', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Card.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Card);
