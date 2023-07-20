import {
  type ChangeEventHandler,
  type ComponentPropsWithRef,
  type KeyboardEventHandler,
  forwardRef,
} from 'react';

import styled from 'styled-components';

import { SearchIcon } from 'src/icons/SearchIcon';
import { theme } from 'src/styles/constants/theme';

import type { InputMode } from './input-type/_FloatLabelInput';

const StyledWrapper = styled.div`
  position: relative;
  border: ${theme.border};
  border-radius: ${theme.radius6};
  width: 100%;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.space40};
`;

const AminoInput = styled.input`
  padding-left: ${theme.space40};
  padding-right: ${theme.space16};
  height: 40px;
  font-weight: 500;
  line-height: 40px;
  border-radius: ${theme.radius6};
  outline: none;
  width: 100%;
  background: ${theme.inputBackground};
  :focus {
    outline: none;
    box-shadow: ${theme.glowBlue};
  }
  &:-webkit-autofill,
  &:-moz-autofill {
    background-color: ${theme.inputBackground};
    color: ${theme.textColor};
  }

  /* The native X on the right of the input */
  &:not([value=''])::-webkit-search-cancel-button {
    opacity: 1 !important;
    cursor: pointer;
  }
`;

export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'onChange'> & {
  autoFocus?: boolean;

  className?: string;

  disabled?: boolean;

  inputMode?: InputMode;

  /** Input on changed. Required since all inputs must be fully controlled */
  onChange: ChangeEventHandler<HTMLInputElement>;

  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  pattern?: string;
  /** Placeholder text to be displayed in the input */
  placeholder?: string;
  /** Determines if the input is editable or not */
  readOnly?: boolean;
  /** Determines if the input is required for form validation */
  required?: boolean;
  tabIndex?: number;
  /** Input value. Required since all inputs must be fully controlled */
  value: string | null;
};

export const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoFocus,
      className,
      disabled,
      inputMode,
      onChange,
      onKeyDown,
      pattern,
      placeholder,
      readOnly,
      required,
      tabIndex,
      value,
      ...props
    },
    ref,
  ) => (
    <StyledWrapper className={className}>
      <StyledLabel htmlFor={AminoInput}>
        <SearchIcon color="gray600" size={20} />
      </StyledLabel>
      <AminoInput
        ref={ref}
        autoFocus={autoFocus}
        disabled={disabled}
        inputMode={inputMode}
        onChange={onChange}
        onKeyDown={onKeyDown}
        pattern={pattern}
        placeholder={placeholder || 'Search...'}
        readOnly={readOnly}
        required={required}
        tabIndex={tabIndex}
        type="search"
        value={value || ''}
        {...props}
      />
    </StyledWrapper>
  ),
);
