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
};

const dummyConverter = val => val;

const converterAttrs = {
  id: dummyConverter,
  className: val => (typeof val === 'string') ? val : val.join(' '),
  style: dummyConverter,
};

const acceptedAttrs = ['id', 'className', 'style'];
export const defaultAttrs = ['id', 'className', 'style'];

export default (attrs = defaultAttrs) => {
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
            return { ...acum, [key]: converterAttrs[key](value) };
          }
          return { ...acum, [key]: value };
        }, {});
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
    return WithAttr;
  };
};
