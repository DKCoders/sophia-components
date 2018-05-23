import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { defaultAttrs, aAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const mappedTag = {
  // eslint-disable-next-line react/prop-types
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  // eslint-disable-next-line react/prop-types
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
};

const DropdownItem = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  as,
}) => {
  const MappedComponent = mappedTag[as];
  return (
    <MappedComponent className={classNameJoiner('dropdown-item', className)} {...restAttrs} {...events}>
      {children}
    </MappedComponent>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  as: PropTypes.oneOf(['div', 'a']),
};

DropdownItem.defaultProps = {
  children: null,
  as: 'a',
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(DropdownItem);
