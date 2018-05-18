import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs, { defaultAttrs, fileAttrs } from '../base/withAttrs';
import withIsHas, {
  helpersIsKeys,
  helpersHasKeys,
  colorsStateKeys,
  sizeKeys,
  colorsKeys,
  aligmentKeys,
} from '../base/withIsHas';
import withEvents, { inputSet } from '../base/withEvents';
import { classNameJoiner, combineSets, propsSegregator } from '../utils/helpers';

class FileInput extends PureComponent {
  render() {
    const {
      attrs: { className, ...restAttrs },
      events,
      icon,
      label,
      fileName,
    } = this.props;
    const { defaultAttrs: defaultProps, fileAttrs: fileProps } =
      propsSegregator(restAttrs, { defaultAttrs, fileAttrs });
    const iconElement = !icon ? null : (
      <span className="file-icon">
        <i className={icon} />
      </span>
    );
    const labelElement = !label ? null : (
      <span className="file-label">
        {label}
      </span>
    );
    const nameElement = !fileName ? null : (
      <span className="file-name">
        {fileName}
      </span>
    );
    const classNameProp = !fileName
      ? classNameJoiner('file', className)
      : classNameJoiner('file', 'has-name', className);
    return (
      <div className={classNameProp} {...defaultProps}>
        <label className="file-label">
          <input className="file-input" type="file" {...fileProps} {...events} />
          <span className="file-cta">
            {iconElement}
            {labelElement}
          </span>
          {nameElement}
        </label>
      </div>
    );
  }
}

FileInput.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  fileName: PropTypes.string,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

FileInput.defaultProps = {
  icon: null,
  label: null,
  fileName: null,
};

const isKeys = combineSets(
  helpersIsKeys,
  colorsKeys,
  colorsStateKeys,
  sizeKeys,
  aligmentKeys,
  ['fullwidth', 'boxed', 'loading'],
);

export default compose(
  withEvents(inputSet),
  withIsHas(isKeys, helpersHasKeys),
  withAttrs(combineSets(defaultAttrs, fileAttrs)),
)(FileInput);
