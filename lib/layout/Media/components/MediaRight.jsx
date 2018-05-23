import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const MediaRight = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('media-right', className)} {...restAttrs}>{children}</div>);

MediaRight.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

MediaRight.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(MediaRight);
