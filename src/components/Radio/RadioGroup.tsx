import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Radio } from './Radio';

const RadioContainer = styled.div`
  * {
    margin-bottom: var(--amino-space-half);
  }

  *:last-of-type {
    margin-bottom: 0;
  }
`;

export type RadioGroupItem = {
  label: string;
  value: string;
};

export type RadioGroupProps<T> = {
  initialValue?: string;
  items: T[];
  onChange: (newValue: string) => void;
};

export const RadioGroup = <T extends RadioGroupItem>({
  items,
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

  const radios = items.map((el, index) => {
    return (
      <Radio
        checked={index === activeIndex}
        onChange={() => {
          setActiveIndex(index);
          if (onChange && el.value) {
            onChange(el.value);
          }
        }}
        key={el.label}
        label={el.label}
      />
    );
  });

  return <RadioContainer>{radios}</RadioContainer>;
};
