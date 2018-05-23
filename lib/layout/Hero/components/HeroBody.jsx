import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const HeroBody = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('hero-body', className)} {...restAttrs}>{children}</div>);

HeroBody.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

HeroBody.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(HeroBody);
