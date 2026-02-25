import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption, SelectValue } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';
import { cn } from 'src/utils/cn';

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
     * If true, the toggle will be disabled
     * @default false
     */
    isDisabled?: boolean;
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
  isDisabled = false,
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
      className={cn(
        'inline-flex',
        fullWidth && 'w-full',
        isDisabled && 'opacity-60',
        className,
      )}
      style={style}
    >
      <div
        ref={wrapperRef}
        className={cn(
          'relative rounded-md h-8 flex',
          'bg-[rgba(5,10,40,0.06)] dark:bg-[rgba(220,225,255,0.1)]',
        )}
      >
        <motion.div
          animate={{
            width: animationRect.width,
            x: animationRect.left,
          }}
          className={cn(
            'z-[1] absolute bg-raised h-full mt-[1px] h-[30px] rounded-md',
            'shadow-[var(--amino-shadow-raised-standard)]',
          )}
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
              className={cn(
                'z-[2] gap-[6px] flex text-center justify-center cursor-pointer rounded-md',
                'text-amino-base font-medium text-text-color-secondary',
                'focus:outline-none',
                !isSelected && 'hover:text-text-color',
                isSelected && 'text-text-color',
                size === 'sm' && 'py-[6px] px-3',
                size === 'md' && 'py-[10px] px-3',
                size === 'lg' && 'py-[14px] px-[14px]',
                size === 'xl' && 'py-[18px] px-4',
                fullWidth && 'flex-grow',
                isDisabled && 'cursor-not-allowed',
              )}
              disabled={isDisabled}
              onClick={() => {
                onChange(option.value);
              }}
              type="button"
            >
              {option.icon && (
                <div className="[&,&_svg]:max-h-full [&,&_svg]:w-auto">
                  {option.icon}
                </div>
              )}
              <div>{option.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
