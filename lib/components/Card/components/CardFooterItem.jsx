import React, { PureComponent } from 'react';
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
  p: ({ children, ...props }) => <span {...props}>{children}</span>,
};


class CardFooterItem extends PureComponent {
  render() {
    const {
      as,
      children,
      attrs: { className, ...restAttrs },
      events,
    } = this.props;
    const Component = mappedTag[as];
    return (
      <Component className={classNameJoiner('card-footer-item', className)} {...restAttrs} {...events}>
        {children}
      </Component>
    );
  }
}

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
