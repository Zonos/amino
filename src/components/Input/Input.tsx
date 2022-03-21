import React from 'react';

import styled from 'styled-components';

import { Text } from 'components/Text';

// TODO: style input error states (for in-browser form validation)
// TODO: only show invalid for required fields _after_ submit attempt
// TODO: show the actual error message for each validation type
// TODO: better input class name generation

const Error = styled.div`
  color: var(--amino-red-600);
`;

const InputDecorator = styled.div`
  height: var(--amino-input-float-height);
  line-height: var(--amino-input-float-height);
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

const Fields = styled.div`
  border-radius: var(--amino-radius);
  border: var(--amino-border);
`;

const AminoInputWrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : '100%')};

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }

  & > div {
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
  outline: none;
  padding: var(--amino-space) calc(var(--amino-space-quarter) + 6px)
    var(--amino-space-quarter);
  transition: var(--amino-transition);
  width: 100%;
  border-radius: var(--amino-radius);
  background: var(--amino-input-background);
  border: 0;

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
      top: var(--amino-space-quarter);
      font-size: var(--amino-text-sm);
    }
  }

  &.has-prefix {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.has-suffix {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.has-error {
    border: 2px solid var(--amino-error);
    &.has-content,
    &:focus {
      & + ${StyledLabelInput}::before {
        top: calc(var(--amino-space-quarter) + 2px);
        left: calc(var(--amino-space-quarter) + 9px);
      }
    }
  }
`;

const StyledSubTitle = styled(Text)`
  font-style: normal;
`;

type InputMode =
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export type InputProps = {
  /** A label that will be displayed above the input */
  label?: string;

  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;

  /** Placeholder text to be displayed in the input */
  /** @deprecated Please use label instead. This placeholder will be replaced with float label. */
  placeholder?: string;

  /** Displayed in a tooltip next to the label */
  helpText?: string;

  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: React.ChangeEventHandler<HTMLInputElement>;

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
  inputMode?: InputMode;
  pattern?: string;
  autoFocus?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
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
      {/* {label && <Text type="inputlabel">{label}</Text>} */}
      <Fields>
        {(prefix || inputPrefix) && (
          <InputPrefix>{prefix || inputPrefix}</InputPrefix>
        )}
        <StyledLabelWrapper>
          <AminoInput
            className={[
              prefix || inputPrefix ? 'has-prefix' : '',
              suffix || inputSuffix ? 'has-suffix' : '',
              error && error.length ? 'has-error' : '',
              value ? 'has-content' : '',
            ].join(' ')}
            placeholder={placeholder || label}
            value={value || ''}
            onChange={onChange}
            required={required || false}
            type={type || 'text'}
            readOnly={readOnly || false}
            disabled={disabled}
            tabIndex={tabIndex}
            pattern={pattern}
            inputMode={inputMode}
            autoFocus={autoFocus}
            onKeyDown={onKeyDown}
            aria-label={label}
          />
          <StyledLabelInput data-label={label} />
        </StyledLabelWrapper>
        {(suffix || inputSuffix) && (
          <InputSuffix>{suffix || inputSuffix}</InputSuffix>
        )}
      </Fields>

      {helpText && (
        <>
          {error && error.length ? (
            <Error>
              <StyledSubTitle type="subtitle">{error}</StyledSubTitle>
            </Error>
          ) : null}

          {(!error || !error.length) && helpText ? (
            <StyledSubTitle type="subtitle">{helpText}</StyledSubTitle>
          ) : null}
        </>
      )}
    </AminoInputWrapper>
  );
};
