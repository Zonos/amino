import type {
  ChangeEvent,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import clsx from 'clsx';

import {
  type HelpTextProps,
  HelpText,
} from 'src/components/help-text/HelpText';
import { DateInput } from 'src/components/input/input-type/_DateInput';
import {
  type FloatLabelInputProps,
  FloatLabelInput,
} from 'src/components/input/input-type/_FloatLabelInput';
import { NumberInput } from 'src/components/input/input-type/_NumberInput';
import { PasswordInput } from 'src/components/input/input-type/_PasswordInput';
import { TimeInput } from 'src/components/input/input-type/_TimeInput';
import { theme } from 'src/styles/constants/theme';

import styles from './Input.module.scss';

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
  size = 'xl',
  style,
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
            suffix={suffix === null ? null : suffix || inputSuffix}
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

  const getRadius = () => {
    switch (size) {
      case 'sm':
        return `${theme.radius6}`;
      case 'lg':
        return `${theme.radius10}`;
      case 'xl':
        return `${theme.radius12}`;
      case 'md':
      default:
        return `${theme.radius8}`;
    }
  };

  return (
    <div
      className={clsx(
        'amino-input-wrapper',
        { disabled },
        styles.aminoInputWrapper,
      )}
      style={{
        '--amino-input-border-radius': getRadius(),
        '--amino-input-width': width ? `${width}px` : '100%',
      }}
    >
      <div className={styles.fields}>{renderInput()}</div>

      <HelpText error={error} helpText={helpText} />
    </div>
  );
};
