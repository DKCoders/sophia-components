import React, { PureComponent } from 'react';

const defaultAttrs = {

};

export default (attrs = defaultAttrs) => (Component) => {
  class WithAttr extends PureComponent {
    render() {
      return <Component {...this.props} />;
    }
  }
  WithAttr.propTypes = {
    ...Component.propTypes,
  };
  return WithAttr;
};
