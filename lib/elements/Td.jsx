import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, tdAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';

const Td = ({ children, attrs: { className, ...restAttrs }, onClick }) => (
  <td className={`${className || ''}`} {...restAttrs} onClick={onClick}>
    {children}
  </td>
);

Td.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

Td.defaultProps = {
  children: '',
  onClick: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, tdAttrs)),
)(Td);
