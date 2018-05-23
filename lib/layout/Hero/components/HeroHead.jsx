import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const HeroHead = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('hero-head', className)} {...restAttrs}>{children}</div>);

HeroHead.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

HeroHead.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(HeroHead);
