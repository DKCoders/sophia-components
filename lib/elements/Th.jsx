import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, tdAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Th = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <th className={`${className || ''}`} {...restAttrs} {...events}>
    {children}
  </th>
);

Th.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Th.defaultProps = {
  children: '',
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, tdAttrs)),
)(Th);
