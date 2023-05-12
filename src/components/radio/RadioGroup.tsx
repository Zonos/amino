import { useEffect, useState } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { Radio } from './Radio';

const RadioContainer = styled.div`
  display: flex;
  gap: ${theme.space8};
`;

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

  return <RadioContainer className={className}>{radios}</RadioContainer>;
};
