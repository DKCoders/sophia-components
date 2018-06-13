/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsProcessor, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets, classNameJoiner } from '../utils/helpers';
import withEvents from '../base/withEvents';

const mappedTag = {
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
  h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
  h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
  h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
};

const sizes = ['one', 'two', 'three', 'four', 'five', 'six'];

const Title = ({
  children,
  as,
  attrs,
  events,
  ...restProps
}) => {
  const MappedComponent = mappedTag[as];
  const { className, ...restAttrs } = attrs;
  const sizeClassIndex = sizes.findIndex(size => restProps[size]);
  const sizeClassNameProp = sizeClassIndex !== -1
    ? `is-${sizeClassIndex + 1}`
    : null;
  return (
    <MappedComponent
      className={classNameJoiner('title', sizeClassNameProp, className)}
      {...restAttrs}
      {...events}
    >
      {children}
    </MappedComponent>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf([
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: PropTypes.bool }), {}),
};

Title.defaultProps = {
  children: null,
  as: 'h1',
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: false }), {}),
};

export default compose(
  withEvents(),
  withIsProcessor(combineSets(helpersIsKeys, ['spaced']), helpersHasKeys),
  withAttrs(),
)(Title);
