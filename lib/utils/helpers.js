/* eslint-disable no-param-reassign,import/prefer-default-export,no-confusing-arrow */
import decamelize from 'decamelize';

const getClassString = ({ item, prefix, value }) => {
  if (Array.isArray(value)) {
    return value
      .reduce((acum, val) => [...acum, ...getClassString({ item, prefix, value: val })], []);
  }
  const additionalStr = typeof value === 'string' ? `-${value}` : '';
  return [`${prefix}-${decamelize(item, '-')}${additionalStr}`];
};

const getUniqueValuesArray = array => [...new Set(array)];

export const keyProcessor = (prefix, prefixKey, keys, props) => {
  if (prefix && prefix.length) {
    return getUniqueValuesArray(prefix.map(item => `${prefixKey}-${item}`));
  }
  const filtered = keys.filter(item => props[item]);
  if (filtered.length) {
    const classArray = filtered.reduce((acum, item) => {
      const value = props[item];
      return [...acum, ...getClassString({ item, prefix: prefixKey, value })];
    }, []);
    return getUniqueValuesArray(classArray);
  }
  return [];
};
// Convert props to the is-key className
export const processor = (isKeys, hasKeys, {
  is,
  has,
  className: original,
  ...restProps
}) => {
  const className = (typeof original === 'string') ? original.split(' ') : [...original];
  const freeProps = Object.keys(restProps).reduce((acum, key) => {
    if (!isKeys.includes(key) && !hasKeys.includes(key)) {
      return { ...acum, [key]: restProps[key] };
    }
    return acum;
  }, {});
  const isClasses = keyProcessor(is, 'is', isKeys, restProps);
  const hasClasses = keyProcessor(has, 'has', hasKeys, restProps);
  const classNameUniques = new Set([...className, ...isClasses, ...hasClasses]);
  return { className: [...classNameUniques], props: freeProps };
};

export const combineSets = (...sets) => {
  const combined = sets.reduce((acum, set) => [...acum, ...set], []);
  return [...new Set(combined)];
};
