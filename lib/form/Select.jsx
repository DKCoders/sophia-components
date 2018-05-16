import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, inputAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Select extends PureComponent {
  render() {
    const { attrs: { className, type, ...restAttrs }, events } = this.props;

    return (
      <input
        className={classNameJoiner('input', className)}
        type={type || 'text'}
        {...events}
        {...restAttrs}
      />
    );
  }
}

Select.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Select.defaultProps = {};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, sizeKeys, ['rounded', 'hovered', 'focused', 'loading', 'static']);

export default compose(
  withEvents(inputSet),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, inputAttrs)),
)(Select);
