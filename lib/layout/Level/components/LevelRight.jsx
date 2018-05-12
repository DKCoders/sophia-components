import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

class LevelRight extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (<div className={classNameJoiner('level-right', className)} {...restAttrs}>{children}</div>);
  }
}

LevelRight.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

LevelRight.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(LevelRight);
