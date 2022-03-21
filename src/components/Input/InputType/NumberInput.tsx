import React, { useRef } from 'react';

import styled from 'styled-components';

import { ChevronDownIcon, ChevronUpIcon } from 'icons';

import { FloatLabelInput, FloatLabelInputProps } from './FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledActionWrapper = styled.div`
  position: absolute;
  right: var(--amino-space-quarter);
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledButtonAction = styled.button``;
const AminoInput = styled(FloatLabelInput)`
  && input {
    padding-right: var(--amino-space-double);
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const NumberInput = ({
  autoFocus,
  className,
  disabled,
  error,
  inputMode,
  label,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  readOnly,
  required,
  tabIndex,
  value,
}: FloatLabelInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledWrapper className={className}>
      <AminoInput
        aria-label={label}
        autoFocus={autoFocus}
        disabled={disabled}
        error={error}
        inputMode={inputMode}
        label={label}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={inputRef}
        required={required}
        tabIndex={tabIndex}
        type="number"
        value={value}
      />
      <StyledActionWrapper>
        <StyledButtonAction
          onClick={() => {
            inputRef.current?.stepUp();
            inputRef.current?.dispatchEvent(
              new Event('input', { bubbles: true })
            );
          }}
        >
          <ChevronUpIcon size={16} />
        </StyledButtonAction>
        <StyledButtonAction
          onClick={() => {
            inputRef.current?.stepDown();
            inputRef.current?.dispatchEvent(
              new Event('input', { bubbles: true })
            );
          }}
        >
          <ChevronDownIcon size={16} />
        </StyledButtonAction>
      </StyledActionWrapper>
    </StyledWrapper>
  );
};
