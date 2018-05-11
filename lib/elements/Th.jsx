import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, tdAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';

class Th extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs }, onClick } = this.props;
    return (
      <th className={`${className || ''}`} {...restAttrs} onClick={onClick}>
        {children}
      </th>
    );
  }
}

Th.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  attrs: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
};

Th.defaultProps = {
  children: '',
  onClick: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, tdAttrs)),
)(Th);
