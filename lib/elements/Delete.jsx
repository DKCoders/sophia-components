import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, aAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, sizeKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';
import withEvents, { buttonSet } from '../base/withEvents';

const Delete = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  ...restProps
}) => (
  <a
    className={classNameJoiner('delete', className)}
    {...restAttrs}
    {...events}
    {...restProps}
  >
    {children}
  </a>);

Delete.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
};

Delete.defaultProps = {
  children: null,
  onClick: null,
  onKeyDown: null,
  onKeyPress: null,
  onKeyUp: null,
};

export default compose(
  withEvents(buttonSet),
  withIsHas(combineSets(helpersIsKeys, sizeKeys), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(Delete);
