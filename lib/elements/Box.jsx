import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';

class Box extends PureComponent {
  render() {
    const { children, attrs: { className, restAttr }, onClick } = this.props;
    return (<div className={`box ${className || ''}`} onClick={onClick} {...restAttr}>{children}</div>);
  }
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  attrs: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  children: null,
  onClick: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Box);
