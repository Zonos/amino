import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { Ripple, type RippleProps } from 'src/components/button/_Ripple';
import type { Color } from 'src/types/Color';
import { getAminoColor } from 'src/utils/getAminoColor';

import styles from './RippleGroup.module.scss';

export type RippleActions = {
  start: (event: React.SyntheticEvent) => void;
};

const getRippleStyle = (
  event: React.SyntheticEvent,
  parent: HTMLSpanElement,
): RippleProps['rippleStyle'] => {
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
  style?: React.CSSProperties;
};

export const RippleGroup = React.forwardRef<RippleActions, RippleGroupProps>(
  ({ color, duration = 200, opacity = 0.12, style }, ref) => {
    const [ripples, setRipples] = React.useState<RippleItem[]>([]);

    const container = React.useRef<HTMLSpanElement>(null);

    const removeRipple = () => setRipples(oldRipples => oldRipples.slice(1));

    const start = React.useCallback<RippleActions['start']>(
      event => {
        if (container.current) {
          const rippleProps: RippleProps = {
            className: styles.ripple,
            destroy: removeRipple,
            duration,
            rippleStyle: getRippleStyle(event, container.current),
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
      <span
        ref={container}
        className={styles.rippleRoot}
        style={{
          ...style,
          '--amino-ripple-group-color': getAminoColor(color) || 'currentColor',
          '--amino-ripple-group-duration': `${Math.max(duration, 600)}ms`,
          '--amino-ripple-group-opacity': opacity,
        }}
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
      </span>
    );
  },
);
