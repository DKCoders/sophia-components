import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Td from './Td';
import Th from './Th';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';
import { combineSets } from '../utils/helpers';

class Tr extends PureComponent {
  render() {
    const { children, attrs: { className, ...restAttrs } } = this.props;
    return (
      <tr className={`${className || ''}`} {...restAttrs}>
        {children}
      </tr>
    );
  }
}

Tr.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([Td, Th]),
  })).isRequired,
  attrs: PropTypes.shape().isRequired,
};

Tr.defaultProps = {};

export default compose(
  withIsHas(combineSets(helpersIsKeys, ['selected']), helpersHasKeys),
  withAttrs(),
)(Tr);
