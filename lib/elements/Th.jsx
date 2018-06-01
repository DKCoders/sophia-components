import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, tdAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';

const Th = ({ children, attrs: { className, ...restAttrs }, onClick }) => (
  <th className={`${className || ''}`} {...restAttrs} onClick={onClick}>
    {children}
  </th>
);

Th.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

Th.defaultProps = {
  children: '',
  onClick: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, tdAttrs)),
)(Th);
