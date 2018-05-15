import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, textAreaAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Textarea extends PureComponent {
  render() {
    const { attrs: { className, ...restAttrs }, events } = this.props;

    return (
      <textarea
        className={classNameJoiner('textarea', className)}
        {...events}
        {...restAttrs}
      />
    );
  }
}

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
