import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Radio } from "./Radio";

const RadioContainer = styled.div`
  * {
    margin-bottom: var(--amino-space-half);
  }
  
  *:last-of-type {
    margin-bottom: 0;
  }
`;

type Props = {
  items: Array<any>;
  onChange?: any;
  itemValuePath?: string;
  itemLabelPath?: string;
  initialValue?: string;
};

export const RadioGroup: React.FC<Props> = props => {
  const { items, onChange, itemValuePath, itemLabelPath, initialValue } = props;

  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (onChange && items[active] && items[active] !== initialValue) {
      const value = itemValuePath ? items[active][itemValuePath] : items[active].value;
      onChange(value);
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

  const checked = (index: number) => {
    return index === active;
  };

  const radios = items.map((el: any, index: number) => {
    const label = itemLabelPath ? el[itemLabelPath] : el.label;

    return (
      <Radio checked={checked(index)} onChange={() => setActive(index)} key={index} label={label} />
    );
  });

  return <RadioContainer>{radios}</RadioContainer>;
};
