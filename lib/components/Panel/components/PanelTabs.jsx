/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';
import PanelTabsItem from './PanelTabsItem';

const PanelTabs = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  tabs,
  onTabClick,
  activeTabIndex,
}) => {
  const elements = children || tabs.map((tab, index) => (
    <PanelTabsItem key={index} data={index} onClick={onTabClick} active={activeTabIndex === index}>
      {tab}
    </PanelTabsItem>
  ));
  return (
    <p className={classNameJoiner('panel-tabs', className)} {...restAttrs} {...events}>
      {elements}
    </p>
  );
};

PanelTabs.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  tabs: PropTypes.arrayOf(PropTypes.node),
  onTabClick: PropTypes.func,
  activeTabIndex: PropTypes.number,
};

PanelTabs.defaultProps = {
  children: null,
  onTabClick: null,
  activeTabIndex: null,
  tabs: [],
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(PanelTabs);
