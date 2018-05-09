import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Button from './Button';
import withAttrs from '../base/withAttrs';
import withIsHas, { buttonsIsKeys, buttonsHasKeys } from '../base/withIsHas';

class Buttons extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (
      <div className={`buttons ${className || ''}`} {...restAttrs}>
        {children}
      </div>
    );
  }
}

Buttons.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Button]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
};

Buttons.defaultProps = {};

export default compose(
  withIsHas(buttonsIsKeys, buttonsHasKeys),
  withAttrs(),
)(Buttons);
