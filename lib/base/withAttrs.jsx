/* eslint-disable no-confusing-arrow */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const mappedAttrs = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  style: PropTypes.shape(),
  disabled: PropTypes.bool,
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
  disabled: dummyConverter,
  name: dummyConverter,
  title: dummyConverter,
  href: dummyConverter,
  role: dummyConverter,
  target: dummyConverter,
  type: dummyConverter,
  value: dummyConverter,
};

const acceptedAttrs = Object.keys(converterAttrs);
export const defaultAttrs = ['id', 'className', 'style'];
export const allAttrs = [...acceptedAttrs];
export const aAttrs = ['href', 'target', 'title', 'name'];
export const inputAttrs = ['name', 'type', 'value', 'disabled'];
export const attrSets = {
  defaultAttrs,
  aAttrs,
  inputAttrs,
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
  return (Component) => {
    class WithAttr extends PureComponent {
      render() {
        const propsToBePassed = Object.entries(this.props).reduce((acum, [key, value]) => {
          if (attrs.includes(key)) {
            const converted = converterAttrs[key](value);
            if (skipNulls && !converted) {
              return acum;
            }
            return { ...acum, attrs: { ...acum.attrs, [key]: converted } };
          }
          return { ...acum, [key]: value };
        }, { attrs: {} });
        return <Component {...propsToBePassed} />;
      }
    }
    const attrPropTypes = attrs.reduce((acum, key) => ({ ...acum, [key]: mappedAttrs[key] }), {});
    WithAttr.propTypes = {
      ...Component.propTypes,
      ...attrPropTypes,
    };
    const attrDefaults = attrs.reduce((acum, key) => ({ ...acum, [key]: null }), {});
    WithAttr.defaultProps = {
      ...Component.defaultProps,
      ...attrDefaults,
    };
    WithAttr.displayName = Component.displayName || Component.name;
    return WithAttr;
  };
};

export default withAttrs;
