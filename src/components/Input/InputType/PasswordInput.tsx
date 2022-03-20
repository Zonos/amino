import React, { useState } from 'react';

import styled from 'styled-components';

import { Button } from 'components/Button';
import { EyeIcon, EyeOffIcon } from 'icons';

import { FloatLabelInput, FloatLabelInputProps } from './FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledButtonWrapper = styled.div`
  top: 0;
  bottom: 0;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background: transparent;
  :hover,
  :active,
  :focus {
    background-color: transparent;
  }
  svg {
    width: 17px;
    height: auto;
    overflow: visible;
  }
`;

const AminoInput = styled(FloatLabelInput)`
  input {
    padding-right: var(--amino-space-double);
  }
`;

export const PasswordInput = ({
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
  const [inputType, setInputType] = useState('password');
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
        pattern={pattern && pattern}
        placeholder={placeholder}
        readOnly={readOnly || false}
        required={required}
        tabIndex={tabIndex && tabIndex}
        type={inputType}
        value={value}
      />
      <StyledButtonWrapper>
        <StyledButton
          size="md"
          icon={
            inputType === 'password' ? (
              <EyeIcon size={16} />
            ) : (
              <EyeOffIcon size={16} />
            )
          }
          onClick={() =>
            setInputType(inputType === 'password' ? 'text' : 'password')
          }
        />
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};
