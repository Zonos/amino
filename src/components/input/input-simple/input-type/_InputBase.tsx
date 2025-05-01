import {
  type ChangeEventHandler,
  forwardRef,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type KeyboardEventHandler,
  type ReactNode,
} from 'react';

import { clsx } from 'clsx';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import type { BaseProps } from 'src/types/BaseProps';
import type { Size } from 'src/types/Size';

import styles from './_InputBase.module.scss';

export type InputMode =
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type InputBaseType = BaseProps & {
  autoFocus?: boolean;
  disabled?: boolean;
  inputMode?: InputMode;
  /** A label that will be displayed above the input */
  label?: string;
  /**
   * @default false
   */
  noBorder?: boolean;
  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  pattern?: string;
  /** Placeholder text to be displayed in the input */
  placeholder?: string;
  /** A short string displayed at the beginning of the input */
  prefix?: ReactNode;
  /** Determines if the input is editable or not */
  readOnly?: boolean;
  /** Determines if the input is required for form validation */
  required?: boolean;
  /**
   * @default 'md'
   */
  size?: Size;
  /** A short string displayed at the end of the input */
  suffix?: ReactNode;
  tabIndex?: number;
  /** Determines input type (email, password, etc.) */
  type?: HTMLInputTypeAttribute;
  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;
  /** An additional value that appears next to the input but cannot be changed by the input */
  valuePrefix?: ReactNode;
} & Pick<HelpTextProps, 'error'>;

export type InputBaseProps = InputBaseType &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputBaseType>;

/**
 * An internal base input component used primarily by InputSimple.
 * Provides the core functionality for input rendering with label, prefix, suffix, and value prefix.
 *
 * This component serves as the foundation for most specialized input types.
 *
 * @example Basic usage
 * <InputBase
 *   label="Name"
 *   onChange={handleChange}
 *   value={value}
 * />
 *
 * @example With prefix and suffix
 * <InputBase
 *   label="Username"
 *   prefix={<UserIcon />}
 *   suffix="@example.com"
 *   onChange={handleChange}
 *   value={value}
 * />
 *
 * @example With error state
 * <InputBase
 *   label="Email"
 *   error={true}
 *   onChange={handleChange}
 *   value={value}
 * />
 *
 * @example With value prefix
 * <InputBase
 *   label="Phone"
 *   valuePrefix="+1"
 *   onChange={handleChange}
 *   value={value}
 * />
 *
 * @example With different sizes
 * <InputBase
 *   size="sm"
 *   label="Small Input"
 *   onChange={handleChange}
 *   value={value}
 * />
 */
export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  (
    {
      className,
      disabled,
      error,
      label,
      noBorder,
      placeholder,
      prefix,
      size,
      suffix,
      value,
      valuePrefix,
      ...props
    },
    ref,
  ) => (
    <div className={styles.textInputWrapper}>
      {label && (
        <label className={clsx(styles.label, error && 'has-error')}>
          {label}
        </label>
      )}
      <div
        className={clsx(
          styles.inputWrapper,
          size && styles[`${size}`],
          error && 'has-error',
          className,
        )}
      >
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        {valuePrefix && <div className={styles.valuePrefix}>{valuePrefix}</div>}
        <input
          ref={ref}
          className={styles.input}
          disabled={disabled}
          placeholder={placeholder}
          value={value || ''}
          {...props}
        />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    </div>
  ),
);
