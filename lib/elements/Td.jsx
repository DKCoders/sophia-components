import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, tdAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Td = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <td className={`${className || ''}`} {...restAttrs} {...events}>
    {children}
  </td>
);

Td.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Td.defaultProps = {
  children: '',
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, tdAttrs)),
)(Td);
