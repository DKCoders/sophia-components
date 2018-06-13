import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Tr from './Tr';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';

const Tfoot = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <tfoot className={`${className || ''}`} {...restAttrs} {...events}>
    {children}
  </tfoot>
);

Tfoot.propTypes = {
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

Tfoot.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Tfoot);
