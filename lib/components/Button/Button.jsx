import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content }) => (
  <button>Hi {content}</button>
);

Button.propTypes = {
  content: PropTypes.string,
};

Button.defaultProps = {
  content: '',
};

export default Button;
