import { type ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Radio } from 'src/components/radio/Radio';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './RadioGroup.module.scss';

export type RadioGroupItem<T extends string = string> = {
  /**
   * Text or element to display as the radio option label
   */
  label: ReactNode;
  /**
   * Value associated with this radio option
   */
  value: T;
};

export type RadioGroupProps<T extends string = string> = BaseProps & {
  /**
   * Sets all radio buttons in the group to a disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Value to be pre-selected when the component mounts
   */
  initialValue?: string;
  /**
   * Array of radio options to display
   */
  items: RadioGroupItem<T>[];
  /**
   * Function called when a radio option is selected
   */
  onChange: (newValue: T) => void;
};

/**
 * RadioGroup component provides a group of radio buttons where only one option can be selected at a time.
 * It manages the selection state internally while exposing the selected value through the onChange callback.
 *
 * @example Basic usage
 * ```tsx
 * const [selected, setSelected] = useState('option1');
 *
 * const options = [
 *   { label: 'Option One', value: 'option1' },
 *   { label: 'Option Two', value: 'option2' },
 *   { label: 'Option Three', value: 'option3' }
 * ];
 *
 * <RadioGroup
 *   items={options}
 *   initialValue={selected}
 *   onChange={setSelected}
 * />
 * ```
 *
 * @example With disabled state
 * ```tsx
 * <RadioGroup
 *   items={[
 *     { label: 'Yes', value: 'yes' },
 *     { label: 'No', value: 'no' }
 *   ]}
 *   initialValue="yes"
 *   onChange={handleChange}
 *   disabled={true}
 * />
 * ```
 *
 * @example With custom styled labels
 * ```tsx
 * const customOptions = [
 *   {
 *     label: <span><strong>Business</strong> - For commercial use</span>,
 *     value: 'business'
 *   },
 *   {
 *     label: <span><strong>Personal</strong> - For individual use</span>,
 *     value: 'personal'
 *   }
 * ];
 *
 * <RadioGroup
 *   items={customOptions}
 *   initialValue="business"
 *   onChange={handleAccountTypeChange}
 * />
 * ```
 *
 * @example With type-safe values using generics
 * ```tsx
 * type ShippingMethod = 'standard' | 'express' | 'overnight';
 *
 * const [shipping, setShipping] = useState<ShippingMethod>('standard');
 *
 * const shippingOptions: RadioGroupItem<ShippingMethod>[] = [
 *   { label: 'Standard (3-5 days)', value: 'standard' },
 *   { label: 'Express (2-3 days)', value: 'express' },
 *   { label: 'Overnight (1 day)', value: 'overnight' }
 * ];
 *
 * <RadioGroup<ShippingMethod>
 *   items={shippingOptions}
 *   initialValue={shipping}
 *   onChange={setShipping}
 * />
 * ```
 */
export const RadioGroup = <T extends string = string>({
  className,
  disabled,
  initialValue,
  items,
  onChange,
  style,
}: RadioGroupProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const initialIndex = items.findIndex(el => el.value === initialValue);

  useEffect(() => {
    if (initialIndex > -1) {
      setActiveIndex(initialIndex);
    }
  }, [initialIndex]);

  const radios = items.map((el, index) => (
    <Radio
      key={el.value}
      checked={index === activeIndex}
      disabled={disabled}
      label={el.label}
      onChange={() => {
        if (!disabled) {
          setActiveIndex(index);
          if (onChange && el.value) {
            onChange(el.value);
          }
        }
      }}
      value={el.value}
    />
  ));

  return (
    <div className={clsx(className, styles.radioContainer)} style={style}>
      {radios}
    </div>
  );
};
