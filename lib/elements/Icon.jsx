import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, sizeKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Icon extends PureComponent {
  render() {
    const { icon, attrs: { className, ...restAttrs } } = this.props;
    return (
      <span className={classNameJoiner('icon', className)} {...restAttrs}>
        <i className={icon} />
      </span>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  attrs: PropTypes.shape().isRequired,
};

Icon.defaultProps = {};

export default compose(
  withIsHas(combineSets(helpersIsKeys, sizeKeys), helpersHasKeys),
  withAttrs(),
)(Icon);
