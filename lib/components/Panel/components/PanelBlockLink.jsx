import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';
import PanelIcon from './PanelIcon';

const PanelBlockLink = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  icon,
}) => {
  const iconElement = !icon ? null : <PanelIcon icon={icon} />;
  return (
    <a className={classNameJoiner('panel-block', className)} {...restAttrs} {...events}>
      {iconElement}
      {children}
    </a>
  );
};

PanelBlockLink.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  icon: PropTypes.string,
};

PanelBlockLink.defaultProps = {
  children: null,
  icon: null,
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(PanelBlockLink);
