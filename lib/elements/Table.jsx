import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents from '../base/withEvents';
import Tbody from './Tbody';
import Thead from './Thead';
import Tfoot from './Tfoot';
import Th from './Th';
import Tr from './Tr';
import Td from './Td';

const Table = ({ children, attrs: { className, ...restAttrs }, events }) => (
  <table className={classNameJoiner('table', className)} {...restAttrs} {...events}>
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
  events: PropTypes.shape().isRequired,
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

export {
  Tbody,
  Thead,
  Tfoot,
  Th,
  Tr,
  Td,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, tableModifiers), helpersHasKeys),
  withAttrs(),
)(Table);
