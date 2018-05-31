import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../utils/helpers';
import ModalContent from './components/ModalContent';
import ModalBackground from './components/ModalBackground';
import ModalClose from './components/ModalClose';
import ModalCard from './components/ModalCard';
import ModalCardHead from './components/ModalCardHead';
import ModalCardBody from './components/ModalCardBody';
import ModalCardFoot from './components/ModalCardFoot';

const constructCard = (card, onCloseClick) => {
  if (card.head || card.body || card.foot) {
    return (
      <ModalCard>
        <ModalCardHead onCloseClick={onCloseClick}>{card.head}</ModalCardHead>
        <ModalCardBody>{card.body}</ModalCardBody>
        <ModalCardFoot>{card.foot}</ModalCardFoot>
      </ModalCard>
    );
  }
  return (
    <ModalCard>
      {card}
    </ModalCard>
  );
};

const getContentElement = (content, card, onCloseClick) =>
  (card ? constructCard(card, onCloseClick) : (
    <ModalContent>
      {content}
    </ModalContent>
  ));

const Modal = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  withOverlay,
  onOverlayClick,
  onCloseClick,
  content,
  card,
}) => {
  const overlay = !withOverlay && !onOverlayClick ? null : (
    <ModalBackground onClick={onOverlayClick} />
  );
  const closeButton = !onCloseClick || (card && card.head)
    ? null
    : <ModalClose onClick={onCloseClick} />;
  const contentElement = children || getContentElement(content, card, onCloseClick);
  return (
    <div className={classNameJoiner('modal', className)} {...restAttrs} {...events}>
      {overlay}
      {contentElement}
      {closeButton}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  card: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      head: PropTypes.node,
      body: PropTypes.node,
      foot: PropTypes.node,
    }),
  ]),
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  withOverlay: PropTypes.bool,
  onOverlayClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  content: null,
  card: null,
  withOverlay: false,
  onOverlayClick: null,
  onCloseClick: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(),
)(Modal);
