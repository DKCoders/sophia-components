import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, aAttrs, inputAttrs } from '../base/withAttrs';
import withIsProcessor, { buttonIsKeys, buttonHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import Icon from './Icon';
import withEvents, { buttonSet } from '../base/withEvents';

const mappedTag = {
  // eslint-disable-next-line react/prop-types
  button: ({ children, ...props }) => <button {...props}>{children}</button>,
  // eslint-disable-next-line react/prop-types
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  // eslint-disable-next-line react/prop-types
  span: ({ children, ...props }) => <span {...props}>{children}</span>,
  input: props => <input {...props} />,
};

const Button = ({
  children,
  as,
  attrs,
  events,
  icon,
  iconSize,
  iconPosition,
}) => {
  const MappedComponent = mappedTag[as];
  const { className, ...restAttrs } = attrs;
  const classNameProp = classNameJoiner('button', className);
  if (as === 'input') {
    return (
      <MappedComponent
        className={classNameProp}
        {...restAttrs}
        {...events}
        value={children}
      />
    );
  }

  if (icon) {
    const iconProps = !iconSize ? {} : { [iconSize]: true };
    const iconElement = typeof icon !== 'string' ? icon : <Icon icon={icon} {...iconProps} />;
    return (
      <MappedComponent
        className={classNameProp}
        {...restAttrs}
        {...events}
      >
        {iconPosition === 'left' && iconElement}
        {!children ? null : (<span>{children}</span>)}
        {iconPosition === 'right' && iconElement}
      </MappedComponent>
    );
  }

  return (
    <MappedComponent
      className={classNameProp}
      {...restAttrs}
      {...events}
    >
      {children}
    </MappedComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(['button', 'a', 'input', 'span']),
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  iconSize: PropTypes.string,
  iconPosition: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  as: 'button',
  icon: null,
  iconSize: null,
  iconPosition: 'left',
};

export default compose(
  withEvents(buttonSet),
  withIsProcessor(buttonIsKeys, buttonHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs, inputAttrs)),
)(Button);
