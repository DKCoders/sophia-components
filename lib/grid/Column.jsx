import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, {
  helpersIsKeys,
  helpersHasKeys,
  columnSizesIsKeys, columnOffsetIsKeys,
} from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';

const sizes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
const offsetSizes = [...sizes];

class Column extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs }, ...restProps } = this.props;
    //TODO handler multiple string sizes values
    const sizeClassIndex = sizes.findIndex(size => restProps[size]);
    const sizeClassNameProp = sizeClassIndex !== -1
      ? `is-${sizeClassIndex + 1}${typeof restProps[sizeClassIndex] === 'string' ? `-${restProps[sizeClassIndex]}` : ''}`
      : null;
    //TODO handler multiple string sizes values
    const offsetSizeClassIndex = sizes.findIndex(size => restProps[size]);
    const offsetSizeClassNameProp = offsetSizeClassIndex !== -1
      ? `is-offset-${sizeClassIndex + 1}${typeof restProps[offsetSizeClassIndex] === 'string' ? `-${restProps[offsetSizeClassIndex]}` : ''}`
      : null;
    return (<div className={classNameJoiner('column', offsetSizeClassNameProp, sizeClassNameProp, className)} {...restAttrs}>{children}</div>);
  }
}

Column.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  ...sizes.reduce((acum, size) => ({
    ...acum,
    [size]: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }), {}),
  ...offsetSizes.reduce((acum, size) => ({
    ...acum,
    [size]: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }), {}),
};

Column.defaultProps = {
  children: null,
  ...sizes.reduce((acum, size) => ({ ...acum, [size]: null }), {}),
  ...offsetSizes.reduce((acum, size) => ({ ...acum, [size]: null }), {}),
};

const sets = combineSets(helpersIsKeys, columnSizesIsKeys, columnOffsetIsKeys, ['narrow']);

export default compose(
  withIsHas(sets, helpersHasKeys),
  withAttrs(),
)(Column);
