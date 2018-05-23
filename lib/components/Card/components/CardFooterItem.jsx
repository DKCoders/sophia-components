import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const mappedTag = {
  // eslint-disable-next-line react/prop-types
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  // eslint-disable-next-line react/prop-types
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
};


const CardFooterItem = ({
  as,
  children,
  attrs: { className, ...restAttrs },
  events,
}) => {
  const MappedComponent = mappedTag[as];
  return (
    <MappedComponent className={classNameJoiner('card-footer-item', className)} {...restAttrs} {...events}>
      {children}
    </MappedComponent>
  );
};

CardFooterItem.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(['a', 'p']),
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

CardFooterItem.defaultProps = {
  as: 'a',
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(CardFooterItem);
