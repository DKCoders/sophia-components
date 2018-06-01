import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, {helpersIsKeys, helpersHasKeys, colorsStateKeys, colorsKeys} from '../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../utils/helpers';

const Navbar = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <nav className={classNameJoiner('navbar', className)} {...restAttrs} {...events} aria-label="main navigation">
    {children}
  </nav>
);

Navbar.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Navbar.defaultProps = {
  children: null,
};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, colorsKeys, ['transparent', 'fixedTop', 'fixedBottom']);

export default compose(
  withEvents(),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(),
)(Navbar);
