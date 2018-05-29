import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, sizeKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const ModalClose = ({ attrs: { className, ...restAttrs }, events }) => (
  <button className={classNameJoiner('modal-close', className)} {...restAttrs} {...events} />
);

ModalClose.propTypes = {
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

ModalClose.defaultProps = {};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, sizeKeys), helpersHasKeys),
  withAttrs(),
)(ModalClose);
