import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';

const Container = ({ children, attrs: { className, ...restAttrs }, events }) =>
  (<div className={classNameJoiner('container', className)} {...restAttrs} {...events}>{children}</div>);

Container.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

Container.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['fluid', 'widescreen', 'fullhd']), helpersHasKeys),
  withAttrs(),
)(Container);
