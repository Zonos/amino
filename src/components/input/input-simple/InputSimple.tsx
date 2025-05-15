import type {
  ChangeEventHandler,
  InputHTMLAttributes,
  MutableRefObject,
} from 'react';

import clsx from 'clsx';

import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { DateInput } from 'src/components/input/input-simple/input-type/_DateInput';
import { NumberInput } from 'src/components/input/input-simple/input-type/_NumberInput';
import { PasswordInput } from 'src/components/input/input-simple/input-type/_PasswordInput';
import { TimeInput } from 'src/components/input/input-simple/input-type/_TimeInput';
import { theme } from 'src/styles/constants/theme';

import { InputBase, type InputBaseProps } from './input-type/_InputBase';
import styles from './InputSimple.module.scss';

type InputType = {
  /** Need to pass the ref here to preserve generics, as forwardRef doesn't allow it
   * @link https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
   */
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  /**
   * @default false
   */
  noBorder?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
} & Omit<InputBaseProps, 'onChange'> &
  HelpTextProps;

export type InputProps = InputType &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputType>;

/**
 * InputSimple is a streamlined version of the Input component without floating labels.
 * It supports various input types and states, with a simpler design compared to the standard Input.
 *
 * @example Basic text input
 * <InputSimple
 *   label="Username"
 *   placeholder="Enter username"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Password input
 * <InputSimple
 *   type="password"
 *   label="Password"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Number input
 * <InputSimple
 *   type="number"
 *   label="Quantity"
 *   onChange={e => setValue(e.target.valueAsNumber)}
 *   value={value}
 * />
 *
 * @example Date input
 * <InputSimple
 *   type="date"
 *   label="Event Date"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With help text
 * <InputSimple
 *   label="Email"
 *   helpText="We'll never share your email"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With error state
 * <InputSimple
 *   label="Username"
 *   error={true}
 *   helpText="Username is required"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With prefix icon
 * <InputSimple
 *   label="Search"
 *   prefix={<SearchIcon />}
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With suffix
 * <InputSimple
 *   label="Weight"
 *   suffix="kg"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With different sizes
 * <InputSimple
 *   size="sm"
 *   label="Small Input"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 * <InputSimple
 *   size="md"
 *   label="Medium Input"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 * <InputSimple
 *   size="lg"
 *   label="Large Input"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 * <InputSimple
 *   size="xl"
 *   label="Extra Large Input"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Disabled state
 * <InputSimple
 *   label="Username"
 *   disabled
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With custom width
 * <InputSimple
 *   label="Username"
 *   width={300}
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 */
export const InputSimple = ({
  autoFocus,
  className,
  disabled,
  error,
  helpText,
  inputMode,
  inputRef,
  label,
  noBorder = false,
  onChange,
  onKeyDown,
  pattern,
  placeholder,
  prefix,
  readOnly,
  required,
  size = 'md',
  style,
  suffix,
  tabIndex,
  type,
  value,
  valuePrefix,
  width,
  ...props
}: InputProps) => {
  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <PasswordInput
            ref={inputRef}
            autoFocus={autoFocus}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            noBorder={noBorder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix}
            readOnly={readOnly}
            required={required}
            size={size}
            suffix={suffix}
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
            ref={inputRef}
            autoFocus={autoFocus}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            noBorder={noBorder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix}
            readOnly={readOnly}
            required={required}
            size={size}
            suffix={suffix}
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
            ref={inputRef}
            autoFocus={autoFocus}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            noBorder={noBorder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix}
            readOnly={readOnly}
            required={required}
            size={size}
            suffix={suffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );

      case 'time':
        return (
          <TimeInput
            ref={inputRef}
            autoFocus={autoFocus}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            noBorder={noBorder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix}
            readOnly={readOnly}
            required={required}
            size={size}
            suffix={suffix}
            tabIndex={tabIndex}
            value={value || ''}
            valuePrefix={valuePrefix}
            {...props}
          />
        );
      default:
        return (
          <InputBase
            ref={inputRef}
            autoFocus={autoFocus}
            className={className}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            noBorder={noBorder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            prefix={prefix}
            readOnly={readOnly}
            required={required}
            size={size}
            suffix={suffix}
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
        className,
        'amino-input-wrapper',
        disabled && 'disabled',
        styles.aminoInputWrapper,
      )}
      style={{
        '--amino-input-border-radius': getRadius(),
        '--amino-input-width': width ? `${width}px` : '100%',
        ...style,
      }}
    >
      {renderInput()}

      <HelpText error={error} helpText={helpText} />
    </div>
  );
};
