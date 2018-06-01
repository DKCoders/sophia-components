import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const NavbarMenu = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <div className={classNameJoiner('navbar-menu', className)} {...restAttrs} {...events}>
    {children}
  </div>
);

NavbarMenu.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

NavbarMenu.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(),
)(NavbarMenu);
