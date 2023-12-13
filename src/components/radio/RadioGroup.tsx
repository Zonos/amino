import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { Radio } from 'src/components/radio/Radio';

import styles from './RadioGroup.module.scss';

export type RadioGroupItem<T extends string = string> = {
  label: string;
  value: T;
};

export type RadioGroupProps<T extends string = string> = {
  className?: string;
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
      key={el.label}
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

  return <div className={clsx(className, styles.radioContainer)}>{radios}</div>;
};
