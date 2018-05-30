import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const PaginationNext = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <a className={classNameJoiner('pagination-previous', className)} {...restAttrs} {...events}>
    {children}
  </a>
);

PaginationNext.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

PaginationNext.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs, ['disabled'])),
)(PaginationNext);
