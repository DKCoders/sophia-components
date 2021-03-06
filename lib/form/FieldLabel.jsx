import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, sizeKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

const FieldLabel = ({ attrs: { className, ...restAttrs }, events, children }) => (
  <div className={classNameJoiner('field-label', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

FieldLabel.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

FieldLabel.defaultProps = {
  children: null,
};

const isKeys = combineSets(helpersIsKeys, sizeKeys, ['normal']);

export default compose(
  withEvents(),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(),
)(FieldLabel);
