/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsProcessor, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets, classNameJoiner } from '../utils/helpers';

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

class Title extends PureComponent {
  render() {
    const {
      children,
      as,
      attrs,
      ...restProps
    } = this.props;
    const Component = mappedTag[as];
    const { className, ...restAttrs } = attrs;
    const sizeClassIndex = sizes.findIndex(size => restProps[size]);
    const sizeClassNameProp = sizeClassIndex !== -1
      ? `is-${sizeClassIndex + 1}`
      : null;
    return (
      <Component
        className={classNameJoiner('title', sizeClassNameProp, className)}
        {...restAttrs}
      >
        {children}
      </Component>
    );
  }
}

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
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: PropTypes.bool }), {}),
};

Title.defaultProps = {
  children: null,
  as: 'h1',
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: false }), {}),
};

export default compose(
  withIsProcessor(combineSets(helpersIsKeys, ['spaced']), helpersHasKeys),
  withAttrs(),
)(Title);
