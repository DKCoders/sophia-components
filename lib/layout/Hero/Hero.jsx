import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, colorsKeys, sizeKeys } from '../../base/withIsHas';
import { classNameJoiner, combineSets, propTypeArrayChecker, propTypeChecker } from '../../utils/helpers';
import withEvents from '../../base/withEvents';

const Hero = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<section className={classNameJoiner('hero', className)} {...restAttrs} {...events}>{children}</section>);

const possibleTypes = ['HeroBody', 'HeroHead', 'HeroFoot'];

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.objectOf(propTypeChecker(possibleTypes)),
    PropTypes.arrayOf(propTypeArrayChecker(possibleTypes)),
  ]),
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Hero.defaultProps = {
  children: null,
};

const sets = combineSets(helpersIsKeys, colorsStateKeys, colorsKeys, sizeKeys, ['bold', 'fullheight']);

export default compose(
  withEvents(),
  withIsHas(sets, helpersHasKeys),
  withAttrs(),
)(Hero);
