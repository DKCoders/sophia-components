import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, labelAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys, colorsKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Help extends PureComponent {
  render() {
    const { attrs: { className, ...restAttrs }, events, children } = this.props;

    return (
      <p className={classNameJoiner('help', className)} {...restAttrs} {...events}>
        {children}
      </p>
    );
  }
}

Help.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Help.defaultProps = {
  children: null,
};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, colorsKeys, sizeKeys);

export default compose(
  withEvents(),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, labelAttrs)),
)(Help);
