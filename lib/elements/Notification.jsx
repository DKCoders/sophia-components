import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Delete from './Delete';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys } from '../base/withIsHas';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Notification extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs }, onDeleteClick } = this.props;
    const deleteButton = !onDeleteClick ? null : <Delete onClick={onDeleteClick} />;
    return (
      <div className={classNameJoiner('notification', className)} {...restAttrs}>
        {deleteButton}
        {children}
      </div>
    );
  }
}

Notification.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  onDeleteClick: PropTypes.func,
};

Notification.defaultProps = {
  children: null,
  onDeleteClick: null,
};

export default compose(
  withIsHas(combineSets(helpersIsKeys, colorsStateKeys), helpersHasKeys),
  withAttrs(),
)(Notification);
