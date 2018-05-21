import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

class DropdownMenu extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs }, events } = this.props;
    return (
      <div role="menu" className={classNameJoiner('dropdown-menu', className)} {...restAttrs} {...events}>
        <div className="dropdown-content">
          {children}
        </div>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

DropdownMenu.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(DropdownMenu);
