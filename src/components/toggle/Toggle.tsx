import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import type { SelectOption } from 'src/types/SelectOption';

import styles from './Toggle.module.scss';

const getIntermediateRect = (start: DOMRect, end: DOMRect) => {
  // Left to right
  if (start.left < end.left) {
    return {
      left: start.left,
      width: end.right - start.left,
    };
  }

  // Right to left
  return {
    left: end.left,
    width: start.right - end.left,
  };
};

const getAnimationRect = (
  wrapperRect: DOMRect | null,
  newRect: DOMRect | null,
  previousRect: DOMRect | null,
): IAnimationRect => {
  if (!newRect || !wrapperRect) {
    return {
      finalLeft: 0,
      finalWidth: 0,
      intermediateLeft: 0,
      intermediateWidth: 0,
    };
  }

  // Right to left or left to right
  const { left: intermediateLeft, width: intermediateWidth } =
    getIntermediateRect(previousRect || newRect, newRect);

  const finalWidth = newRect.width;
  const finalLeft = newRect.left - wrapperRect.left;

  return {
    finalLeft,
    finalWidth,
    intermediateLeft: intermediateLeft - wrapperRect.left,
    intermediateWidth,
  };
};

type IAnimationRect = {
  finalLeft: number;
  finalWidth: number;
  intermediateLeft: number;
  intermediateWidth: number;
};

export type ToggleProps<TValue extends string | number = string> = {
  className?: string;
  options: SelectOption<TValue>[];
  value: TValue;
  onChange: (value: TValue) => void;
};

export const Toggle = <TValue extends string | number>({
  className,
  onChange,
  options,
  value,
}: ToggleProps<TValue>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  const [previousRect, setPreviousRect] = useState<DOMRect | null>(null);
  const [animationRect, setAnimationRect] = useState<IAnimationRect>({
    finalLeft: 0,
    finalWidth: 0,
    intermediateLeft: 0,
    intermediateWidth: 0,
  });

  useEffect(() => {
    const nextAnimationRect = getAnimationRect(
      wrapperRef.current?.getBoundingClientRect() || null,
      selectedRef.current?.getBoundingClientRect() || null,
      previousRect,
    );
    setAnimationRect(nextAnimationRect);
    setPreviousRect(selectedRef.current?.getBoundingClientRect() || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={styles.shrinkWrapper}>
      <div ref={wrapperRef} className={styles.wrapper}>
        <motion.div
          animate={{
            width: [animationRect.intermediateWidth, animationRect.finalWidth],
            x: [animationRect.intermediateLeft, animationRect.finalLeft],
          }}
          className={styles.selectedSlider}
          initial={false}
          transition={{ bounce: 0, duration: 0.2, stiffness: 100 }}
        />
        {options.map(option => (
          <button
            key={option.value}
            ref={option.value === value ? selectedRef : null}
            className={clsx([
              styles.optionWrapper,
              className,
              option.value === value && styles.selected,
            ])}
            onClick={() => onChange(option.value)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
