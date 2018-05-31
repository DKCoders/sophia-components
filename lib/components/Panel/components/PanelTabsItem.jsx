/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { combineSets } from '../../../utils/helpers';

class PanelTabsItem extends Component {
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
    } = this.props;
    return (
      <a className={className} {...restAttrs} {...restEvents} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

PanelTabsItem.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.any,
};

PanelTabsItem.defaultProps = {
  children: null,
  data: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(PanelTabsItem);
