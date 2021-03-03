import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Radio } from "./Radio";

const RadioContainer = styled.div`
  * {
    margin-bottom: var(${AminoTheme.spaceHalf});
  }

  *:last-of-type {
    margin-bottom: 0;
  }
`;

type Props<T> = {
  initialValue?: string;
  itemLabelPath?: keyof T;
  itemValuePath?: keyof T;
  items: T[];
  onChange?: (newValue: string | T[keyof T]) => void;
};

export const RadioGroup = <T extends { label?: string; value?: string }>({
  items,
  onChange,
  itemValuePath,
  itemLabelPath,
  initialValue
}: Props<T>) => {
  const [active, setActive] = useState(-1);

  const activeItem = items.find((x, i) => i === active);

  useEffect(() => {
    if (onChange && activeItem && activeItem?.value !== initialValue) {
      const value = itemValuePath
        ? activeItem[itemValuePath]
        : activeItem.value;
      if (typeof value === "string") {
        onChange(value);
      }
    }
  }, [active]);

  useEffect(() => {
    const initial = items.findIndex(el => {
      const value = itemValuePath ? el[itemValuePath] : el.value;
      return value === initialValue;
    });

    if (initial > -1) {
      setActive(initial);
    }
  }, [initialValue]);

  const radios = items.map((el, index) => {
    const label = itemLabelPath ? el[itemLabelPath] : el.label;

    return (
      <Radio
        checked={index === active}
        onChange={() => setActive(index)}
        key={index}
        label={label as string}
      />
    );
  });

  return <RadioContainer>{radios}</RadioContainer>;
};
