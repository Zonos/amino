import {
  type ChangeEventHandler,
  forwardRef,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type KeyboardEventHandler,
  type ReactNode,
} from 'react';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import type { BaseProps } from 'src/types/BaseProps';
import type { Size } from 'src/types/Size';
import { cn } from 'src/utils/cn';

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
      size = 'md',
      suffix,
      value,
      valuePrefix,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = {
      lg: 'h-12',
      md: 'h-10',
      sm: 'h-8',
      xl: 'h-14',
    };

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label
            className={cn(
              'block mb-2 text-amino-text-secondary flex-none',
              error && 'text-red-600',
            )}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            'flex items-center w-full rounded-[var(--amino-input-border-radius)] bg-transparent flex-none',
            'shadow-[var(--amino-input-shadow)]',
            'focus-within:shadow-[var(--amino-input-focus-shadow)]',
            error &&
              'shadow-[var(--amino-input-error-shadow)] focus-within:shadow-[var(--amino-input-error-focus-shadow)]',
            sizeClasses[size],
            className,
          )}
          style={{
            '--amino-input-error-focus-shadow':
              'inset 0 0 0 2px var(--amino-red-500)',
            '--amino-input-error-shadow':
              'inset 0 0 0 1px var(--amino-red-500)',
            '--amino-input-focus-shadow': `inset 0 0 0 2px ${error ? 'var(--amino-red-500)' : 'var(--amino-blue-500)'}`,
            '--amino-input-shadow': 'inset 0 0 0 1px var(--amino-border-color)',
          }}
        >
          {prefix && (
            <div className="font-medium px-2 pr-0 -mr-2 flex items-center">
              {prefix}
            </div>
          )}
          {valuePrefix && (
            <div className="pl-3 text-gray-800 whitespace-nowrap">
              {valuePrefix}
            </div>
          )}
          <input
            ref={ref}
            className="bg-amino-input h-full px-4 outline-none w-full border-0 rounded-[inherit] bg-transparent font-medium placeholder:text-gray-500 placeholder:font-normal"
            disabled={disabled}
            placeholder={placeholder}
            value={value || ''}
            {...props}
          />
          {suffix && (
            <div className="font-medium px-2 flex items-center">{suffix}</div>
          )}
        </div>
      </div>
    );
  },
);
