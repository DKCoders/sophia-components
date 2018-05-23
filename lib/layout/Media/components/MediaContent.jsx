import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const MediaContent = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('media-content', className)} {...restAttrs}>{children}</div>);

MediaContent.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

MediaContent.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(MediaContent);
