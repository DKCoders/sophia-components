import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const PaginationLink = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <li>
    <a className={classNameJoiner('pagination-link', className)} {...restAttrs} {...events}>
      {children}
    </a>
  </li>
);

PaginationLink.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

PaginationLink.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['current']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(PaginationLink);
