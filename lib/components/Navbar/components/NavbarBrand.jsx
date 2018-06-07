import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import NavbarBurger from './NavbarBurger';

const NavbarBrand = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  onBurgerClick,
  burgerActive,
}) => {
  const burger = !onBurgerClick
    ? null
    : <NavbarBurger active={burgerActive} onClick={onBurgerClick} />;
  return (
    <div className={classNameJoiner('navbar-brand', className)} {...restAttrs} {...events}>
      {children}
      {burger}
    </div>
  );
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  onBurgerClick: PropTypes.func,
  burgerActive: PropTypes.bool,
};

NavbarBrand.defaultProps = {
  children: null,
  onBurgerClick: null,
  burgerActive: false,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(NavbarBrand);
