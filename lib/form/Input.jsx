import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, inputAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

const Input = ({ attrs: { className, type, ...restAttrs }, events }) => (
  <input
    className={classNameJoiner('input', className)}
    type={type || 'text'}
    {...events}
    {...restAttrs}
  />
);

Input.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Input.defaultProps = {};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, sizeKeys, ['rounded', 'hovered', 'focused', 'loading', 'static']);

export default compose(
  withEvents(inputSet),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, inputAttrs)),
)(Input);
