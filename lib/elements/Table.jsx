import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';

class Th extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (
      <th className={`${className || ''}`} {...restAttrs}>
        {children}
      </th>
    );
  }
}

class Table extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (
      <table className={`table ${className || ''}`} {...restAttrs}>
        {children}
      </table>
    );
  }
}

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.shape()),
  ]),
  attrs: PropTypes.shape().isRequired,
};

Table.defaultProps = {
  children: null,
};

const tableModifiers = [
  'bordered',
  'striped',
  'narrow',
  'hoverable',
  'fullwidth',
];

export default compose(
  withIsHas(combineSets(helpersIsKeys, tableModifiers), helpersHasKeys),
  withAttrs(),
)(Table);
