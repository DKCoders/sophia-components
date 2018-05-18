import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { labelAttrs, radioAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets, propsSegregator } from '../utils/helpers';

class Radio extends PureComponent {
  render() {
    const {
      attrs: { className, ...restAttrs },
      events,
      label,
    } = this.props;
    const { labelAttrs: defaultProps, radioAttrs: radioProps } =
      propsSegregator(restAttrs, { labelAttrs, radioAttrs });
    if (radioProps.disabled) {
      defaultProps.disabled = true;
    }
    return (
      <label className={classNameJoiner('checkbox', className)} {...defaultProps}>
        <input type="radio" {...events} {...radioProps} />
        {label}
      </label>
    );
  }
}

Radio.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  label: PropTypes.string,
};

Radio.defaultProps = {
  label: null,
};

export default compose(
  withEvents(inputSet),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(labelAttrs, radioAttrs)),
)(Radio);
