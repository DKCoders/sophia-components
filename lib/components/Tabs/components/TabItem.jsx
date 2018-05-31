/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { combineSets } from '../../../utils/helpers';
import Icon from '../../../elements/Icon';

class TabItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    const { events: { onClick }, children, data } = this.props;
    if (onClick) {
      ev.preventDefault();
      onClick(data, children, ev);
    }
  }

  render() {
    const {
      children,
      attrs: { className, ...restAttrs },
      events: { onClick, ...restEvents },
      icon,
      iconSize,
      iconPosition,
    } = this.props;

    if (icon) {
      const iconProps = !iconSize ? {} : { [iconSize]: true };
      const iconElement = typeof icon !== 'string' ? icon : <Icon icon={icon} {...iconProps} />;
      return (
        <li className={className}>
          <a {...restAttrs} {...restEvents} onClick={this.handleClick}>
            {iconPosition === 'left' && iconElement}
            {!children ? null : (<span>{children}</span>)}
            {iconPosition === 'right' && iconElement}
          </a>
        </li>
      );
    }

    return (
      <li className={className}>
        <a {...restAttrs} {...restEvents} onClick={this.handleClick}>
          {children}
        </a>
      </li>
    );
  }
}

TabItem.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  iconSize: PropTypes.string,
  iconPosition: PropTypes.string,
};

TabItem.defaultProps = {
  children: null,
  data: null,
  icon: null,
  iconSize: null,
  iconPosition: 'left',
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(TabItem);
