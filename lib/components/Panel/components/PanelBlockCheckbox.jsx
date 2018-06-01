/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { labelAttrs, checkboxAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import withEvents, { inputSet } from '../../../base/withEvents';
import { classNameJoiner, combineSets, propsSegregator } from '../../../utils/helpers';

const PanelBlockCheckbox = ({
  attrs: { className, ...restAttrs },
  events,
  children,
}) => {
  const { labelAttrs: defaultProps, checkboxAttrs: checkboxProps } =
    propsSegregator(restAttrs, { labelAttrs, checkboxAttrs });
  if (checkboxProps.disabled) {
    defaultProps.disabled = true;
  }
  return (
    <label className={classNameJoiner('panel-block', className)} {...defaultProps}>
      <input type="checkbox" {...events} {...checkboxProps} />
      {children}
    </label>
  );
};

PanelBlockCheckbox.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  children: PropTypes.string,
};

PanelBlockCheckbox.defaultProps = {
  children: null,
};

export default compose(
  withEvents(inputSet),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(labelAttrs, checkboxAttrs)),
)(PanelBlockCheckbox);
