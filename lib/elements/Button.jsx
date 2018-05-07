import React from 'react';
import PropTypes from 'prop-types';
import withAttrs, { defaultAttrs, aAttrs, inputAttrs } from '../base/withAttrs';
import withIsProcessor, { buttonKeys } from '../base/withIsProcessor';
import { combineSets } from '../utils/helpers';

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
}) => {
  const Component = mappedTag[as];
  const { className, ...restAttrs } = attrs;
  const classNameProp = !className ? 'button' : `button ${className}`;
  return as === 'input' ? (
    <Component
      className={classNameProp}
      {...restAttrs}
      onClick={onClick}
      value={children}
    />
  ) : (
    <Component
      className={classNameProp}
      {...restAttrs}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape()),
  ),
  as: PropTypes.oneOf(['button', 'a', 'input', 'span']),
  onClick: PropTypes.func,
  attrs: PropTypes.shape().isRequired,
};

Button.defaultProps = {
  children: null,
  as: 'button',
  onClick: null,
};

export default withIsProcessor(buttonKeys)
  (withAttrs(combineSets(defaultAttrs, aAttrs, inputAttrs))(Button));
