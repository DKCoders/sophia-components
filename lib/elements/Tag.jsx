/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Delete from './Delete';
import withAttrs, { defaultAttrs, aAttrs } from '../base/withAttrs';
import withIsProcessor, { colorsKeys, colorsStateKeys, helpersHasKeys, helpersIsKeys, sizeKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';

const mappedTag = {
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  span: ({ children, ...props }) => <span {...props}>{children}</span>,
};

const Tag = ({
  children,
  as,
  onDeleteClick,
  attrs,
  events,
}) => {
  const MappedComponent = mappedTag[as];
  const { className, ...restAttrs } = attrs;
  const deleteButton = !onDeleteClick ? null : <Delete onClick={onDeleteClick} />;
  return (
    <MappedComponent
      className={classNameJoiner('tag', className)}
      {...restAttrs}
      {...events}
    >
      {children}
      {deleteButton}
    </MappedComponent>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(['a', 'span']),
  onDeleteClick: PropTypes.func,
  events: PropTypes.shape().isRequired,
  attrs: PropTypes.shape().isRequired,
};

Tag.defaultProps = {
  children: null,
  as: 'span',
  onDeleteClick: null,
};

const isSets = combineSets(helpersIsKeys, colorsKeys, colorsStateKeys, sizeKeys, ['delete', 'rounded']);

export default compose(
  withEvents(),
  withIsProcessor(isSets, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(Tag);
