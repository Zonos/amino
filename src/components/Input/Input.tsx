import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { HelpText, type HelpTextProps } from '~/src/components/HelpText';

import { NumberInput, PasswordInput } from './InputType';
import {
  FloatLabelInput,
  FloatLabelInputProps,
} from './InputType/FloatLabelInput';

const Fields = styled.div`
  border-radius: var(--amino-radius);
  border: var(--amino-border);
  &:hover {
    border: 1px solid var(--amino-gray-300);
  }
`;

const AminoInputWrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : '100%')};

  & > div {
    flex-direction: row;
    align-items: center;
    display: flex;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
    user-select: none;
  }
`;

export type InputProps = {
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;

  inputSuffix?: ReactNode;
  inputPrefix?: ReactNode;
} & FloatLabelInputProps &
  HelpTextProps;

export const Input = ({
  autoFocus,
  className,
  disabled,
  error,
  helpText,
  inputMode,
  inputPrefix,
  inputSuffix,
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
  type,
  value,
  valuePrefix,
  width,
}: InputProps) => {
  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <PasswordInput
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
          />
        );
      case 'number':
        return (
          <NumberInput
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
          />
        );
      default:
        return (
          <FloatLabelInput
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix || inputPrefix}
            readOnly={readOnly}
            required={required}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            type={type}
            value={value || ''}
            valuePrefix={valuePrefix}
          />
        );
    }
  };
  return (
    <AminoInputWrapper
      width={width}
      className={`amino-input-wrapper ${disabled ? 'disabled' : ''}`}
    >
      <Fields>{renderInput()}</Fields>

      <HelpText error={error} helpText={helpText} />
    </AminoInputWrapper>
  );
};
