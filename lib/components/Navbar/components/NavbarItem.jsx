import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withEvents from '../../../base/withEvents';
import withAttrs, { aAttrs, defaultAttrs } from '../../../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../../../base/withIsHas';
import { classNameJoiner, combineSets } from '../../../utils/helpers';

const mappedTag = {
  // eslint-disable-next-line react/prop-types
  a: ({ children, ...props }) => <a {...props}>{children}</a>,
  // eslint-disable-next-line react/prop-types
  div: ({ children, ...props }) => <div {...props}>{children}</div>,
};

const NavbarItem = ({
  children,
  attrs: { className, ...restAttrs },
  events,
  as,
  dropdown,
  link,
  boxed,
}) => {
  if (dropdown) {
    const boxedClass = !boxed ? null : 'is-boxed';
    return (
      <div className={classNameJoiner('navbar-item has-dropdown', className)}>
        <a className="navbar-link" {...events} {...restAttrs}>
          {link}
        </a>

        <div className={classNameJoiner('navbar-dropdown', boxedClass)}>
          {children}
        </div>
      </div>
    );
  }
  const Element = mappedTag[as];
  return (
    <Element
      className={classNameJoiner('navbar-item', className)}
      {...restAttrs}
      {...events}
    >
      {children}
    </Element>
  );
};

NavbarItem.propTypes = {
  dropdown: PropTypes.bool,
  link: PropTypes.node,
  boxed: PropTypes.bool,
  as: PropTypes.oneOf(['a', 'div']),
  children: PropTypes.node,
  attrs: PropTypes.shape().isRequired,
  events: PropTypes.shape().isRequired,
};

NavbarItem.defaultProps = {
  children: null,
  as: 'a',
  dropdown: false,
  link: null,
  boxed: false,
};

const isSets = combineSets(helpersIsKeys, ['hoverable', 'active', 'right', 'left', 'expanded']);

export default compose(
  withEvents(),
  withIsHas(isSets, combineSets(helpersHasKeys, 'dropdownUp')),
  withAttrs(combineSets(defaultAttrs, aAttrs)),
)(NavbarItem);
