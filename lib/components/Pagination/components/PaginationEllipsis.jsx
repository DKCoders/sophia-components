import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const PaginationEllipsis = ({ attrs: { className, ...restAttrs }, events }) => (
  <li>
    <span className={classNameJoiner('pagination-ellipsis', className)} {...restAttrs} {...events}>
      &hellip;
    </span>
  </li>
);

PaginationEllipsis.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

PaginationEllipsis.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['current']), helpersHasKeys),
  withAttrs(),
)(PaginationEllipsis);
