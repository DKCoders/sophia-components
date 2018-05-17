import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Icon from '../elements/Icon';
import withAttrs, { defaultAttrs, inputAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import withEvents from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Control extends PureComponent {
  render() {
    const {
      attrs: { className, ...restAttrs },
      events,
      children,
      iconLeft,
      iconLeftSize,
      iconRight,
      iconRightSize,
    } = this.props;

    const iconLeftProps = !iconLeftSize ? {} : { [iconLeftSize]: true };
    const iconLeftElement = !iconLeft ? null : (
      <Icon icon={iconLeft} {...iconLeftProps} />
    );
    const iconLeftClassName = !iconLeftElement || (typeof className === 'string' && className.includes('has-icons-left'))
      ? null
      : 'has-icons-left';

    const iconRightProps = !iconRightSize ? {} : { [iconRightSize]: true };
    const iconRightElement = !iconRight ? null : (
      <Icon icon={iconRight} {...iconRightProps} />
    );
    const iconRightClassName = !iconRightElement || (typeof className === 'string' && className.includes('has-icons-right'))
      ? null
      : 'has-icons-right';
    return (
      <div className={classNameJoiner('control', className, iconLeftClassName, iconRightClassName)} {...events} {...restAttrs}>
        {children}
        {iconLeftElement}
        {iconRightElement}
      </div>
    );
  }
}

Control.propTypes = {
  children: PropTypes.node,
  iconLeft: PropTypes.string,
  iconLeftSize: PropTypes.string,
  iconRight: PropTypes.string,
  iconRightSize: PropTypes.string,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Control.defaultProps = {
  children: null,
  iconLeft: null,
  iconLeftSize: null,
  iconRight: null,
  iconRightSize: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, combineSets(helpersHasKeys, ['iconsRight', 'iconsLeft'])),
  withAttrs(combineSets(defaultAttrs, inputAttrs)),
)(Control);
