import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, textAreaAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

const Textarea = ({ attrs: { className, ...restAttrs }, events }) => (
  <textarea
    className={classNameJoiner('textarea', className)}
    {...events}
    {...restAttrs}
  />
);

Textarea.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Textarea.defaultProps = {};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, sizeKeys, ['rounded', 'hovered', 'focused', 'loading']);

export default compose(
  withEvents(inputSet),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, textAreaAttrs)),
)(Textarea);
