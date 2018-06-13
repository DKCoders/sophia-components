import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents, { mouse } from '../base/withEvents';

const ProgressBar = ({
  value, max, attrs: { className, ...restAttrs }, events,
}) => (
  <progress className={classNameJoiner('progress', className)} {...restAttrs} {...events} value={value} max={max}>
    {value}%
  </progress>
);

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  attrs: PropTypes.shape().isRequired,
};

ProgressBar.defaultProps = {
  max: 100,
};

export default compose(
  withEvents(mouse),
  withIsHas(combineSets(helpersIsKeys, colorsStateKeys, sizeKeys), helpersHasKeys),
  withAttrs(),
)(ProgressBar);
