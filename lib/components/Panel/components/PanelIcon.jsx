import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const PanelIcon = ({ icon, attrs: { className, ...restAttrs } }) => (
  <span className={classNameJoiner('panel-icon', className)} {...restAttrs}>
    <i className={icon} />
  </span>
);

PanelIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  attrs: PropTypes.shape().isRequired,
};

PanelIcon.defaultProps = {};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(PanelIcon);
