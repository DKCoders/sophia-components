import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';

class ProgressBar extends PureComponent {
  render() {
    const { value, max, attrs: { className, ...restAttrs } } = this.props;
    return (
      <progress className={`progress ${className || ''}`} {...restAttrs} value={value} max={max}>
        {value}%
      </progress>
    );
  }
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  attrs: PropTypes.shape().isRequired,
};

ProgressBar.defaultProps = {
  max: 100,
};

export default compose(
  withIsHas(combineSets(helpersIsKeys, colorsStateKeys, sizeKeys), helpersHasKeys),
  withAttrs(),
)(ProgressBar);
