import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const PanelBlock = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <div className={classNameJoiner('panel-block', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

PanelBlock.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

PanelBlock.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(PanelBlock);
