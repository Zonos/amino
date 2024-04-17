import {
  type ChangeEventHandler,
  forwardRef,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type KeyboardEventHandler,
  type ReactNode,
  useMemo,
} from 'react';

import clsx from 'clsx';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { Size } from 'src/types/Size';
import { getTestId } from 'src/utils/getTestId';

import styles from './_FloatLabelInput.module.scss';

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
      inputMode,
      label,
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
    const testId = useMemo(
      () => getTestId({ componentName: 'input', name: label }),
      [label],
    );
    const hasValue = !!value || !!valuePrefix;

    return (
      <div
        className={clsx(className, size, styles.styledLabelWrapper)}
        style={{
          '--amino-float-label-input-border-radius': getFloatLabelRadius(size),
          '--amino-float-label-input-height': `calc(var(--amino-size-${size}) - 2px)`,
        }}
      >
        {prefix && (
          <div className={clsx(styles.inputDecorator, styles.inputPrefix)}>
            {prefix}
          </div>
        )}
        {valuePrefix && (
          <div className={styles.inputValuePrefix}>{valuePrefix}</div>
        )}
        <input
          ref={ref}
          aria-label={label}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className={clsx(
            error && 'has-error',
            label && 'has-label',
            hasValue && 'has-content',
            prefix && 'has-input-prefix',
            valuePrefix && 'has-value-prefix',
            styles.aminoInput,
          )}
          data-testid={testId}
          disabled={disabled}
          id={label}
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
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={styles.styledLabelInput} data-label={label} />
        {suffix && (
          <div className={clsx(styles.inputDecorator, styles.inputSuffix)}>
            {suffix}
          </div>
        )}
      </div>
    );
  },
);
