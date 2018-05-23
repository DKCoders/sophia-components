import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Button from './Button';
import withAttrs from '../base/withAttrs';
import withIsHas, { buttonsIsKeys, buttonsHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';

const Buttons = ({ children, attrs: { className, ...restAttrs } }) => (
  <div className={classNameJoiner('buttons', className)} {...restAttrs}>
    {children}
  </div>
);

Buttons.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Button]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
};

Buttons.defaultProps = {};

export default compose(
  withIsHas(buttonsIsKeys, buttonsHasKeys),
  withAttrs(),
)(Buttons);
