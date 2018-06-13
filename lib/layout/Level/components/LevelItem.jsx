import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';
import withEvents from '../../../base/withEvents';

const mappedTag = {
  // eslint-disable-next-line react/prop-types
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  // eslint-disable-next-line react/prop-types
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
};

const LevelItem = ({
  children, as, attrs: { className, ...restAttrs }, events,
}) => {
  const Element = mappedTag[as];
  return (
    <Element className={classNameJoiner('level-item', className)} {...restAttrs} {...events}>{children}</Element>
  );
};

LevelItem.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  as: PropTypes.string,
  events: PropTypes.shape().isRequired,
};

LevelItem.defaultProps = {
  children: null,
  as: 'div',
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(LevelItem);
