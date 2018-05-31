import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

const Field = ({ attrs: { className, ...restAttrs }, events, children }) => (
  <div className={classNameJoiner('field', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

Field.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Field.defaultProps = {
  children: null,
};

const isKeys = combineSets(helpersIsKeys, ['grouped', 'grouped-centered', 'grouped-right', 'grouped-multiline', 'horizontal']);

export default compose(
  withEvents(),
  withIsHas(isKeys, combineSets(helpersHasKeys, ['addons', 'addonsCentered', 'addonsRight'])),
  withAttrs(),
)(Field);
