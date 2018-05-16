import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, selectAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets } from '../utils/helpers';

class Select extends PureComponent {
  render() {
    const {
      attrs: { className, ...restAttrs }, events, multiple, children,
    } = this.props;
    const classNameProp = !multiple
      ? classNameJoiner('select', className)
      : classNameJoiner('select', 'is-multiple', className);
    const { defaultAttrs: defaultProps, selectAttrs: selectProps } = Object.entries(restAttrs)
      .reduce((acum, [key, value]) => {
        if (defaultAttrs.includes(key)) {
          return { ...acum, defaultAttrs: { ...acum.defaultAttrs, [key]: value } };
        }
        if (selectAttrs.includes(key)) {
          return { ...acum, selectAttrs: { ...acum.selectAttrs, [key]: value } };
        }
        return acum;
      }, { defaultAttrs: {}, selectAttrs: {} });
    return (
      <div className={classNameProp} {...defaultProps}>
        <select multiple={multiple} {...events} {...selectProps}>
          {children}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
  multiple: PropTypes.bool,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.shape(),
  ]),
};

Select.defaultProps = {
  children: null,
  options: null,
  multiple: false,
};

const isKeys = combineSets(helpersIsKeys, colorsStateKeys, sizeKeys, ['rounded', 'hovered', 'focused', 'loading']);

export default compose(
  withEvents(inputSet),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, selectAttrs)),
)(Select);
