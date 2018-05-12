import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import LevelItem from './LevelItem';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

class LevelLeft extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (<div className={classNameJoiner('level-left', className)} {...restAttrs}>{children}</div>);
  }
}

LevelLeft.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      type: LevelItem,
    })),
    PropTypes.shape({
      type: LevelItem,
    }),
  ]),
  attrs: PropTypes.shape().isRequired,
};

LevelLeft.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(LevelLeft);
