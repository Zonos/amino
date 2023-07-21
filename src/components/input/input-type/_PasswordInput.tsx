import { useState } from 'react';

import styled from 'styled-components';

import {
  type FloatLabelInputProps,
  FloatLabelInput,
} from 'src/components/input/input-type/_FloatLabelInput';
import { EyeIcon } from 'src/icons/EyeIcon';
import { EyeOffIcon } from 'src/icons/EyeOffIcon';
import { theme } from 'src/styles/constants/theme';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledButtonAction = styled.button`
  padding: 6px;
  border-radius: 50%;
  transition: ${theme.transition};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;

const AminoInput = styled(FloatLabelInput)`
  input {
    padding-right: ${theme.space40};
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
            <StyledButtonAction
              onClick={() =>
                setInputType(inputType === 'password' ? 'text' : 'password')
              }
              type="button"
            >
              {inputType === 'password' ? (
                <EyeIcon size={20} />
              ) : (
                <EyeOffIcon size={20} />
              )}
            </StyledButtonAction>
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
