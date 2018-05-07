/* eslint-disable no-param-reassign,import/prefer-default-export,no-confusing-arrow */
// Convert props to the is-key className
export const isProcessor = (keys, {
  is,
  className: original,
  ...restProps
}) => {
  const className = (typeof original === 'string') ? original.split(' ') : [...original];
  const freeProps = Object.keys(restProps).reduce((acum, key) => {
    if (!keys.includes(key)) {
      return { ...acum, [key]: restProps[key] };
    }
    return acum;
  }, {});
  if (is && is.length) {
    const set = new Set([...className, ...is]);
    return { className: [...set], props: freeProps };
  }
  const filtered = keys.filter(item => restProps[item]);
  if (filtered.length) {
    const set = new Set([...className, ...filtered.map(item => `is-${item}`)]);
    return { className: [...set], props: freeProps };
  }
  return { className, props: freeProps };
};

export const combineSets = (...sets) => {
  const combined = sets.reduce((acum, set) => [...acum, ...set], []);
  return [...(new Set(combined))];
};
