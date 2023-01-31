import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Ripple, RippleProps } from './Ripple';

export interface IRippleActions {
  start: (event: React.SyntheticEvent) => void;
  stop: (event: React.SyntheticEvent) => void;
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

const RippleRoot = styled.span<{ $color?: Color; $opacity: number }>`
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
    animation: ${p => rippleAnimation(p.$opacity)} 600ms ease-out;
    background-color: ${p => (p.$color ? theme[p.$color] : 'currentColor')};
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

type RippleItem = {
  element: React.ReactNode;
  key: string;
};

export type RippleGroupProps = {
  /**
   * @default 200 ms
   */
  duration?: number;
  /**
   * @default 0.12
   */
  opacity?: number;
  /**
   * @default 'inherit'
   */
  color?: Color;
};

export const RippleGroup = React.forwardRef<IRippleActions, RippleGroupProps>(
  ({ duration = 200, opacity = 0.12, color }, ref) => {
    const [ripples, setRipples] = React.useState<RippleItem[]>([]);

    const container = React.useRef<HTMLSpanElement>(null);

    const start = React.useCallback<IRippleActions['start']>(
      event => {
        if (container.current) {
          const rippleProps: RippleProps = {
            style: getRippleStyle(event, container.current),
          };

          setRipples(oldRipples => [
            ...oldRipples,
            {
              element: <Ripple {...rippleProps} />,
              key: uuidv4(),
            },
          ]);

          setTimeout(
            () => setRipples(oldRipples => oldRipples.slice(1)),
            duration
          );
        }
      },
      [duration]
    );

    const stop = React.useCallback<IRippleActions['stop']>(() => {}, []);

    React.useImperativeHandle(
      ref,
      () => ({
        start,
        stop,
      }),
      [start, stop]
    );

    return (
      <RippleRoot ref={container} $color={color} $opacity={opacity}>
        <AnimatePresence>
          {ripples.map(r => (
            <motion.div
              key={r.key}
              initial={{ opacity }}
              animate={{ opacity }}
              exit={{ opacity: 0 }}
            >
              {r.element}
            </motion.div>
          ))}
        </AnimatePresence>
      </RippleRoot>
    );
  }
);
