import React from "react";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { DropdownIcon } from "../../icons/DropdownIcon";

const StyledSelect = styled.select`
  border-radius: var(--amino-radius);
  outline: none !important;
  box-sizing: border-box;
  transition: var(--amino-transition);
  display: block;
  height: 38px;
  width: 100%;
  padding: 0 var(--amino-space-half);
  background: var(--amino-input-background);
  border: var(--amino-border);
  box-shadow: var(--amino-shadow-small);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus,
  &:active {
    outline: none;
    border: var(--amino-border-blue);
    box-shadow: var(--amino-glow-blue);
  }
`;

const DropdownContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(--amino-space-half);
    top: 41px;
    pointer-events: none;
    color: var(--amino-text-color);
    width: 16px;
    height: 16px;
    opacity: 0.3;
    transition: opacity 100ms ease-in-out;
  }

  &:hover svg {
    opacity: 0.6;
  }

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }
`;

type Props = {
  items: Array<any>;
  label: string;
  helpText?: string;
  onChange: (newValue: string) => any;
  value: string;
  placeholder: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  labelFormatFunction?: any;
  tabIndex?: number;
};

export const Select: React.FC<Props> = ({
  items,
  label,
  onChange,
  helpText,
  value,
  placeholder,
  itemLabelPath,
  itemValuePath,
  labelFormatFunction,
  tabIndex
}) => {
  const getItemLabel = (index: number) => {
    const label = itemLabelPath
      ? items[index][itemLabelPath]
      : items[index].label;

    if (labelFormatFunction) {
      return labelFormatFunction(label);
    } else {
      return label;
    }
  };

  return (
    <DropdownContainer className="amino-input-wrapper">
      <Text style={TextStyle.InputLabel}>{label}</Text>

      <StyledSelect
        value={value}
        onChange={e => onChange(e.target.value)}
        tabIndex={tabIndex && tabIndex}
      >
        <option value="">{placeholder}</option>
        {items.map((item: any, index: number) => (
          <option
            key={`${getItemLabel(index)}-${index}`}
            value={itemValuePath ? item[itemValuePath] : item.value}
          >
            {getItemLabel(index)}
          </option>
        ))}
      </StyledSelect>

      <DropdownIcon />

      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}
    </DropdownContainer>
  );
};
