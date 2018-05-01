import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, id }) => (
  <button>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string,
};

Button.defaultProps = {
  content: '',
};

export default Button;
