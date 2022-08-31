import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  useMemo,
} from 'react';

import { HelpTextProps } from 'src/components/help-text/HelpText';
import { theme } from 'src/styles/constants/theme';
import { Size } from 'src/types/Size';
import { getTestId } from 'src/utils/getTestId';
import styled from 'styled-components';

const StyledLabelInput = styled.label<{ hasPrefix: boolean }>`
  display: block;
  max-height: 0;
  pointer-events: none;
  order: 1;
  &::before {
    content: attr(data-label);
    color: ${theme.grayD40};
    position: absolute;
    font-size: ${theme.textBase};
    line-height: ${theme.textBase};
    display: inline-block;
    filter: blur(0);
    transform-origin: left top;
    transition: ${theme.transition};
    margin-left: ${theme.spaceHalf};
    top: calc(50% - ${theme.textBase} / 2);
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: ${theme.radius};
  }
`;

const InputDecorator = styled.div`
  font-size: ${theme.textSm};
  line-height: ${theme.textSm};
  font-weight: 500;
  background: transparent;
  padding: 0 ${theme.spaceHalf};
  font-weight: 700;
  flex-basis: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputPrefix = styled(InputDecorator)`
  border-top-left-radius: ${theme.radius};
  border-bottom-left-radius: ${theme.radius};
`;

const InputSuffix = styled(InputDecorator)`
  order: 3;
  border-top-right-radius: ${theme.radius};
  border-bottom-right-radius: ${theme.radius};
`;

export const InputValuePrefix = styled.div`
  display: flex;
  order: 2;
  align-items: flex-end;
  padding-left: ${theme.spaceHalf};
  padding-bottom: calc(${theme.spaceQuarter});
  color: ${theme.grayD40};
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
  padding: 0 ${theme.spaceHalf};
  outline: none;
  transition: ${theme.transition};
  width: 100%;
  border-radius: ${theme.radius};
  background: ${theme.inputBackground};
  border: 0;
  order: 2;
  font-weight: 500;

  :-internal-autofill-selected {
    border-radius: ${theme.radius} 0 0 ${theme.radius};
    && + label + div {
      background-color: #e8f0fe;
    }
  }
  &.has-label {
    padding: ${theme.space} 4px ${theme.spaceQuarter} ${theme.spaceHalf};
    &.has-input-prefix {
      padding-left: 0;
      & + ${StyledLabelInput}::before {
        margin-left: 0;
      }
    }
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
    transition: ${theme.transition};
    opacity: 0;
  }

  :focus {
    outline: none;
    & + ${StyledLabelInput}::after {
      box-shadow: ${theme.glowBlue};
    }
  }

  &.has-error + ${StyledLabelInput}::after {
    box-shadow: ${theme.glowError};
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
  background: ${theme.inputBackground};
  border-radius: ${theme.radius};

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
  type?: HTMLInputTypeAttribute;

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
    ref
  ) => {
    const testId = useMemo(
      () => getTestId({ componentName: 'input', name: label }),
      [label]
    );
    const hasPrefix = !!prefix || !!valuePrefix;
    const hasValue = !!value || !!valuePrefix;
    return (
      <StyledLabelWrapper className={`${className || ''} ${size}`}>
        {prefix && <InputPrefix>{prefix}</InputPrefix>}
        {valuePrefix && <InputValuePrefix>{valuePrefix}</InputValuePrefix>}
        <AminoInput
          aria-label={label}
          className={[
            error ? 'has-error' : '',
            label ? 'has-label' : '',
            hasValue ? 'has-content' : '',
            prefix ? 'has-input-prefix' : '',
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
          data-testid={testId}
          {...props}
        />
        <StyledLabelInput hasPrefix={hasPrefix} data-label={label} />
        {suffix && <InputSuffix>{suffix}</InputSuffix>}
      </StyledLabelWrapper>
    );
  }
);
