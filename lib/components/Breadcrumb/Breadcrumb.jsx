/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withIsHas, { aligmentKeys, helpersHasKeys, helpersIsKeys, sizeKeys } from '../../base/withIsHas';
import withAttrs from '../../base/withAttrs';
import { combineSets, classNameJoiner } from '../../utils/helpers';
import BreadcrumbItem from './components/BreadcrumbItem';
import Icon from '../../elements/Icon';

class Breadcrumb extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.buildItems = this.buildItems.bind(this);
  }

  onClick(index, event) {
    event.preventDefault();
    const { items, onItemClick } = this.props;
    if (onItemClick) {
      onItemClick(index, items[index], event);
    }
  }

  buildItems() {
    const { items, activeIndex } = this.props;
    if (!items || !items.length) {
      return null;
    }
    return items.map((item, index) => {
      const active = activeIndex || activeIndex === 0
        ? activeIndex === index
        : index === items.length - 1;
      const label = typeof item === 'string' ? item : item.label;
      const icon = typeof item === 'string'
        ? null
        : typeof item.icon === 'string'
          ? <Icon small icon={item.icon} />
          : item.icon;
      return (
        <BreadcrumbItem key={label} index={index} onClick={this.onClick} active={active}>
          {icon}
          {label}
        </BreadcrumbItem>
      );
    });
  }

  render() {
    const {
      attrs: { className, ...restAttrs },
      children,
    } = this.props;
    const itemsComponents = children || this.buildItems();
    return (
      <nav className={classNameJoiner('breadcrumb', className)} aria-label="breadcrumbs" {...restAttrs}>
        <ul>
          {itemsComponents}
        </ul>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  attrs: PropTypes.shape().isRequired,
  onItemClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      label: PropTypes.string.isRequired,
    }),
  ])),
  activeIndex: PropTypes.number,
};

Breadcrumb.defaultProps = {
  onItemClick: null,
  index: null,
  items: null,
  children: null,
  activeIndex: null,
};

const hasKeys = combineSets(helpersHasKeys, ['arrowSeparator', 'bulletSeparator', 'dotSeparator', 'succeedsSeparator']);

export default compose(
  withIsHas(combineSets(helpersIsKeys, aligmentKeys, sizeKeys), hasKeys),
  withAttrs(),
)(Breadcrumb);
