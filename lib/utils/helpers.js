/* eslint-disable no-param-reassign,import/prefer-default-export,no-confusing-arrow */
export const keyProcessor = (prefix, prefixKey, keys, props) => {
  if (prefix && prefix.length) {
    const set = new Set([...prefix.map(item => `${prefixKey}-${item}`)]);
    return [...set];
  }
  const filtered = keys.filter(item => props[item]);
  if (filtered.length) {
    const set = new Set([...filtered.map(item => `${prefixKey}-${item}`)]);
    return [...set];
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
  return [...(new Set(combined))];
};
