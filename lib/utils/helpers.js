/* eslint-disable no-param-reassign,import/prefer-default-export,no-confusing-arrow */
const decamelize = str => str
  .replace(/[^a-zA-Z0-9]+/g, '-')
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/([0-9])([^0-9])/g, '$1-$2')
  .replace(/([^0-9])([0-9])/g, '$1-$2')
  .replace(/-+/g, '-')
  .toLowerCase();

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

export const classNameJoiner = (...pieces) => pieces.filter(piece => piece).join(' ');

export const propTypeArrayChecker = possibleTypes =>
  (propValue, key, componentName, location, propFullName) => {
    if (!possibleTypes.includes(propValue[key].type.displayName)) {
      return new Error(`Invalid prop \`${propFullName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`);
    }
    return true;
  };
export const propTypeChecker = possibleTypes =>
  (propValue, componentName, location, propFullName) => {
    if (!possibleTypes.includes(propValue.type.displayName)) {
      return new Error(`Invalid prop \`${propFullName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.`);
    }
    return true;
  };
export const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

export const propsSegregator = (props, segregators) => {
  const segKeys = Object.keys(segregators);
  const initialAcum = segKeys.reduce((acum, key) => ({ ...acum, [key]: {} }), {});
  return Object.entries(props)
    .reduce((acum, [key, value]) => {
      // eslint-disable-next-line no-cond-assign
      for (let i = 0, segKey; segKey = segKeys[i]; i += 1) {
        if (segregators[segKey].includes(key)) {
          return { ...acum, [segKey]: { ...acum[segKey], [key]: value } };
        }
      }
      return acum;
    }, initialAcum);
};
