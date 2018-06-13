import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import withEvents from '../../../base/withEvents';

const MediaLeft = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<figure className={classNameJoiner('media-left', className)} {...restAttrs} {...events}>{children}</figure>);

MediaLeft.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

MediaLeft.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(MediaLeft);
