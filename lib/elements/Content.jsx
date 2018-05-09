import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';

class Content extends PureComponent {
  render() {
    const { children, attrs: { className, restAttr }, onClick } = this.props;
    return (<div className={`content ${className || ''}`} onClick={onClick} {...restAttr}>{children}</div>);
  }
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  attrs: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

Content.defaultProps = {
  children: null,
  onClick: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Content);
