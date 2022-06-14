import React, { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Text } from 'src/components/text/Text';
import { CheckMarkIcon } from 'src/icons/CheckMarkIcon';
import styled from 'styled-components';

const AnimatedCheckIcon = motion(CheckMarkIcon);

const AminoCheckbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  line-height: 16px;
  border-radius: var(--amino-radius-sm);
  background: ${p =>
    p.checked ? 'var(--amino-primary)' : 'var(--amino-input-background)'};
  border: ${p => (!p.checked ? '1.5px solid var(--amino-gray-l20)' : 'none')};
  transition: all 150ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-right: 8px;

  &:active {
    box-shadow: var(--amino-glow-blue);
  }

  svg {
    color: white;
    box-shadow: var(--amino-shadow-small);
    width: 14px;
    height: 14px;
  }
`;

const StyledSubtitle = styled(Text)``;

const StyledLabelDescription = styled.span`
  margin-left: 4px;
  color: var(--amino-gray-500);
`;

const StyledLabel = styled(Text)`
  margin-bottom: 0;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 16px;

  svg {
    margin-right: 4px;
  }
`;

const CheckboxContainer = styled.label<{
  checked: boolean;
}>`
  display: flex;
  flex-direction: row;
  user-select: none;
  cursor: pointer;

  &.disabled {
    ${AminoCheckbox} {
      background: ${p => (p.checked ? 'var(--amino-blue-200)' : '')};
      border: ${p =>
        p.checked
          ? '2px solid var(--amino-blue-200)'
          : '1.5px solid var(--amino-gray-l40)'};
      &:active {
        box-shadow: none;
      }
    }
    ${StyledLabel} {
      color: var(--amino-gray-500);
    }
    ${StyledSubtitle} {
      color: var(--amino-gray-400);
    }
    ${LabelWrapper} {
      svg {
        opacity: 0.6;
      }
    }

    cursor: not-allowed;
  }
`;

export type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  label: string;
  labelComponent?: ReactNode;
  labelDescription?: string;
  onChange: (checked: boolean) => void;
  subtitle?: string;
};

export const Checkbox = ({
  checked = false,
  disabled,
  icon,
  label,
  labelComponent,
  labelDescription,
  onChange,
  subtitle,
}: CheckboxProps) => {
  return (
    <CheckboxContainer
      className={['amino-input-wrapper', disabled ? 'disabled' : ''].join(' ')}
      checked={checked}
      htmlFor={label}
      onClick={() => !disabled && onChange(!checked)}
    >
      <AminoCheckbox checked={checked} id={label}>
        <AnimatePresence>
          {checked && (
            <AnimatedCheckIcon
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              key="checkbox"
            />
          )}
        </AnimatePresence>
      </AminoCheckbox>

      {labelComponent || (
        <div>
          <LabelWrapper>
            {icon}
            <StyledLabel type="input-label">
              {label}
              {labelDescription && (
                <StyledLabelDescription>
                  {labelDescription}
                </StyledLabelDescription>
              )}
            </StyledLabel>
          </LabelWrapper>
          {subtitle && (
            <StyledSubtitle type="subtitle">{subtitle}</StyledSubtitle>
          )}
        </div>
      )}
    </CheckboxContainer>
  );
};
