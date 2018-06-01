import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsKeys, colorsStateKeys, sizeKeys } from '../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../utils/helpers';
import MessageHeader from './components/MessageHeader';
import MessageBody from './components/MessageBody';

const Message = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  onDeleteClick,
  header,
  body,
}) => {
  const headerElement = children || !header ? null : (
    <MessageHeader onDeleteClick={onDeleteClick}>{header}</MessageHeader>
  );
  const bodyElement = children || <MessageBody>{body}</MessageBody>;
  return (
    <article className={classNameJoiner('message', className)} {...restAttrs} {...events}>
      {headerElement}
      {bodyElement}
    </article>
  );
};

Message.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  header: PropTypes.node,
  body: PropTypes.node,
  onDeleteClick: PropTypes.func,
};

Message.defaultProps = {
  children: null,
  header: null,
  body: null,
  onDeleteClick: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, colorsKeys, colorsStateKeys, sizeKeys), helpersHasKeys),
  withAttrs(),
)(Message);
