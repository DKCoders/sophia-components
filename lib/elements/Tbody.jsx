import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Tr from './Tr';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';

const Tbody = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <tbody className={`${className || ''}`} {...restAttrs} {...events}>
    {children}
  </tbody>
);

Tbody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Tr]),
  })).isRequired,
  events: PropTypes.shape().isRequired,
  attrs: PropTypes.shape().isRequired,
};

Tbody.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Tbody);
