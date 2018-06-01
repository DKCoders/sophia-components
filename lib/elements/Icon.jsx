import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, sizeKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';

const Icon = ({ icon, attrs: { className, ...restAttrs } }) => (
  <span className={classNameJoiner('icon', className)} {...restAttrs}>
    <i className={icon} />
  </span>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  attrs: PropTypes.shape().isRequired,
};

Icon.defaultProps = {};

export default compose(
  withIsHas(combineSets(helpersIsKeys, sizeKeys, ['left', 'right']), helpersHasKeys),
  withAttrs(),
)(Icon);
