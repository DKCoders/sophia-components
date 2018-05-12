import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

class MediaLeft extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (<figure className={classNameJoiner('media-left', className)} {...restAttrs}>{children}</figure>);
  }
}

MediaLeft.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

MediaLeft.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(MediaLeft);
