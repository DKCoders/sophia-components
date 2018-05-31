import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Tr from './Tr';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';

const Tbody = ({ children, attrs: { className, ...restAttrs } }) => (
  <tbody className={`${className || ''}`} {...restAttrs}>
    {children}
  </tbody>
);

Tbody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Tr]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
};

Tbody.defaultProps = {};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Tbody);
