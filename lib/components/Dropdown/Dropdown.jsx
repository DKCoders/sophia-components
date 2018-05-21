/* eslint-disable no-nested-ternary,react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../utils/helpers';
import DropdownTrigger from './components/DropdownTrigger';
import DropdownMenu from './components/DropdownMenu';
import DropdownItem from './components/DropdownItem';
import DropdownDivider from './components/DropdownDivider';

class Dropdown extends Component {
  constructor(props) {
    super();
    this.props = props;
    if (this.props.active === null && this.props.hoverable === null) {
      this.state = { active: false, wrapperRef: null };
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    if (this.props.active === null && this.props.hoverable === null) {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }

  componentWillUnmount() {
    if (this.props.active === null && this.props.hoverable === null) {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    if (this.state) {
      this.setState({ wrapperRef: node });
    }
  }

  setActive() {
    this.setState({ active: true });
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.state.wrapperRef && !this.state.wrapperRef.contains(event.target)) {
      this.setState({ active: false });
    }
  }

  render() {
    const {
      children,
      attrs: { className, ...restAttrs },
      events,
      active,
      hoverable,
      onTriggerClick,
    } = this.props;
    if (!children) {
      const { trigger, items } = this.props;
      const onClickTrigger = !this.state ? onTriggerClick : this.setActive;
      const triggerElement = typeof trigger === 'string' ? (
        <DropdownTrigger onClick={onClickTrigger} label={trigger} />
      ) : (
        <DropdownTrigger onClick={onClickTrigger} label={trigger.label} icon={trigger.icon} />
      );
      const itemElements = !items || !items.length ? null
        : items.map((item, index) => {
          const type = item.type || 'a';
          return type === 'divider'
            ? (
              <DropdownDivider key={index} />
            ) : type === 'a'
              ? (
                <DropdownItem key={index} active={item.active} href={item.href || '#'} as={type} onClick={item.onClick}>
                  {item.content}
                </DropdownItem>
              ) : (
                <DropdownItem key={index} active={item.active} as={type} onClick={item.onClick}>
                  {item.content}
                </DropdownItem>
              );
        });
      const activeState = !this.state ? active : this.state.active;
      const activeClass = activeState ? 'is-active' : false;
      const hoverableClass = hoverable ? 'is-hoverable' : false;
      return (
        <div ref={this.setWrapperRef} className={classNameJoiner('dropdown', className, activeClass, hoverableClass)} {...restAttrs} {...events}>
          {triggerElement}
          <DropdownMenu>
            {itemElements}
          </DropdownMenu>
        </div>
      );
    }
    return (
      <div className={classNameJoiner('dropdown', className)} {...restAttrs} {...events}>
        {children}
      </div>
    );
  }
}

Dropdown.propTypes = {
  active: PropTypes.bool,
  hoverable: PropTypes.bool,
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func,
    content: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.oneOf(['a', 'div', 'divider']),
    active: PropTypes.bool,
  })),
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
    }),
  ]),
  onTriggerClick: PropTypes.func,
};

Dropdown.defaultProps = {
  active: null,
  hoverable: null,
  children: null,
  items: null,
  trigger: null,
  onTriggerClick: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['right', 'up']), helpersHasKeys),
  withAttrs(),
)(Dropdown);
