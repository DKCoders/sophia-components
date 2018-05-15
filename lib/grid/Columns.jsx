import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';

const sizes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

class Columns extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs }, ...restProps } = this.props;
    const sizeClassIndex = sizes.findIndex(size => restProps[size]);
    const sizeClassNameProp = sizeClassIndex !== -1
      ? `is-${sizeClassIndex + 1}`
      : null;
    return (<div className={classNameJoiner('columns', sizeClassNameProp, className)} {...restAttrs}>{children}</div>);
  }
}

Columns.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: PropTypes.bool }), {}),
};

Columns.defaultProps = {
  children: null,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: null }), {}),
};

export default compose(
  withIsHas(combineSets(helpersIsKeys, ['mobile', 'desktop', 'gapless', 'multiline', 'centered']), helpersHasKeys),
  withAttrs(),
)(Columns);
