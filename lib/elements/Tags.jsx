import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Tag from './Tag';
import withAttrs from '../base/withAttrs';
import withIsHas, { buttonsIsKeys, buttonsHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';

const Tags = ({ children, attrs: { className, ...restAttrs } }) => (
  <div className={classNameJoiner('tags', className)} {...restAttrs}>
    {children}
  </div>
);

Tags.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Tag]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
};

Tags.defaultProps = {};

export default compose(
  withIsHas(buttonsIsKeys, buttonsHasKeys),
  withAttrs(),
)(Tags);
