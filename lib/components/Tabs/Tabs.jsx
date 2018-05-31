/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../base/withEvents';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, aligmentKeys, sizeKeys } from '../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../utils/helpers';
import TabItem from './components/TabItem';

const Tabs = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  tabs,
  onTabClick,
  activeTabIndex,
}) => {
  const elements = children || tabs.map((tab, index) => {
    if (typeof tab === 'object' && tab.tab) {
      return (
        <TabItem
          key={index}
          data={tab.data || index}
          onClick={onTabClick}
          active={activeTabIndex === index}
          icon={tab.icon}
          iconSize={tab.iconSize}
          iconPosition={tab.iconPosition}
        >
          {tab.tab}
        </TabItem>
      );
    }
    return (
      <TabItem key={index} data={index} onClick={onTabClick} active={activeTabIndex === index}>
        {tab}
      </TabItem>
    );
  });
  return (
    <div className={classNameJoiner('tabs', className)} {...restAttrs} {...events}>
      <ul>
        {elements}
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  tabs: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape(),
  ])),
  onTabClick: PropTypes.func,
  activeTabIndex: PropTypes.number,
};

Tabs.defaultProps = {
  children: null,
  onTabClick: null,
  activeTabIndex: null,
  tabs: [],
};

const isKeys = combineSets(helpersIsKeys, aligmentKeys, sizeKeys, ['boxed', 'toggle', 'toggleRounded', 'fullwidth']);

export default compose(
  withEvents(),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(),
)(Tabs);
