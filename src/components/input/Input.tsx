import type {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';

import { type HelpTextProps, HelpText } from '../help-text/HelpText';
import { DateInput } from './input-type/_DateInput';
import {
  type FloatLabelInputProps,
  FloatLabelInput,
} from './input-type/_FloatLabelInput';
import { NumberInput } from './input-type/_NumberInput';
import { PasswordInput } from './input-type/_PasswordInput';
import { TimeInput } from './input-type/_TimeInput';

const Fields = styled.div`
  border-radius: ${theme.radius6};
  border: ${theme.border};
  &:hover {
    border: 1px solid ${theme.gray300};
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
    opacity: 0.4;
  }
`;

type DateInputEventHandler = (
  e: Omit<ChangeEvent<HTMLInputElement>, 'target'> & {
    target: Omit<EventTarget, 'value'> & {
      /** @desc The parsed value is always formatted `yyyy-mm-dd`. Ex: '2022-12-28' */
      value: `${number}-${number}-${number}` | '';
    };
  },
) => void;

type InputType<T extends HTMLInputTypeAttribute> = {
  inputPrefix?: ReactNode;
  inputSuffix?: ReactNode;
  onChange: T extends 'date'
    ? DateInputEventHandler
    : ChangeEventHandler<HTMLInputElement>;
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
} & Omit<FloatLabelInputProps, 'onChange'> &
  HelpTextProps;

export type InputProps<T extends string = string> = InputType<T> &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputType<T>>;

export const Input = <T extends string>({
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
  size,
  suffix,
  tabIndex,
  type,
  value,
  valuePrefix,
  width,
  ...props
}: InputProps<T>) => {
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
            size={size}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
      case 'date':
      case 'datetime-local':
        return (
          <DateInput
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
            size={size}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            type={type}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
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
            size={size}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );

      case 'time':
        return (
          <TimeInput
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
            size={size}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
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
            size={size}
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            type={type}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
    }
  };
  return (
    <AminoInputWrapper
      className={`amino-input-wrapper ${disabled ? 'disabled' : ''}`}
      width={width}
    >
      <Fields>{renderInput()}</Fields>

      <HelpText error={error} helpText={helpText} />
    </AminoInputWrapper>
  );
};
