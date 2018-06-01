import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner, propTypeArrayChecker, propTypeChecker } from '../../utils/helpers';

const Media = ({ children, attrs: { className, ...restAttrs } }) =>
  (<article className={classNameJoiner('media', className)} {...restAttrs}>{children}</article>);

const possibleTypes = ['MediaRight', 'MediaLeft', 'MediaContent'];

Media.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(propTypeChecker(possibleTypes)),
    PropTypes.arrayOf(propTypeArrayChecker(possibleTypes)),
  ]),
  attrs: PropTypes.shape().isRequired,
};

Media.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Media);
