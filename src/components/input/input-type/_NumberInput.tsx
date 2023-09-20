import { useRef } from 'react';

import styled from 'styled-components';

import {
  type FloatLabelInputProps,
  FloatLabelInput,
} from 'src/components/input/input-type/_FloatLabelInput';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import { theme } from 'src/styles/constants/theme';
import type { Size } from 'src/types/Size';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const StyledActionWrapper = styled.div<{ $size: Size }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: ${p => `calc(var(--amino-size-${p.$size}) - 2px)`};
`;
const StyledButtonAction = styled.button`
  padding: ${theme.radius4};
  border-radius: ${theme.radius4};
  transition: ${theme.transition};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    outline: none;
  }
`;
const AminoInput = styled(FloatLabelInput)`
  && input {
    padding-right: ${theme.space40};
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;

const getIconSize = (size: Size) => {
  switch (size) {
    case 'sm':
      return 10;
    case 'md':
      return 12;
    case 'lg':
      return 14;
    case 'xl':
    default:
      return 16;
  }
};

export const NumberInput = ({
  className,
  label,
  size = 'xl',
  suffix,
  ...props
}: FloatLabelInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledWrapper className={className}>
      <AminoInput
        {...props}
        ref={inputRef}
        aria-label={label}
        label={label}
        size={size}
        suffix={
          suffix === null
            ? null
            : suffix || (
                <StyledActionWrapper $size={size}>
                  <StyledButtonAction
                    onClick={() => {
                      inputRef.current?.stepUp();
                      inputRef.current?.dispatchEvent(
                        new Event('input', { bubbles: true }),
                      );
                    }}
                    type="button"
                  >
                    <ChevronUpIcon size={getIconSize(size)} />
                  </StyledButtonAction>
                  <StyledButtonAction
                    onClick={() => {
                      inputRef.current?.stepDown();
                      inputRef.current?.dispatchEvent(
                        new Event('input', { bubbles: true }),
                      );
                    }}
                    type="button"
                  >
                    <ChevronDownIcon size={getIconSize(size)} />
                  </StyledButtonAction>
                </StyledActionWrapper>
              )
        }
        type="number"
      />
    </StyledWrapper>
  );
};
