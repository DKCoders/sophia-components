import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';
import { classNameJoiner } from '../utils/helpers';

const FieldBody = ({ attrs: { className, ...restAttrs }, events, children }) => (
  <div className={classNameJoiner('field-body', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

FieldBody.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

FieldBody.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(FieldBody);
