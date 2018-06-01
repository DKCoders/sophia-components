import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import Delete from '../../../elements/Delete';

const MessageHeader = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  onDeleteClick,
}) => {
  const deleteButton = !onDeleteClick ? null : <Delete onClick={onDeleteClick} />;
  return (
    <div className={classNameJoiner('message-header', className)} {...restAttrs} {...events}>
      <p>{children}</p>
      {deleteButton}
    </div>
  );
};

MessageHeader.propTypes = {
  children: PropTypes.node,
  onDeleteClick: PropTypes.func,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

MessageHeader.defaultProps = {
  children: null,
  onDeleteClick: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(MessageHeader);
