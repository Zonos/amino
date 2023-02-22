import { forwardRef, ReactNode, TextareaHTMLAttributes } from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

import { HelpText } from '../help-text/HelpText';

type TextareaType = {
  error?: boolean;
  helpText?: ReactNode;
  label?: string;
  /** @desc A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
};

const Fields = styled.div`
  border-radius: ${theme.radius6};
  border: ${theme.border};
  position: relative;
  &:hover {
    border: 1px solid ${theme.gray300};
  }
`;

const StyledBorder = styled.div`
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: ${theme.radius6};
  }
`;

const StyledLabelInput = styled.label`
  color: ${theme.gray800};
  font-size: ${theme.fontSizeBase};
  line-height: ${theme.fontSizeBase};
  position: absolute;
  filter: blur(0);
  top: calc(${theme.fontSizeBase} + 6px);
  transform-origin: left top;
  transition: ${theme.transition};
  left: ${theme.space16};
  z-index: 3;
`;

const StyledTextarea = styled.textarea<TextareaType>`
  box-sizing: border-box;
  position: relative;
  padding: 0 ${theme.space16};
  transition: ${theme.transition};
  outline: none;
  order: 2;
  width: 100%;
  border-radius: ${theme.radius6};
  background: ${theme.inputBackground};
  border: 0;
  font-size: ${theme.fontSizeBase};
  font-weight: 500;
  z-index: 2;

  :-internal-autofill-selected {
    border-radius: ${theme.radius6} 0 0 ${theme.radius6};
    && + label + div {
      background-color: #e8f0fe;
    }
  }
  &.has-label {
    padding: ${theme.space24} 4px ${theme.space8} ${theme.space16};
  }

  ::placeholder {
    transition: ${theme.transition};
    opacity: 0;
    color: ${theme.gray400};
    font-weight: 400;
  }
  &.has-content,
  &:focus {
    &::placeholder {
      opacity: 0.6;
    }
    & + ${StyledLabelInput} {
      top: 11px;
      transform: scale(0.8);
      & + ${StyledBorder} {
        &::before {
          content: '';
          position: absolute;
          z-index: 2;
          left: 0;
          top: 0;
          height: 25px;
          right: 0;
          background: white;
        }
      }
    }
  }

  :focus {
    outline: none;
    & ~ ${StyledBorder}::after {
      box-shadow: ${theme.glowBlue};
    }
  }

  &.has-error ~ ${StyledBorder}::after {
    box-shadow: ${theme.glowError};
  }
`;

const AminoInputWrapper = styled.div<{ width?: number }>`
  position: relative;
  width: ${p => (p.width ? `${p.width}px` : '100%')};

  &.disabled {
    * {
      cursor: not-allowed;
    }
    ${Fields} {
      opacity: 0.4;
    }
    ${StyledTextarea} {
      user-select: none;
    }
  }
`;

export type TextareaProps = TextareaType &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      disabled,
      error,
      helpText,
      label,
      value,
      rows,
      width,
      ...props
    },
    ref
  ) => {
    const hasValue = !!value;
    return (
      <AminoInputWrapper
        width={width}
        className={`amino-input-wrapper ${className || ''} ${
          disabled ? 'disabled' : ''
        }`}
      >
        <Fields>
          <StyledTextarea
            className={[
              error ? 'has-error' : '',
              label ? 'has-label' : '',
              hasValue ? 'has-content' : '',
            ].join(' ')}
            disabled={disabled}
            ref={ref}
            rows={rows || 4}
            label={label}
            value={value}
            {...props}
          />
          <StyledLabelInput data-label={label}>{label}</StyledLabelInput>
          <StyledBorder />
        </Fields>
        <HelpText error={error} helpText={helpText} />
      </AminoInputWrapper>
    );
  }
);
