import {
  type ChangeEventHandler,
  forwardRef,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type KeyboardEventHandler,
  type ReactNode,
  useId,
  useMemo,
} from 'react';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Size } from 'src/types/Size';
import { cn } from 'src/utils/cn';
import { getTestId } from 'src/utils/getTestId';

export type InputMode =
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export const getFloatLabelRadius = (size: Size) => {
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

type FloatLabelInputType = BaseProps & {
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
   * @default 'xl'
   */
  size?: Size;
  /** A short string displayed at the end of the input. Set to `null` to disable */
  suffix?: ReactNode;
  tabIndex?: number;
  /** Determines input type (email, password, etc.) */
  type?: HTMLInputTypeAttribute;
  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;
  /** An additional value that appears next to the input but cannot be changed by the input */
  valuePrefix?: ReactNode;
} & Pick<HelpTextProps, 'error'>;
export type FloatLabelInputProps = FloatLabelInputType &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof FloatLabelInputType>;

/**
 * Internal input component that implements a floating label pattern.
 * The label floats above the input when the input has value or is focused.
 *
 * This component is used internally by the Input component and supports various
 * decoration options like prefix, suffix, and valuePrefix.
 *
 * @example Basic usage
 * <FloatLabelInput
 *   label="Username"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With error state
 * <FloatLabelInput
 *   label="Email"
 *   error={true}
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With prefix and suffix
 * <FloatLabelInput
 *   label="Search"
 *   prefix={<SearchIcon />}
 *   suffix={<ClearIcon onClick={clearSearch} />}
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With value prefix (for partial content)
 * <FloatLabelInput
 *   label="Phone Number"
 *   valuePrefix="+1"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 *
 * @example With different sizes
 * <FloatLabelInput
 *   size="sm"
 *   label="Small Input"
 *   onChange={e => setValue(e.target.value)}
 *   value={value}
 * />
 */
export const FloatLabelInput = forwardRef<
  HTMLInputElement,
  FloatLabelInputProps
>(
  (
    {
      autoFocus,
      className,
      disabled,
      error,
      id: _id,
      inputMode,
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
      suffix,
      tabIndex,
      type,
      value,
      valuePrefix,
      ...props
    },
    ref,
  ) => {
    const inputId = useId();
    const testId = useMemo(
      () => getTestId({ componentName: 'input', name: label }),
      [label],
    );
    const hasValue = !!value || !!valuePrefix;

    const id = _id || inputId;

    const sizeClasses = {
      lg: {
        input: label ? 'pt-5 pb-2 pr-1 pl-4' : 'px-4',
        labelTop: 'top-[6px]',
        valuePrefixPadding: 'pb-2.5',
        wrapper: 'h-[calc(var(--amino-size-lg)-2px)]',
      },
      md: {
        input: label ? 'pt-5 pb-2 pr-1 pl-4' : 'px-4',
        labelTop: 'top-[6px]',
        valuePrefixPadding: 'pb-1',
        wrapper: 'h-[calc(var(--amino-size-md)-2px)]',
      },
      sm: {
        input: label ? 'pt-[13px] pb-0 px-4' : 'px-4',
        labelTop: 'top-[2px]',
        valuePrefixPadding: 'pb-0 mb-[-1px]',
        wrapper: 'h-[calc(var(--amino-size-sm)-2px)]',
      },
      xl: {
        input: label ? 'pt-4 pb-[2px] pr-1 pl-4' : 'px-4',
        labelTop: 'top-[11px]',
        valuePrefixPadding: 'pb-[11px]',
        wrapper: 'h-[calc(var(--amino-size-xl)-2px)]',
      },
    };

    const currentSize = sizeClasses[size];

    return (
      <label
        className={cn(
          'group relative flex flex-row items-center w-full bg-amino-input rounded-[var(--amino-float-label-input-border-radius)]',
          !noBorder && [
            'focus-within:shadow-[var(--amino-focus-shadow)]',
            error &&
              'shadow-[var(--amino-glow-error)] focus-within:shadow-[var(--amino-glow-error)]',
          ],
          hasValue && 'has-content',
          label && 'has-label',
          className,
        )}
        htmlFor={id}
        style={{
          '--amino-float-label-input-border-radius': getFloatLabelRadius(size),
          '--amino-float-label-input-height': `calc(var(--amino-size-${size}) - 2px)`,
          '--amino-focus-shadow': error ? theme.glowError : theme.glowBlue,
        }}
      >
        {prefix && (
          <div className="text-amino-s leading-(--amino-font-size-s) font-bold bg-transparent px-1.5 basis-[50px] flex justify-center items-center rounded-l-[6px]">
            {prefix}
          </div>
        )}
        {valuePrefix && (
          <div
            className={cn(
              'flex order-2 items-center pl-2 whitespace-nowrap',
              label && ['items-end', currentSize.valuePrefixPadding],
            )}
            style={{ color: 'var(--amino-gray-800)' }}
          >
            {valuePrefix}
          </div>
        )}
        <input
          ref={ref}
          aria-label={label}
          autoFocus={autoFocus}
          className={cn(
            'box-border relative outline-none transition-all duration-300 ease-in-out w-full rounded-[var(--amino-float-label-input-border-radius)] bg-amino-input border-0 order-2 font-medium',
            currentSize.wrapper,
            label ? currentSize.input : 'px-4',
            prefix && label && 'pl-0',
            valuePrefix && label && 'pl-2',
            !label && 'placeholder:opacity-disabled',
            '[&:-internal-autofill-selected]:rounded-l-[6px] [&:-internal-autofill-selected+label+div]:bg-[#e8f0fe]',
            '[&:-webkit-autofill]:bg-amino-input [&:-webkit-autofill]:text-[var(--amino-text-color)]',
            '[&:-moz-autofill]:bg-amino-input [&:-moz-autofill]:text-[var(--amino-text-color)]',
            label &&
              'placeholder:opacity-0 group-[:has(input:focus)]:placeholder:opacity-disabled',
          )}
          data-testid={testId}
          disabled={disabled}
          id={id}
          inputMode={inputMode}
          onChange={onChange}
          onKeyDown={onKeyDown}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          tabIndex={tabIndex}
          type={type || 'text'}
          value={value || ''}
          {...props}
        />
        <div className="block max-h-0 pointer-events-none order-1 [.disabled_&]:pointer-events-auto">
          <span
            className={cn(
              'text-amino-base leading-none inline-block blur-0 origin-left-top transition-all duration-300 ease-in-out z-1',
              'absolute left-4 top-[calc(50%-8px)]',
              hasValue && ['scale-[0.8]', currentSize.labelTop],
              'group-focus-within:scale-[0.8]',
              `group-focus-within:${currentSize.labelTop}`,
              prefix && label && 'ml-0 !left-0',
            )}
            style={{ color: 'var(--amino-gray-800)' }}
          >
            {label}
          </span>
          <div
            className={cn(
              "after:content-[''] after:absolute after:inset-0 after:rounded-[var(--amino-float-label-input-border-radius)]",
              '.disabled_&:after:cursor-not-allowed .disabled_&:after:z-[1]',
            )}
          />
        </div>
        {suffix && (
          <div className="text-amino-s leading-(--amino-font-size-s) font-bold bg-transparent px-1.5 basis-[50px] flex justify-center items-center order-3 rounded-r-[6px]">
            {suffix}
          </div>
        )}
      </label>
    );
  },
);
