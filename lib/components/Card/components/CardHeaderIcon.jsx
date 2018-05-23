import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { defaultAttrs, aAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const CardHeaderIcon = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <a className={classNameJoiner('card-header-icon', className)} {...restAttrs} {...events}>
    {children}
  </a>
);

CardHeaderIcon.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

CardHeaderIcon.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(CardHeaderIcon);
