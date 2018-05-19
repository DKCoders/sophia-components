import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withIsHas, { helpersHasKeys, helpersIsKeys } from '../../../base/withIsHas';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import { combineSets, propsSegregator } from '../../../utils/helpers';

class BreadcrumbItem extends PureComponent {
  constructor() {
    super();
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(event) {
    const { events: { onClick }, index } = this.props;
    if (onClick) {
      onClick(index, event);
    }
  }

  render() {
    const {
      attrs: { className, href, ...restAttrs },
      events: { onClick, ...restEvents },
      children,
    } = this.props;
    const onItemClick = !onClick ? null : this.onItemClick;
    const { defaultAttrs: defaultProps, aAttrs: aProps } =
      propsSegregator(restAttrs, { defaultAttrs, aAttrs });
    return (
      <li
        role="presentation"
        onClick={onItemClick}
        className={className}
        {...defaultProps}
        {...restEvents}
      >
        <a href={href || '#'} {...aProps}>{children}</a>
      </li>
    );
  }
}

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

BreadcrumbItem.defaultProps = {
  index: null,
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(BreadcrumbItem);
