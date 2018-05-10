import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Th from './Th';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';

class Thead extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (
      <thead className={`${className || ''}`} {...restAttrs}>
        {children}
      </thead>
    );
  }
}

Thead.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Th]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
};

Thead.defaultProps = {};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Thead);
