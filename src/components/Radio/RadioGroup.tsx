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

type Props<T> = {
  initialValue?: string;
  items: T[];
  onChange?: (newValue: string) => void;
};

export const RadioGroup = <T extends { label?: string; value?: string }>({
  items,
  onChange,
  initialValue,
}: Props<T>) => {
  const [active, setActive] = useState(-1);

  const activeItem = items.find((_, i) => i === active);

  const initial = items.findIndex(el => el.value === initialValue);

  if (initial > -1) {
    setActive(initial);
  }

  useEffect(() => {
    if (
      onChange &&
      activeItem &&
      activeItem.value &&
      activeItem?.value !== initialValue
    ) {
      onChange(activeItem.value);
    }
  }, [active, activeItem, initialValue, onChange]);

  const radios = items.map((el, index) => {
    return (
      <Radio
        checked={index === active}
        onChange={() => setActive(index)}
        key={el.label}
        label={el.label}
      />
    );
  });

  return <RadioContainer>{radios}</RadioContainer>;
};
