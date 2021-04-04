import React, { forwardRef } from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Text, TextStyle } from "../Text";
import { DropdownIcon } from "../../icons/DropdownIcon";

const StyledSelect = styled.select`
  border-radius: var(${AminoTheme.radius});
  outline: none !important;
  box-sizing: border-box;
  transition: var(${AminoTheme.transition});
  display: block;
  height: 38px;
  width: 100%;
  padding: 0 var(${AminoTheme.spaceHalf});
  background: var(${AminoTheme.inputBackground});
  border: var(${AminoTheme.border});
  box-shadow: var(${AminoTheme.shadowSmall});
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus,
  &:active {
    outline: none;
    border: var(${AminoTheme.borderBlue});
    box-shadow: var(${AminoTheme.glowBlue});
  }
`;

const DropdownContainer = styled.div`
  span {
    margin-top: var(${AminoTheme.spaceQuarter});
    display: block;
  }
`;

const SelectWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(${AminoTheme.spaceHalf});
    top: 11px;
    pointer-events: none;
    color: var(${AminoTheme.textColor});
    width: 16px;
    height: 16px;
    opacity: 0.3;
    transition: opacity 100ms ease-in-out;
    color: var(--amino-text-color);
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

export type SelectProps = {
  autoFocus?: boolean;
  items: Array<any>;
  label?: string | null;
  helpText?: string;
  onChange: (newValue: string) => any;
  value: string;
  placeholder?: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  labelFormatFunction?: any;
  required?: boolean;
  tabIndex?: number;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      autoFocus,
      items,
      label,
      onChange,
      helpText,
      value,
      placeholder,
      itemLabelPath,
      itemValuePath,
      labelFormatFunction,
      required = false,
      tabIndex
    },
    ref
  ) => {
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
        {typeof label === "string" && (
          <Text style={TextStyle.InputLabel}>{label}</Text>
        )}

        <SelectWrapper>
          <StyledSelect
            autoFocus={autoFocus}
            onChange={e => onChange(e.target.value)}
            ref={ref}
            tabIndex={tabIndex}
            value={value}
          >
            {!required && placeholder && (
              <option value="">{placeholder}</option>
            )}
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
        </SelectWrapper>

        {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}
      </DropdownContainer>
    );
  }
);
