import React, { useState } from 'react';

import { Button } from 'src/components/button/Button';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';
import styled from 'styled-components';

import { FloatLabelInput, type FloatLabelInputProps } from './_FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
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
  prefix,
  readOnly,
  required,
  suffix,
  tabIndex,
  value,
  ...props
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
        pattern={pattern}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        required={required}
        suffix={
          suffix || (
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
          )
        }
        tabIndex={tabIndex}
        type={inputType}
        value={value}
        {...props}
      />
    </StyledWrapper>
  );
};
