import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { labelAttrs, checkboxAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets, propsSegregator } from '../utils/helpers';

class Checkbox extends PureComponent {
  render() {
    const {
      attrs: { className, ...restAttrs },
      events,
      label,
    } = this.props;
    const { labelAttrs: defaultProps, checkboxAttrs: checkboxProps } =
      propsSegregator(restAttrs, { labelAttrs, checkboxAttrs });
    if (checkboxProps.disabled) {
      defaultProps.disabled = true;
    }
    return (
      <label className={classNameJoiner('checkbox', className)} {...defaultProps}>
        <input type="checkbox" {...events} {...checkboxProps} />
        {label}
      </label>
    );
  }
}

Checkbox.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: null,
};

export default compose(
  withEvents(inputSet),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(labelAttrs, checkboxAttrs)),
)(Checkbox);
