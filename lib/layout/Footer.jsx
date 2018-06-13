import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Footer = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<footer className={classNameJoiner('footer', className)} {...restAttrs} {...events}>{children}</footer>);


Footer.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Footer.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Footer);
