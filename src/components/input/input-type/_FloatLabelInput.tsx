import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import { Size } from 'src/types/Size';
import styled from 'styled-components';

const StyledLabelInput = styled.label<{ hasPrefix: boolean }>`
  display: block;
  max-height: 0;
  pointer-events: none;
  order: 1;
  &::before {
    content: attr(data-label);
    color: var(--amino-gray-d40);
    position: absolute;
    font-size: var(--amino-text-base);
    line-height: var(--amino-text-base);
    display: inline-block;
    filter: blur(0);
    transform-origin: left top;
    transition: var(--amino-transition);
    margin-left: var(--amino-space-half);
    top: calc(50% - var(--amino-text-base) / 2);
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: var(--amino-radius);
  }
`;

const InputDecorator = styled.div`
  font-size: var(--amino-text-sm);
  line-height: var(--amino-text-sm);
  font-weight: 500;
  background: transparent;
  padding: 0 var(--amino-space-half);
  font-weight: 700;
  flex-basis: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputPrefix = styled(InputDecorator)`
  border-top-left-radius: var(--amino-radius);
  border-bottom-left-radius: var(--amino-radius);
`;

const InputSuffix = styled(InputDecorator)`
  order: 3;
  border-top-right-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
`;

export const InputValuePrefix = styled.div`
  display: flex;
  order: 2;
  align-items: flex-end;
  padding-left: var(--amino-space-half);
  padding-bottom: calc(var(--amino-space-quarter) + 3.5px);
  color: var(--amino-gray-d40);
  white-space: nowrap;
`;

type TypeInput = {
  hasPrefix: boolean;
  hasSuffix: boolean;
  $size: Size;
};
const AminoInput = styled.input<TypeInput>`
  height: ${p => `calc(var(--amino-size-${p.$size}) - 2px)`};
  box-sizing: border-box;
  position: relative;
  padding: 0 var(--amino-space-half);
  outline: none;
  transition: var(--amino-transition);
  width: 100%;
  border-radius: var(--amino-radius);
  background: var(--amino-input-background);
  border: 0;
  order: 2;
  font-weight: 500;
  &.has-label {
    padding: var(--amino-space) 4px var(--amino-space-quarter)
      var(--amino-space-half);
  }
  &:not(.has-label) {
    ::placeholder {
      opacity: 0.6;
    }
  }

  &.has-value-prefix {
    padding-left: 8px;
  }

  ::placeholder {
    transition: 1s all ease;
    opacity: 0;
  }

  :focus {
    outline: none;
    & + ${StyledLabelInput}::after {
      box-shadow: var(--amino-glow-blue);
    }
  }

  &.has-error + ${StyledLabelInput}::after {
    box-shadow: var(--amino-glow-error);
  }

  &.has-content,
  &:focus {
    &::placeholder {
      opacity: 0.6;
    }
    & + ${StyledLabelInput}::before {
      top: 11px;
      transform: scale(0.8);
    }
  }
`;

const StyledLabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: var(--amino-input-background);
  border-radius: var(--amino-radius);

  &.sm ${AminoInput}.has-label {
    padding-top: 13px;
    padding-bottom: 0;
    &:focus,
    &.has-content {
      & + ${StyledLabelInput}::before {
        top: 2px;
      }
    }
  }

  &.md ${AminoInput}.has-label {
    padding-top: 20px;
    &:focus,
    &.has-content {
      & + ${StyledLabelInput}::before {
        top: 6px;
      }
    }
  }

  &.lg ${AminoInput}.has-label {
    &:focus,
    &.has-content {
      & + ${StyledLabelInput}::before {
        top: 10px;
      }
    }
  }
  &.xl ${AminoInput}.has-label {
    padding-bottom: 2px;
  }
`;

export type InputMode =
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type FloatLabelInputType = {
  /** A label that will be displayed above the input */
  label?: string;

  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  /** Placeholder text to be displayed in the input */
  placeholder?: string;

  /** Determines if the input is required for form validation */
  required?: boolean;

  /** Determines if the input is editable or not */
  readOnly?: boolean;

  /** Determines input type (email, password, etc.) */
  type?: string;

  /** If present, will display an error message instead of help text */
  error?: string;

  /** A short string displayed at the beginning of the input */
  prefix?: ReactNode;

  /** An additional value that appears next to the input but cannot be changed by the input */
  valuePrefix?: ReactNode;

  /** A short string displayed at the end of the input */
  suffix?: ReactNode;

  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  inputMode?: InputMode;
  pattern?: string;
  autoFocus?: boolean;
  size?: Size;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};
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
    ref
  ) => {
    const hasPrefix = !!prefix || !!valuePrefix;
    const hasValue = !!value || !!valuePrefix;
    return (
      <StyledLabelWrapper className={`${className || ''} ${size}`}>
        {prefix && <InputPrefix>{prefix}</InputPrefix>}
        {valuePrefix && <InputValuePrefix>{valuePrefix}</InputValuePrefix>}
        <AminoInput
          aria-label={label}
          className={[
            error && error.length ? 'has-error' : '',
            label ? 'has-label' : '',
            hasValue ? 'has-content' : '',
            valuePrefix ? 'has-value-prefix' : '',
          ].join(' ')}
          hasPrefix={!!prefix}
          hasSuffix={!!suffix}
          autoFocus={autoFocus}
          disabled={disabled}
          inputMode={inputMode}
          onChange={onChange}
          onKeyDown={onKeyDown}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          required={required}
          $size={size}
          tabIndex={tabIndex}
          type={type || 'text'}
          value={value || ''}
          {...props}
        />
        <StyledLabelInput hasPrefix={hasPrefix} data-label={label} />
        {suffix && <InputSuffix>{suffix}</InputSuffix>}
      </StyledLabelWrapper>
    );
  }
);
