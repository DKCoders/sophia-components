import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';

const Footer = ({ children, attrs: { className, ...restAttrs } }) =>
  (<footer className={classNameJoiner('footer', className)} {...restAttrs}>{children}</footer>);


Footer.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

Footer.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Footer);
