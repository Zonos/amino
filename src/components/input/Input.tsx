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
import { DateInput } from 'src/components/input/input-type/_DateInput';
import {
  FloatLabelInput,
  type FloatLabelInputProps,
} from 'src/components/input/input-type/_FloatLabelInput';
import { NumberInput } from 'src/components/input/input-type/_NumberInput';
import { PasswordInput } from 'src/components/input/input-type/_PasswordInput';
import { TimeInput } from 'src/components/input/input-type/_TimeInput';
import { theme } from 'src/styles/constants/theme';

import styles from './Input.module.scss';

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
} & Omit<FloatLabelInputProps, 'onChange'> &
  HelpTextProps;

export type InputProps = InputType &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputType>;

/**
 * Input component that supports various input types with features like floating labels,
 * prefixes, suffixes, and different states (error, disabled, etc.).
 *
 * @example Basic text input
 * <Input
 *   label="Username"
 *   placeholder="Enter your username"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Password input
 * <Input
 *   type="password"
 *   label="Password"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Number input
 * <Input
 *   type="number"
 *   label="Age"
 *   onChange={e => setValue(e.target.valueAsNumber)}
 *   value={value}
 * />
 *
 * @example Date input
 * <Input
 *   type="date"
 *   label="Birth Date"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With help text
 * <Input
 *   label="Email"
 *   helpText="We'll never share your email"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With error state
 * <Input
 *   label="Username"
 *   error={true}
 *   helpText="Username is required"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With prefix icon
 * <Input
 *   label="Search"
 *   prefix={<SearchIcon />}
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With suffix
 * <Input
 *   label="Weight"
 *   suffix="kg"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Value prefix (for partial content)
 * <Input
 *   label="Phone"
 *   valuePrefix="+1"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Disabled state
 * <Input
 *   label="Username"
 *   disabled
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example Required field
 * <Input
 *   label="Email"
 *   required
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 */
export const Input = ({
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
  size = 'xl',
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
          <FloatLabelInput
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
      <div className={clsx(!noBorder && styles.fields)}>{renderInput()}</div>

      <HelpText error={error} helpText={helpText} />
    </div>
  );
};
