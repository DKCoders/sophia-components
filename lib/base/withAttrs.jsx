/* eslint-disable no-confusing-arrow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const mappedAttrs = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  style: PropTypes.shape(),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
  role: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self', 'blank', 'self']),
  value: PropTypes.any,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  for: PropTypes.string,
  size: PropTypes.string,
  colspan: PropTypes.string,
  headers: PropTypes.string,
  rowspan: PropTypes.string,
  scope: PropTypes.string,
};

const dummyConverter = val => val;
const classNameConverter = (val) => {
  if (typeof val === 'string') {
    return val;
  }
  if (Array.isArray(val) && val.length) {
    return val.join(' ');
  }
  return null;
};

const converterAttrs = {
  id: dummyConverter,
  className: classNameConverter,
  style: dummyConverter,
  for: dummyConverter,
  disabled: dummyConverter,
  checked: dummyConverter,
  readOnly: dummyConverter,
  name: dummyConverter,
  title: dummyConverter,
  href: dummyConverter,
  role: dummyConverter,
  target: dummyConverter,
  type: dummyConverter,
  placeholder: dummyConverter,
  rows: dummyConverter,
  size: dummyConverter,
  value: dummyConverter,
  colspan: dummyConverter,
  headers: dummyConverter,
  rowspan: dummyConverter,
  scope: dummyConverter,
};

const acceptedAttrs = Object.keys(converterAttrs);
export const defaultAttrs = ['id', 'className', 'style', 'role'];
export const labelAttrs = [...defaultAttrs, 'for'];
export const allAttrs = [...acceptedAttrs];
export const aAttrs = ['href', 'target', 'title', 'name'];
export const inputAttrs = ['name', 'type', 'value', 'disabled', 'placeholder', 'readOnly'];
export const checkboxAttrs = ['name', 'checked', 'disabled', 'placeholder', 'readOnly'];
export const radioAttrs = ['name', 'value', 'checked', 'disabled', 'placeholder', 'readOnly'];
export const fileAttrs = ['name', 'value', 'disabled', 'readOnly'];
export const textAreaAttrs = ['name', 'value', 'disabled', 'placeholder', 'readOnly', 'rows'];
export const selectAttrs = ['name', 'value', 'disabled', 'placeholder', 'readOnly', 'size'];
export const tdAttrs = ['colspan', 'headers', 'rowspan', 'scope'];
export const attrSets = {
  defaultAttrs,
  aAttrs,
  inputAttrs,
  tdAttrs,
  allAttrs,
};

const withAttrs = (attrs = defaultAttrs, skipNulls = true) => {
  // Validations and warnings
  if (!attrs.length) {
    console.warn('At least one attribute must be passed');
  }
  attrs.forEach((attr, index) => {
    if (typeof attr !== 'string') {
      console.warn('Invalid attribute at array index', index);
    }
  });
  const invalidAttrs = attrs.reduce(
    (acum, attr) => acceptedAttrs.includes(attr) ? acum : [...acum, attr],
    [],
  );
  if (invalidAttrs.length) {
    console.warn('Invalid attributes: ', invalidAttrs.join(', '));
  }
  return (InnerComponent) => {
    class WithAttr extends Component {
      render() {
        const propsToBePassed = Object.entries(this.props).reduce((acum, [key, value]) => {
          if (attrs.includes(key)) {
            const converted = converterAttrs[key](value);
            if (skipNulls && (converted === null || converted === undefined)) {
              return acum;
            }
            return { ...acum, attrs: { ...acum.attrs, [key]: converted } };
          }
          return { ...acum, [key]: value };
        }, { attrs: {} });
        return <InnerComponent {...propsToBePassed} />;
      }
    }
    const attrPropTypes = attrs.reduce((acum, key) => ({ ...acum, [key]: mappedAttrs[key] }), {});
    if (!InnerComponent.propTypes) {
      // eslint-disable-next-line no-param-reassign
      InnerComponent.propTypes = {};
    }
    const { attrs: removedPropType, ...restPropTypes } = InnerComponent.propTypes;
    WithAttr.propTypes = {
      ...restPropTypes,
      ...attrPropTypes,
    };
    const attrDefaults = attrs.reduce((acum, key) => ({ ...acum, [key]: null }), {});
    WithAttr.defaultProps = {
      ...InnerComponent.defaultProps,
      ...attrDefaults,
    };
    WithAttr.displayName = InnerComponent.displayName || InnerComponent.name;
    return WithAttr;
  };
};

export default withAttrs;
