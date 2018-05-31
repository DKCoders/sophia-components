import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, aAttrs, inputAttrs } from '../base/withAttrs';
import withIsProcessor, { buttonIsKeys, buttonHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import Icon from './Icon';

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
  onClick,
  attrs,
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
        onClick={onClick}
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
        onClick={onClick}
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
      onClick={onClick}
    >
      {children}
    </MappedComponent>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(['button', 'a', 'input', 'span']),
  onClick: PropTypes.func,
  attrs: PropTypes.shape().isRequired,
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
  onClick: null,
  icon: null,
  iconSize: null,
  iconPosition: 'left',
};

export default compose(
  withIsProcessor(buttonIsKeys, buttonHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs, inputAttrs)),
)(Button);
