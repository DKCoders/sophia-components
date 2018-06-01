import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import Button from '../../../elements/Button';

const DropdownTrigger = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  icon,
  label,
}) => {
  const trigger = children || (
  <Button icon={icon} iconPosition="right">{label}</Button>
  );
  return (
    <div className={classNameJoiner('dropdown-trigger', className)} {...restAttrs} {...events}>
      {trigger}
    </div>
  );
};

DropdownTrigger.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  label: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

DropdownTrigger.defaultProps = {
  children: null,
  label: null,
  icon: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(DropdownTrigger);
