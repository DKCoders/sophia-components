import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../base/withIsHas';
import { classNameJoiner } from '../../utils/helpers';

class Level extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (<nav className={classNameJoiner('level', className)} {...restAttrs}>{children}</nav>);
  }
}

const possibleTypes = ['LevelLeft', 'LevelRight'];

Level.propTypes = {
  children: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
    if (!possibleTypes.includes(propValue[key].type.displayName)) {
      return new Error(`Invalid prop \`${propFullName}\` supplied to` +
      ` \`${componentName}\`. Validation failed.`);
    }
    return true;
  }),
  attrs: PropTypes.shape().isRequired,
};

Level.defaultProps = {
  children: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Level);
