import React, { forwardRef, ReactNode } from 'react';

import styled from 'styled-components';

const StyledLabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  background: var(--amino-input-background);
  border-radius: var(--amino-radius);
`;
const StyledLabelInput = styled.label<{ hasPrefix: boolean }>`
  display: block;
  max-height: 0;
  pointer-events: none;
  &::before {
    content: attr(data-label);
    position: absolute;
    font-size: var(--amino-text-base);
    line-height: var(--amino-text-base);
    display: inline-block;
    filter: blur(0);
    transform-origin: left top;
    transition: all 0.5s ease;
    left: ${({ hasPrefix }) =>
      hasPrefix
        ? 'calc(var(--amino-space-half) + 47px)'
        : 'var(--amino-space-half)'};
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
  border-top-right-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
`;

const AminoInput = styled.input<{ hasPrefix: boolean; hasSuffix: boolean }>`
  height: 3.5rem;
  box-sizing: border-box;
  position: relative;
  padding: 0 calc(var(--amino-space-quarter) + 6px);
  outline: none;
  transition: var(--amino-transition);
  width: 100%;
  border-radius: var(--amino-radius);
  background: var(--amino-input-background);
  border: 0;
  font-weight: 500;
  &.has-label {
    padding: var(--amino-space) calc(var(--amino-space-quarter) + 6px)
      var(--amino-space-quarter);
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
      top: var(--amino-space-half);
      transform: scale(0.8);
    }
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

export type FloatLabelInputProps = {
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

  /** A short string displayed at the end of the input */
  suffix?: ReactNode;

  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  inputMode?: InputMode;
  pattern?: string;
  autoFocus?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

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
      suffix,
      tabIndex,
      type,
      value,
    },
    ref
  ) => {
    return (
      <StyledLabelWrapper className={className}>
        {prefix && <InputPrefix>{prefix}</InputPrefix>}
        <AminoInput
          aria-label={label}
          className={[
            error && error.length ? 'has-error' : '',
            label ? 'has-label' : '',
            value ? 'has-content' : '',
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
          tabIndex={tabIndex}
          type={type || 'text'}
          value={value || ''}
        />
        <StyledLabelInput hasPrefix={!!prefix} data-label={label} />
        {suffix && <InputSuffix>{suffix}</InputSuffix>}
      </StyledLabelWrapper>
    );
  }
);
