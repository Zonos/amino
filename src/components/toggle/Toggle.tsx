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
    /**
     * Function called when a toggle option is selected
     */
    onChange: (value: TValue) => void;
    /**
     * Array of options to display in the toggle
     */
    options: SelectOption<TValue>[];
    /**
     * Size of the toggle component
     * @default 'sm'
     */
    size?: Size;
    /**
     * Currently selected value
     */
    value: TValue;
  };

/**
 * Toggle component provides a segmented control for switching between multiple options.
 * It features an animated highlight that moves to indicate the selected option.
 *
 * @example Basic usage with two options
 * ```tsx
 * const [selected, setSelected] = useState('option1');
 *
 * <Toggle
 *   options={[
 *     { label: 'Option 1', value: 'option1' },
 *     { label: 'Option 2', value: 'option2' }
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 *
 * @example Multiple options
 * ```tsx
 * const [view, setView] = useState('day');
 *
 * <Toggle
 *   options={[
 *     { label: 'Day', value: 'day' },
 *     { label: 'Week', value: 'week' },
 *     { label: 'Month', value: 'month' },
 *     { label: 'Year', value: 'year' }
 *   ]}
 *   value={view}
 *   onChange={setView}
 * />
 * ```
 *
 * @example Full width
 * ```tsx
 * <Toggle
 *   fullWidth
 *   options={[
 *     { label: 'Left', value: 'left' },
 *     { label: 'Center', value: 'center' },
 *     { label: 'Right', value: 'right' }
 *   ]}
 *   value={alignment}
 *   onChange={setAlignment}
 * />
 * ```
 *
 * @example Different sizes
 * ```tsx
 * <VStack spacing={16}>
 *   <Toggle
 *     size="xs"
 *     options={options}
 *     value={selected}
 *     onChange={setSelected}
 *   />
 *   <Toggle
 *     size="sm"
 *     options={options}
 *     value={selected}
 *     onChange={setSelected}
 *   />
 *   <Toggle
 *     size="md"
 *     options={options}
 *     value={selected}
 *     onChange={setSelected}
 *   />
 * </VStack>
 * ```
 *
 * @example With type safety using generics
 * ```tsx
 * type ViewMode = 'list' | 'grid' | 'table';
 *
 * const [viewMode, setViewMode] = useState<ViewMode>('list');
 * const options: SelectOption<ViewMode>[] = [
 *   { label: 'List', value: 'list' },
 *   { label: 'Grid', value: 'grid' },
 *   { label: 'Table', value: 'table' }
 * ];
 *
 * <Toggle<ViewMode>
 *   options={options}
 *   value={viewMode}
 *   onChange={setViewMode}
 * />
 * ```
 */
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
