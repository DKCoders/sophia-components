import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner } from '../../../utils/helpers';

class CardFooter extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs }, events } = this.props;
    return (
      <footer className={classNameJoiner('card-footer', className)} {...restAttrs} {...events}>
        {children}
      </footer>
    );
  }
}

CardFooter.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

CardFooter.defaultProps = {
  children: null,
};

export default compose(
  withEvents(),
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(CardFooter);
