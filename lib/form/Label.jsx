import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, labelAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Label extends PureComponent {
  render() {
    const { attrs: { className, ...restAttrs }, events, children } = this.props;

    return (
      <label className={classNameJoiner('label', className)} {...restAttrs} {...events}>
        {children}
      </label>
    );
  }
}

Label.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Label.defaultProps = {
  children: null,
};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, sizeKeys);

export default compose(
  withEvents(),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, labelAttrs)),
)(Label);
