import {
  type ReactNode,
  type TextareaHTMLAttributes,
  forwardRef,
  useRef,
} from 'react';

import styled from 'styled-components';

import { theme } from 'src/styles/constants/theme';
import { useHeightAdjustTextarea } from 'src/utils/hooks/useHeightAdjustTextarea';

import { HelpText } from '../help-text/HelpText';

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
  padding-top: ${theme.space8};
  outline: none;
  order: 2;
  width: 100%;
  border-radius: ${theme.radius6};
  background: ${theme.inputBackground};
  border: 0;
  font-size: ${theme.fontSizeBase};
  font-weight: 500;
  z-index: 2;
  display: block;

  :-internal-autofill-selected {
    border-radius: ${theme.radius6} 0 0 ${theme.radius6};
    && + label + div {
      background-color: #e8f0fe;
    }
  }
  &.has-label {
    margin-top: ${theme.space24};
    padding: 0 4px ${theme.space8} ${theme.space16};

    ::placeholder {
      opacity: 0;
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
            background: ${theme.inputBackground};
            border-radius: ${theme.radius6};
          }
        }
      }
    }
  }

  ::placeholder {
    transition: ${theme.transition};
    color: ${theme.gray400};
    font-weight: 400;
    opacity: 0.6;
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

type TextareaAdjustableHeightType = {
  /**
   * @param expandable
   * @desc if set to true, the textarea will expand to fit the content
   */
  expandable?: boolean;
  /**
   * @param maxRows
   * @desc max rows that the textarea can expand to when expandable is set. If nothing is passed, it defaults to 5
   * @default 5
   */
  maxRows?: number;
};

type TextareaType = {
  error?: boolean;
  helpText?: ReactNode;
  label?: string;
  /** @desc A value (in px) that will determine how wide the input is. If nothing is passed, it defaults to 100% */
  width?: number;
} & TextareaAdjustableHeightType;

export type TextareaProps = TextareaType &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      disabled,
      error,
      expandable,
      helpText,
      label,
      maxRows,
      rows,
      value,
      width,
      ...props
    },
    ref,
  ) => {
    const hasValue = !!value;
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useHeightAdjustTextarea({
      maxRows,
      ref: textareaRef,
      shouldExpand: !!expandable,
      textareaValue: value?.toString() || '',
    });

    return (
      <AminoInputWrapper
        className={`amino-input-wrapper ${className || ''} ${
          disabled ? 'disabled' : ''
        }`}
        width={width}
      >
        <Fields onClick={() => textareaRef?.current?.focus()}>
          <StyledTextarea
            ref={node => {
              if (ref && typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                // eslint-disable-next-line no-param-reassign
                ref.current = node;
              }
              textareaRef.current = node;
            }}
            className={[
              error ? 'has-error' : '',
              label ? 'has-label' : '',
              hasValue ? 'has-content' : '',
            ].join(' ')}
            disabled={disabled}
            label={label}
            rows={rows}
            value={value}
            {...props}
          />
          <StyledLabelInput
            data-label={label}
            onClick={() => textareaRef?.current?.focus()}
          >
            {label}
          </StyledLabelInput>
          <StyledBorder />
        </Fields>
        <HelpText error={error} helpText={helpText} />
      </AminoInputWrapper>
    );
  },
);
