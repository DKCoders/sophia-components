import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner, propTypeArrayChecker } from '../../utils/helpers';

const Level = ({ children, attrs: { className, ...restAttrs } }) =>
  (<nav className={classNameJoiner('level', className)} {...restAttrs}>{children}</nav>);

const possibleTypes = ['LevelLeft', 'LevelRight'];

Level.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(propTypeArrayChecker(possibleTypes)),
  ]),
  attrs: PropTypes.shape().isRequired,
};

Level.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Level);
