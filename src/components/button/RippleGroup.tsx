import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { theme } from 'src/styles/constants/theme';
import type { Color } from 'src/types';

import { type RippleProps, Ripple } from './_Ripple';

export interface IRippleActions {
  start: (event: React.SyntheticEvent) => void;
}

const rippleAnimation = (opacity: number) => keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(4);
    opacity: ${opacity};
  }
`;

const RippleRoot = styled.span<{
  $color?: Color;
  $duration: number;
  $opacity: number;
}>`
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
    opacity: ${p => p.$opacity};
    transform: scale(4);
    // prettier-ignore
    animation: ${p => rippleAnimation(p.$opacity)}
      max(${p => p.$duration}ms, 600ms) ease-out;
    background-color: ${p => (p.$color ? theme[p.$color] : 'currentColor')};
  }
`;

const getRippleStyle = (
  event: React.SyntheticEvent,
  parent: HTMLSpanElement,
): RippleProps['style'] => {
  const parentRect = parent.getBoundingClientRect();
  const diameter = Math.max(parentRect.width, parentRect.height);
  const radius = diameter / 2;

  const { clientX, clientY } = event as React.MouseEvent;

  const left = (clientX || 0) - parentRect.left - radius;
  const top = (clientY || 0) - parentRect.top - radius;

  return {
    height: diameter,
    left,
    top,
    width: diameter,
  };
};

type RippleItem = {
  element: React.ReactNode;
  key: string;
};

export type RippleGroupProps = {
  /**
   * @default 'inherit'
   */
  color?: Color;
  /**
   * @default 200 ms
   */
  duration?: number;
  /**
   * @default 0.12
   */
  opacity?: number;
};

export const RippleGroup = React.forwardRef<IRippleActions, RippleGroupProps>(
  ({ color, duration = 200, opacity = 0.12 }, ref) => {
    const [ripples, setRipples] = React.useState<RippleItem[]>([]);

    const container = React.useRef<HTMLSpanElement>(null);

    const removeRipple = () => setRipples(oldRipples => oldRipples.slice(1));

    const start = React.useCallback<IRippleActions['start']>(
      event => {
        if (container.current) {
          const rippleProps: RippleProps = {
            destroy: removeRipple,
            duration,
            style: getRippleStyle(event, container.current),
          };

          setRipples(oldRipples => [
            ...oldRipples,
            {
              element: <Ripple {...rippleProps} />,
              key: uuidv4(),
            },
          ]);
        }
      },
      [duration],
    );

    React.useImperativeHandle(
      ref,
      () => ({
        start,
      }),
      [start],
    );

    return (
      <RippleRoot
        ref={container}
        $color={color}
        $duration={duration}
        $opacity={opacity}
      >
        <AnimatePresence>
          {ripples.map(r => (
            <motion.div
              key={r.key}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 1 }}
            >
              {r.element}
            </motion.div>
          ))}
        </AnimatePresence>
      </RippleRoot>
    );
  },
);
