import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import { Ripple, RippleProps } from './Ripple';

export interface IRippleActions {
  start: (event: React.SyntheticEvent) => void;
  stop: (event: React.SyntheticEvent) => void;
}

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.15;
  }

  100% {
    transform: scale(4);
    opacity: 0.25;
  }
`;

const RippleRoot = styled.span`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;

  span.ripple {
    overflow: hidden;
    position: absolute;
    border-radius: 50%;
    opacity: 0.25;
    transform: scale(4);
    animation: ${rippleAnimation} 1000ms ease-out;
    background-color: currentColor;
  }
`;

const getRippleStyle = (
  event: React.SyntheticEvent,
  parent: HTMLSpanElement
): RippleProps['style'] => {
  const parentRect = parent.getBoundingClientRect();
  const diameter = Math.max(parentRect.width, parentRect.height);
  const radius = diameter / 2;

  const { clientX, clientY } = event as React.MouseEvent;

  const left = (clientX || 0) - parentRect.left - radius;
  const top = (clientY || 0) - parentRect.top - radius;

  return {
    width: diameter,
    height: diameter,
    left,
    top,
  };
};

export const RippleGroup = React.forwardRef<IRippleActions>((props, ref) => {
  const [ripples, setRipples] = React.useState<React.ReactNode[]>([]);

  const container = React.useRef<HTMLSpanElement>(null);

  const nextKey = React.useRef(0);

  const start = React.useCallback<IRippleActions['start']>(event => {
    if (container.current) {
      const rippleProps: RippleProps = {
        style: getRippleStyle(event, container.current),
      };

      setRipples(oldRipples => [
        ...oldRipples,
        <Ripple key={nextKey.current} {...rippleProps} />,
      ]);

      nextKey.current += 1;
    }
  }, []);

  const stop = React.useCallback<IRippleActions['stop']>(() => {
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
  }, []);

  React.useImperativeHandle(
    ref,
    () => ({
      start,
      stop,
    }),
    [start, stop]
  );

  return (
    <RippleRoot ref={container}>
      <AnimatePresence>
        {!!ripples.length && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {ripples}
          </motion.div>
        )}
      </AnimatePresence>
    </RippleRoot>
  );
});
