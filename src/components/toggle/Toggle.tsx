import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption, SelectValue } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';

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

export type ToggleProps<TValue extends SelectValue = SelectValue> =
  BaseProps & {
    /**
     * If true, the toggle will take up the full width of its parent.
     * @default false
     */
    fullWidth?: boolean;
    onChange: (value: TValue) => void;
    options: SelectOption<TValue>[];
    /**
     * @default 'sm'
     */
    size?: Size;
    value: TValue;
  };

export const Toggle = <TValue extends SelectValue>({
  className,
  fullWidth = false,
  onChange,
  options,
  size = 'sm',
  style,
  value,
}: ToggleProps<TValue>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  const [animationRect, setAnimationRect] = useState<IAnimationRect>({
    left: 0,
    width: 0,
  });

  // This prevents the slider from animating when the component first mounts
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);

  useEffect(() => {
    const nextAnimationRect = getAnimationRect(
      wrapperRef.current?.getBoundingClientRect() || null,
      selectedRef.current?.getBoundingClientRect() || null,
    );
    setAnimationRect(nextAnimationRect);
  }, [value, size]);

  return (
    <div
      className={clsx(
        className,
        styles.shrinkWrapper,
        fullWidth && styles.fullWidth,
        size,
      )}
      style={style}
    >
      <div ref={wrapperRef} className={styles.wrapper}>
        <motion.div
          animate={{
            width: animationRect.width,
            x: animationRect.left,
          }}
          className={styles.selectedSlider}
          initial={false}
          onAnimationComplete={() => {
            setFirstAnimationComplete(true);
          }}
          transition={{
            duration: !firstAnimationComplete ? 0 : 0.2,
          }}
        />
        {options.map(option => {
          const isSelected = option.value === value;

          return (
            <button
              key={option.value}
              ref={isSelected ? selectedRef : null}
              className={clsx([
                styles.optionWrapper,
                isSelected && styles.selected,
              ])}
              onClick={() => onChange(option.value)}
              type="button"
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
