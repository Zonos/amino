import React, { forwardRef } from 'react';

import styled from 'styled-components';

import { Text } from '~/src/components/Text/Text';
import { DropdownIcon } from '~/src/icons/DropdownIcon';

const StyledSelect = styled.select`
  border-radius: var(--amino-radius);
  outline: none !important;
  box-sizing: border-box;
  transition: var(--amino-transition);
  display: block;
  height: var(--amino-input-height);
  width: 100%;
  padding: 0 var(--amino-space-half);
  background: var(--amino-input-background);
  box-shadow: var(--amino-shadow-small);
  border: var(--amino-border);
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus,
  &:active {
    outline: none;
    box-shadow: var(--amino-glow-blue);
  }
`;

const DropdownContainer = styled.div`
  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }
`;

const SelectWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(--amino-space-half);
    top: 11px;
    pointer-events: none;
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

export type LegacySelectItem = {
  label: string;
  value: string;
};

export type LegacySelectProps<T> = {
  autoFocus?: boolean;
  items: T[];
  label?: string;
  helpText?: string;
  onChange: (newValue: string) => void;
  value: string;
  placeholder?: string;
  required?: boolean;
  tabIndex?: number;
};

const SelectInner = <T extends LegacySelectItem>(
  {
    autoFocus,
    items,
    label,
    onChange,
    helpText,
    value,
    placeholder,
    required = false,
    tabIndex,
  }: LegacySelectProps<T>,
  ref: React.ForwardedRef<HTMLSelectElement>
) => {
  return (
    <DropdownContainer className="amino-input-wrapper">
      {label && <Text type="inputlabel">{label}</Text>}

      <SelectWrapper>
        <StyledSelect
          autoFocus={autoFocus}
          onChange={e => onChange(e.target.value)}
          ref={ref}
          tabIndex={tabIndex}
          value={value}
          aria-label={label}
        >
          {!required && placeholder && <option value="">{placeholder}</option>}
          {items.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </StyledSelect>
        <DropdownIcon />
      </SelectWrapper>

      {helpText && <Text type="subtitle">{helpText}</Text>}
    </DropdownContainer>
  );
};

/**
 * @deprecated This is the old version of "Select" component, recommend to use "Select" component for more functionality
 */
export const LegacySelect = forwardRef(SelectInner);
