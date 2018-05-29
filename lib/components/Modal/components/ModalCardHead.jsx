import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import Delete from '../../../elements/Delete';

const ModalCardHead = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  onCloseClick,
}) => {
  const closeButton = !onCloseClick ? null : <Delete onClick={onCloseClick} />;
  return (
    <header className={classNameJoiner('modal-card-head', className)} {...restAttrs} {...events}>
      <p className="modal-card-title">{children}</p>
      {closeButton}
    </header>
  );
};

ModalCardHead.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  onCloseClick: PropTypes.func,
};

ModalCardHead.defaultProps = {
  children: null,
  onCloseClick: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(ModalCardHead);
