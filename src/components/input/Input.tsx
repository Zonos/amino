import {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { HelpText, HelpTextProps } from '../help-text/HelpText';
import { DateInput } from './input-type/_DateInput';
import {
  FloatLabelInput,
  FloatLabelInputProps,
} from './input-type/_FloatLabelInput';
import { NumberInput } from './input-type/_NumberInput';
import { PasswordInput } from './input-type/_PasswordInput';
import { TimeInput } from './input-type/_TimeInput';

const Fields = styled.div`
  border-radius: ${theme.radius};
  border: ${theme.border};
  &:hover {
    border: 1px solid ${theme.grayL40};
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
  }
) => void;

type InputType<T extends HTMLInputTypeAttribute> = {
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
  onChange: T extends 'date'
    ? DateInputEventHandler
    : ChangeEventHandler<HTMLInputElement>;
  inputSuffix?: ReactNode;
  inputPrefix?: ReactNode;
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
  suffix,
  tabIndex,
  type,
  size,
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
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
      case 'date':
      case 'datetime-local':
        return (
          <DateInput
            type={type}
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
            size={size}
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
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
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
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
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
            suffix={suffix || inputSuffix}
            tabIndex={tabIndex}
            size={size}
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
      width={width}
      className={`amino-input-wrapper ${disabled ? 'disabled' : ''}`}
    >
      <Fields>{renderInput()}</Fields>

      <HelpText error={error} helpText={helpText} />
    </AminoInputWrapper>
  );
};
