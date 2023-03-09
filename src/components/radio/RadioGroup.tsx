import { useEffect, useState } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Radio } from './Radio';

const RadioContainer = styled.div`
  * {
    margin-bottom: ${theme.space16};
  }

  *:last-of-type {
    margin-bottom: 0;
  }
`;

export type RadioGroupItem<T extends string = string> = {
  label: string;
  value: T;
};

export type RadioGroupProps<T extends string = string> = {
  initialValue?: string;
  items: RadioGroupItem<T>[];
  disabled?: boolean;
  onChange: (newValue: T) => void;
};

export const RadioGroup = <T extends string = string>({
  items,
  disabled,
  onChange,
  initialValue,
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
      checked={index === activeIndex}
      onChange={() => {
        if (!disabled) {
          setActiveIndex(index);
          if (onChange && el.value) {
            onChange(el.value);
          }
        }
      }}
      disabled={disabled}
      key={el.label}
      label={el.label}
    />
  ));

  return <RadioContainer>{radios}</RadioContainer>;
};
