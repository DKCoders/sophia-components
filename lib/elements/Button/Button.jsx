import React from 'react';
import PropTypes from 'prop-types';

const mappedTag = {
  // eslint-disable-next-line react/prop-types
  button: ({ children, ...props }) => <button {...props}>{children}</button>,
  // eslint-disable-next-line react/prop-types
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  input: props => <input {...props} />,
};

const Button = ({
  children,
  as,
  className,
  onClick,
  ...props
}) => {
  const Component = mappedTag[as];
  const classNameProp = !className ? 'button' : `button ${className}`;
  return as === 'input' ? (
    <Component
      className={classNameProp}
      {...props}
      onClick={onClick}
      value={children}
    />
  ) : (
    <Component
      className={classNameProp}
      {...props}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  as: PropTypes.oneOf(['button', 'a', 'input']),
  href: PropTypes.string,
  target: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  as: 'button',
  href: null,
  target: null,
  name: null,
  title: null,
  className: null,
  onClick: null,
};

export default Button;
