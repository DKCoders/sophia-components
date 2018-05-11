/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Delete from './Delete';
import withAttrs, { defaultAttrs, aAttrs } from '../base/withAttrs';
import withIsProcessor, { colorsKeys, colorsStateKeys, helpersHasKeys, helpersIsKeys, sizeKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';

const mappedTag = {
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  span: ({ children, ...props }) => <span {...props}>{children}</span>,
};

const Tag = ({
  children,
  as,
  onClick,
  onDeleteClick,
  attrs,
}) => {
  const Component = mappedTag[as];
  const { className, ...restAttrs } = attrs;
  const deleteButton = !onDeleteClick ? null : <Delete onClick={onDeleteClick} />;
  return (
    <Component
      className={classNameJoiner('tag', className)}
      {...restAttrs}
      onClick={onClick}
    >
      {children}
      {deleteButton}
    </Component>
  );
};

Tag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  as: PropTypes.oneOf(['a', 'span']),
  onClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  attrs: PropTypes.shape().isRequired,
};

Tag.defaultProps = {
  children: null,
  as: 'span',
  onClick: null,
  onDeleteClick: null,
};

const isSets = combineSets(helpersIsKeys, colorsKeys, colorsStateKeys, sizeKeys, ['delete', 'rounded']);

export default compose(
  withIsProcessor(isSets, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(Tag);
