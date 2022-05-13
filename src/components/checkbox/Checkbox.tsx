import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Text } from 'src/components/text/Text';
import { CheckMarkIcon } from 'src/icons/CheckMarkIcon';
import styled from 'styled-components';

// TODO: multiline checkboxes could use some work
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
  border: ${p => (!p.checked ? '1.5px solid var(--amino-gray-400)' : 'none')};
  transition: all 150ms ease-in-out;
  cursor: pointer;
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

const StyledSubtitle = styled(Text)`
  font-style: normal;
`;

const StyledLabel = styled(Text)``;

const CheckboxContainer = styled.div<{
  checked: boolean;
  multiline: boolean;
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: ${p => (p.multiline ? 'normal' : 'center')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  &.disabled {
    ${AminoCheckbox} {
      background: ${p => (p.checked ? 'var(--amino-blue-200)' : '')};
      border: ${p => (p.checked ? '2px solid var(--amino-blue-200)' : '')};
    }
    ${StyledLabel} {
      color: var(--amino-gray-500);
    }
    ${StyledSubtitle} {
      color: var(--amino-gray-400);
    }
  }
  ${AminoCheckbox} {
    transition: ${p => p.multiline && 'none'};
    margin-top: ${p => p.multiline && '4px'};
  }

  a {
    color: var(--amino-primary);
    text-decoration: underline;
  }

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: ${p => (p.multiline ? 'flex-start' : 'center')};
    margin-bottom: 0;
    color: black;
  }
  label > label {
    flex-direction: row;
  }
`;

export type CheckboxProps = {
  checked: boolean;
  onChange: (newValue: boolean) => void;
  label?: string;
  subtitle?: string;
  disabled?: boolean;
  labelComponent?: React.ReactNode;
};

export const Checkbox = ({
  checked = false,
  onChange,
  label,
  subtitle,
  disabled,
  labelComponent,
}: CheckboxProps) => {
  const htmlFor = typeof labelComponent === 'string' ? labelComponent : label;
  return (
    <CheckboxContainer
      className={['amino-input-wrapper', disabled ? 'disabled' : ''].join(' ')}
      checked={checked}
      disabled={disabled}
      multiline={!!subtitle}
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

      {htmlFor && (
        <label htmlFor={htmlFor}>
          {labelComponent || (
            <StyledLabel type="inputlabel">{label}</StyledLabel>
          )}
          {subtitle && (
            <StyledSubtitle type="subtitle">{subtitle}</StyledSubtitle>
          )}
        </label>
      )}
    </CheckboxContainer>
  );
};
