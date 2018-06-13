import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import withEvents from '../../../base/withEvents';

const MediaRight = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<div className={classNameJoiner('media-right', className)} {...restAttrs} {...events}>{children}</div>);

MediaRight.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

MediaRight.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(MediaRight);
