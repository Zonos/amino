import React, { forwardRef } from 'react';

import styled from 'styled-components';

// TODO: style input error states (for in-browser form validation)
// TODO: only show invalid for required fields _after_ submit attempt
// TODO: show the actual error message for each validation type
// TODO: better input class name generation

const StyledLabelWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledLabelInput = styled.label`
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
    transition: all 0.5s ease;
    left: calc(var(--amino-space-quarter) + 7px);
    top: calc(50% - var(--amino-text-base) / 2);
  }
`;

const AminoInput = styled.input`
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
  &.has-label {
    padding: var(--amino-space) calc(var(--amino-space-quarter) + 6px)
      var(--amino-space-quarter);
  }

  ::placeholder {
    opacity: 0;
  }

  :focus {
    outline: none;
    box-shadow: var(--amino-glow-blue);
  }

  &.has-content,
  &:focus {
    & + ${StyledLabelInput}::before {
      top: var(--amino-space-half);
      font-size: var(--amino-text-sm);
    }
  }

  &.has-error {
    box-shadow: var(--amino-glow-error);
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
  /** @deprecated Please use label instead. This placeholder will be replaced with float label. */
  placeholder?: string;

  /** Determines if the input is required for form validation */
  required?: boolean;

  /** Determines if the input is editable or not */
  readOnly?: boolean;

  /** Determines input type (email, password, etc.) */
  type?: string;

  /** If present, will display an error message instead of help text */
  error: string;

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
      readOnly,
      required,
      tabIndex,
      type,
      value,
    },
    ref
  ) => {
    return (
      <StyledLabelWrapper className={className}>
        <AminoInput
          aria-label={label}
          className={[
            error && error.length ? 'has-error' : '',
            label ? 'has-label' : '',
            value ? 'has-content' : '',
          ].join(' ')}
          autoFocus={autoFocus}
          disabled={disabled}
          inputMode={inputMode}
          onChange={onChange}
          onKeyDown={onKeyDown && onKeyDown}
          pattern={pattern}
          placeholder={placeholder || label}
          readOnly={readOnly}
          ref={ref}
          required={required}
          tabIndex={tabIndex}
          type={type || 'text'}
          value={value || ''}
        />
        <StyledLabelInput data-label={label} />
      </StyledLabelWrapper>
    );
  }
);
