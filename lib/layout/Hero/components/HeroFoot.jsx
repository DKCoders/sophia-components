import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const HeroFoot = ({ children, attrs: { className, ...restAttrs } }) =>
  (<div className={classNameJoiner('hero-foot', className)} {...restAttrs}>{children}</div>);

HeroFoot.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

HeroFoot.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(HeroFoot);
