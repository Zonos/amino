import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Text } from 'components/Text';

// TODO: style input error states (for in-browser form validation)
// TODO: only show invalid for required fields _after_ submit attempt
// TODO: show the actual error message for each validation type
// TODO: better input class name generation

const Error = styled.div`
  color: var(--amino-error);
`;

const InputDecorator = styled.div`
  height: var(--amino-input-height);
  line-height: var(--amino-input-height);
  font-weight: 500;
  background: var(--amino-gray-100);
  padding: 0 var(--amino-space-half);
`;

const InputPrefix = styled(InputDecorator)`
  border-top-left-radius: var(--amino-radius);
  border-bottom-left-radius: var(--amino-radius);
  border-right: var(--amino-border);
`;

const InputSuffix = styled(InputDecorator)`
  border-top-right-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
  border-left: var(--amino-border);
`;

const AminoInput = styled.input`
  height: var(--amino-input-height);
  box-sizing: border-box;
  position: relative;
  outline: none;
  padding: 0 calc(var(--amino-space-quarter) + 6px);
  transition: var(--amino-transition);
  width: 100%;
  border-radius: var(--amino-radius);
  background: var(--amino-input-background);
  border: 0;

  ::placeholder {
    color: var(--amino-text-color);
    opacity: 0.3;
  }

  :focus {
    outline: none;
    box-shadow: var(--amino-glow-blue);
  }

  &.has-prefix {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.has-suffix {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &[is-invalid] {
    border: 2px solid var(--amino-error);
  }
`;

const Fields = styled.div`
  border-radius: var(--amino-radius);
  box-shadow: var(--amino-border-shadow-sm);
`;

const AminoInputWrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : '100%')};

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }

  & div {
    flex-direction: row;
    align-items: center;
    display: flex;
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.3;
    user-select: none;
  }
`;

export type InputProps = {
  /** A label that will be displayed above the input */
  label?: string;

  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;

  /** Placeholder text to be displayed in the input */
  placeholder?: string;

  /** Displayed in a tooltip next to the label */
  helpText?: string;

  /** Input value. Required since all inputs must be fully controlled */
  value: any;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void | null;

  /** A short string displayed at the beginning of the input */
  prefix?: string;
  inputPrefix?: string;

  /** A short string displayed at the end of the input */
  suffix?: string;
  inputSuffix?: string;

  /** Determines if the input is required for form validation */
  required?: boolean;

  /** Determines if the input is editable or not */
  readOnly?: boolean;

  /** Determines input type (email, password, etc.) */
  type?: string;

  /** If present, will display an error message instead of help text */
  error?: string;

  disabled?: boolean;
  tabIndex?: number;
  inputMode?: any;
  pattern?: any;
  autoFocus?: boolean;
  onKeyDown?: any;
};

export const Input = ({
  label,
  width,
  placeholder,
  helpText,
  value,
  onChange,
  prefix,
  inputPrefix,
  suffix,
  inputSuffix,
  required,
  type,
  readOnly,
  error,
  disabled,
  tabIndex,
  inputMode,
  pattern,
  autoFocus,
  onKeyDown,
}: InputProps) => {
  return (
    <AminoInputWrapper
      width={width}
      className={`amino-input-wrapper ${disabled ? 'disabled' : ''}`}
    >
      {label && <Text type="inputlabel">{label}</Text>}
      <Fields>
        {(prefix || inputPrefix) && (
          <InputPrefix>{prefix || inputPrefix}</InputPrefix>
        )}
        <AminoInput
          className={`${prefix || inputPrefix ? 'has-prefix' : ''} ${
            suffix || inputSuffix ? 'has-suffix' : ''
          }`}
          placeholder={placeholder || ''}
          value={value}
          onChange={onChange}
          required={required || false}
          type={type || 'text'}
          readOnly={readOnly || false}
          is-invalid={error && error.length}
          disabled={disabled}
          tabIndex={tabIndex && tabIndex}
          pattern={pattern && pattern}
          inputMode={inputMode && inputMode}
          autoFocus={autoFocus && autoFocus}
          onKeyDown={onKeyDown && onKeyDown}
          aria-label={label && label}
        />
        {(suffix || inputSuffix) && (
          <InputSuffix>{suffix || inputSuffix}</InputSuffix>
        )}
      </Fields>

      {helpText && (
        <>
          {error && error.length ? (
            <Error>
              <Text type="subtitle">{error}</Text>
            </Error>
          ) : null}

          {(!error || !error.length) && helpText ? (
            <Text type="subtitle">{helpText}</Text>
          ) : null}
        </>
      )}
    </AminoInputWrapper>
  );
};
