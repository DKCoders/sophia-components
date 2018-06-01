import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

const NavbarDivider = ({ attrs: { className, ...restAttrs }, events }) => (
  <hr className={classNameJoiner('navbar-divider', className)} {...restAttrs} {...events} />
);

NavbarDivider.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

NavbarDivider.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(NavbarDivider);
