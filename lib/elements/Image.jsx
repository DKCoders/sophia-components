/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withAttrs from '../base/withAttrs';
import withIsHas, { helpersIsKeys, helpersHasKeys } from '../base/withIsHas';

class Image extends PureComponent {
  render() {
    const {
      src,
      alt,
      imgClassName,
      attrs: { className, ...restAttrs },
      square,
      ratio,
    } = this.props;
    const squareParsed = !square
      ? ''
      : square.length > 3
        ? `is-${square}`
        : `is-${square}x${square}`;
    const ratioParsed = !ratio
      ? ''
      : `is-${ratio}`;
    return (
      <figure className={`image ${squareParsed} ${ratioParsed} ${className || ''}`} {...restAttrs}>
        <img src={src} alt={alt} className={imgClassName} />
      </figure>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imgClassName: PropTypes.string,
  attrs: PropTypes.shape().isRequired,
  square: PropTypes.oneOf([
    '16x16',
    '24x24',
    '32x32',
    '48x48',
    '64x64',
    '96x96',
    '128x128',
    '16',
    '24',
    '32',
    '48',
    '64',
    '96',
    '128',
  ]),
  ratio: PropTypes.oneOf([
    'square',
    '1by1',
    '5by4',
    '4by3',
    '3by2',
    '5by3',
    '16by9',
    '2by1',
    '3by1',
    '4by5',
    '3by4',
    '2by3',
    '3by5',
    '9by16',
    '1by2',
    '1by3',
  ]),
};

Image.defaultProps = {
  square: '',
  ratio: '',
  imgClassName: null,
};

export default compose(
  withIsHas(helpersIsKeys, helpersHasKeys),
  withAttrs(),
)(Image);
