import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import type { SelectOption } from 'src/types/SelectOption';

import styles from './Toggle.module.scss';

const getAnimationRect = (
  wrapperRect: DOMRect | null,
  newRect: DOMRect | null,
): IAnimationRect => {
  if (!newRect || !wrapperRect) {
    return {
      left: 0,
      width: 0,
    };
  }

  const { width } = newRect;
  const left = newRect.left - wrapperRect.left;

  return {
    left,
    width,
  };
};

type IAnimationRect = {
  left: number;
  width: number;
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

  const [animationRect, setAnimationRect] = useState<IAnimationRect>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const nextAnimationRect = getAnimationRect(
      wrapperRef.current?.getBoundingClientRect() || null,
      selectedRef.current?.getBoundingClientRect() || null,
    );
    setAnimationRect(nextAnimationRect);
  }, [value]);

  return (
    <div className={styles.shrinkWrapper}>
      <div ref={wrapperRef} className={styles.wrapper}>
        <motion.div
          animate={{
            width: animationRect.width,
            x: animationRect.left,
          }}
          className={styles.selectedSlider}
          initial={false}
          transition={{
            duration: 0.2,
          }}
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
