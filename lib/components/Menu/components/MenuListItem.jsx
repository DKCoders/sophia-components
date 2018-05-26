import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { combineSets, propsSegregator } from '../../../utils/helpers';

const MenuListItem = ({
  children,
  label,
  subList,
  attrs: { className, ...restAttrs },
  events,
}) => {
  const { defaultAttrs: liProps, aAttrs: aProps } =
    propsSegregator(restAttrs, { defaultAttrs, aAttrs });
  const aLabel = children || label;
  const subListElement = !subList.length ? null : (
    <ul>
      {subList}
    </ul>
  );
  return (
    <li {...liProps}>
      <a className={className} {...aProps} {...events}>{aLabel}</a>
      {subListElement}
    </li>
  );
};

MenuListItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  subList: PropTypes.arrayOf(PropTypes.node),
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

MenuListItem.defaultProps = {
  children: null,
  label: null,
  subList: [],
};

export default compose(
  withEvents(),
  withIsHas(combineSets(helpersIsKeys, ['active']), helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(MenuListItem);
