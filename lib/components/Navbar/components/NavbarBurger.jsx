import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const NavbarBurger = ({ attrs: { className, ...restAttrs }, events }) => (
  <a
    role="button"
    className={classNameJoiner('navbar-burger', className)}
    {...restAttrs}
    {...events}
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

NavbarBurger.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

NavbarBurger.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(),
)(NavbarBurger);
