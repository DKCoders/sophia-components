import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { combineSets } from '../utils/helpers';

export const clipboard = ['onCopy', 'onCut', 'onPaste'];
export const composition = ['onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate'];
export const keyboard = ['onKeyDown', 'onKeyPress', 'onKeyUp'];
export const focus = ['onFocus', 'onBlur'];
export const form = ['onChange', 'onInput', 'onInvalid', 'onSubmit'];
export const mouseBasic = ['onClick'];
export const mouse = ['onClick', 'onDoubleClick', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp'];
export const drag = ['onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop'];
export const selection = ['onSelect'];
export const touch = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];
export const ui = ['onScroll'];
export const wheel = ['onWheel'];
export const media = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];
export const image = ['onLoad', 'onError'];
export const animation = ['onAnimationStart', 'onAnimationEnd', 'onAnimationIteration'];
export const transition = ['onTransitionEnd'];
export const other = ['onToggle'];

export const inputSet = combineSets(
  mouse,
  form,
  keyboard,
  clipboard,
);

export const all = combineSets(
  clipboard,
  composition,
  keyboard,
  focus,
  form,
  mouseBasic,
  mouse,
  drag,
  selection,
  touch,
  ui,
  wheel,
  media,
  image,
  animation,
  transition,
  other,
);

const withEvents = (events = mouseBasic, skipNulls = true) => (Component) => {
  class WithEvents extends PureComponent {
    render() {
      const propsToBePassed = Object.entries(this.props).reduce((acum, [key, value]) => {
        if (events.includes(key)) {
          if (skipNulls && !value) {
            return acum;
          }
          return { ...acum, events: { ...acum.events, [key]: value } };
        }
        return { ...acum, [key]: value };
      }, { events: {} });
      return <Component {...propsToBePassed} />;
    }
  }

  const { events: removedPropType, ...restPropTypes } = Component.propTypes;
  WithEvents.propTypes = {
    ...restPropTypes,
    ...events.reduce((acum, event) => ({ ...acum, [event]: PropTypes.func }), {}),
  };

  WithEvents.defaultProps = {
    ...Component.defaultProps,
    ...events.reduce((acum, event) => ({ ...acum, [event]: null }), {}),
  };

  WithEvents.displayName = Component.displayName || Component.name;

  return WithEvents;
};

export default withEvents;
