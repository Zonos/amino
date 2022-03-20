import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { Text } from 'components/Text';

import { NumberInput, PasswordInput } from './InputType';
import {
  FloatLabelInput,
  FloatLabelInputProps,
} from './InputType/FloatLabelInput';
// TODO: style input error states (for in-browser form validation)
// TODO: only show invalid for required fields _after_ submit attempt
// TODO: show the actual error message for each validation type
// TODO: better input class name generation

const Error = styled.div`
  color: var(--amino-red-600);
`;

const InputDecorator = styled.div`
  font-size: var(--amino-text-sm);
  line-height: var(--amino-text-sm);
  font-weight: 500;
  background: transparent;
  padding: 0 var(--amino-space-half);
  position: absolute;
  font-weight: 700;
  width: 50px;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputPrefix = styled(InputDecorator)`
  border-top-left-radius: var(--amino-radius);
  border-bottom-left-radius: var(--amino-radius);
  left: 0;
`;

const InputSuffix = styled(InputDecorator)`
  border-top-right-radius: var(--amino-radius);
  border-bottom-right-radius: var(--amino-radius);
  right: 0;
`;

const Fields = styled.div`
  border-radius: var(--amino-radius);
  border: var(--amino-border);
  &:hover {
    border: 1px solid var(--amino-gray-300);
  }
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
    cursor: not-allowed;
    opacity: 0.4;
    user-select: none;
  }
  .has-prefix {
    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-left: calc(var(--amino-space-double) + var(--amino-space));
    }
    input:focus,
    input.has-content {
      & + label[data-label]::before {
        left: calc(var(--amino-space-double) + var(--amino-space) + 11px);
      }
    }
    label[data-label] {
      &::before {
        left: calc(var(--amino-space-double) + var(--amino-space));
      }
    }
  }
  .has-suffix {
    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-right: calc(var(--amino-space-double) + var(--amino-space));
    }
    input:focus,
    input.has-content {
      & + label[data-label]::before {
        right: calc(var(--amino-space-double) + var(--amino-space) + 11px);
      }
    }
    label[data-label] {
      &::before {
        right: calc(var(--amino-space-double) + var(--amino-space));
      }
    }
  }
`;

const StyledSubTitle = styled(Text)`
  font-style: normal;
`;

export type InputProps = {
  /** A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;

  /** Displayed in a tooltip next to the label */
  helpText?: string;

  /** A short string displayed at the beginning of the input */
  prefix?: ReactNode;
  inputPrefix?: ReactNode;

  /** A short string displayed at the end of the input */
  suffix?: ReactNode;
  inputSuffix?: ReactNode;
} & FloatLabelInputProps;

export const Input = ({
  label,
  width,
  className,
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
  const InputRender = () => {
    const inputClassName = [
      className || '',
      prefix || inputPrefix ? 'has-prefix' : '',
      suffix || inputSuffix ? 'has-suffix' : '',
    ].join(' ');
    switch (type) {
      case 'password':
        return (
          <PasswordInput
            autoFocus={autoFocus}
            className={inputClassName}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            tabIndex={tabIndex}
            value={value || ''}
          />
        );
      case 'number':
        return (
          <NumberInput
            autoFocus={autoFocus}
            className={inputClassName}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            tabIndex={tabIndex}
            value={value || ''}
          />
        );
      default:
        return (
          <FloatLabelInput
            autoFocus={autoFocus}
            className={inputClassName}
            disabled={disabled}
            error={error}
            inputMode={inputMode}
            label={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            tabIndex={tabIndex}
            type={type}
            value={value || ''}
          />
        );
    }
  };
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

        <InputRender />

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
