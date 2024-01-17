import { type ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Radio } from 'src/components/radio/Radio';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './RadioGroup.module.scss';

export type RadioGroupItem<T extends string = string> = {
  label: ReactNode;
  value: T;
};

export type RadioGroupProps<T extends string = string> = BaseProps & {
  disabled?: boolean;
  initialValue?: string;
  items: RadioGroupItem<T>[];
  onChange: (newValue: T) => void;
};

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
    />
  ));

  return (
    <div className={clsx(className, styles.radioContainer)} style={style}>
      {radios}
    </div>
  );
};
