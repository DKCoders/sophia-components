import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

class HeroBody extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (<div className={classNameJoiner('hero-body', className)} {...restAttrs}>{children}</div>);
  }
}

HeroBody.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
};

HeroBody.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(HeroBody);
