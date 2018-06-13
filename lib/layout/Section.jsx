import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Section = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<section className={classNameJoiner('section', className)} {...restAttrs} {...events}>{children}</section>);

Section.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Section.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['medium', 'large']), helpersHasKeys),
  withAttrs(),
)(Section);
