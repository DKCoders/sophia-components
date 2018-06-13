import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Tr from './Tr';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';

const Thead = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <thead className={`${className || ''}`} {...restAttrs} {...events}>
    {children}
  </thead>
);

Thead.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf([Tr]),
    })),
    PropTypes.shape({
      type: PropTypes.oneOf([Tr]),
    }),
  ]).isRequired,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Thead.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Thead);
