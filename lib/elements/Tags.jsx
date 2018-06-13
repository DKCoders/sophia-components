import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Tag from './Tag';
import withAttrs from '../base/withAttrs';
import withIsHas, { buttonsIsKeys, buttonsHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Tags = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <div className={classNameJoiner('tags', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

Tags.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Tag]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Tags.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(buttonsIsKeys, buttonsHasKeys),
  withAttrs(),
)(Tags);
