import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, selectAttrs } from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys, colorsStateKeys, sizeKeys } from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets, propsSegregator } from '../utils/helpers';

const processOptions = (options) => {
  if (!options) {
    return options;
  }
  if (Array.isArray(options)) {
    return options.map((option) => {
      if (typeof option === 'string') {
        return <option key={option} value={option}>{option}</option>;
      }
      if (Array.isArray(option)) {
        return <option key={option[0] || option[1]} value={option[0]}>{option[1]}</option>;
      }
      return (
        <option key={option.value || option.label} value={option.value}>{option.label}</option>
      );
    });
  }
  return Object.entries(options).map(([value, label]) => (
    <option key={value || label} value={value}>{label}</option>
  ));
};

class Select extends PureComponent {
  render() {
    const {
      attrs: { className, ...restAttrs },
      events,
      multiple,
      children,
      options,
      noSelectedLabel,
    } = this.props;
    const classNameProp = !multiple
      ? classNameJoiner('select', className)
      : classNameJoiner('select', 'is-multiple', className);
    const { defaultAttrs: defaultProps, selectAttrs: selectProps } =
      propsSegregator(restAttrs, { defaultAttrs, selectAttrs });
    const optionItems = children || processOptions(options);
    const noSelectedOption = !noSelectedLabel ? null : (
      <option>{noSelectedLabel}</option>
    );
    return (
      <div className={classNameProp} {...defaultProps}>
        <select multiple={multiple} {...events} {...selectProps}>
          {noSelectedOption}
          {optionItems}
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
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })),
    PropTypes.shape(),
  ]),
  noSelectedLabel: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  options: null,
  multiple: false,
  noSelectedLabel: null,
};

const isKeys = combineSets(
  helpersIsKeys.filter(key => key !== 'size'),
  colorsStateKeys,
  sizeKeys,
  ['rounded', 'hovered', 'focused', 'loading'],
);

export default compose(
  withEvents(inputSet),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, selectAttrs)),
)(Select);
