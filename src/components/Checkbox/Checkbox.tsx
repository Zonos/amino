import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Text } from 'components/Text';

// TODO: multiline checkboxes could use some work

const AminoCheckbox = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  line-height: 18px;
  border-radius: var(--amino-radius-sm);
  background: ${p =>
    p.checked ? 'var(--amino-primary)' : 'var(--amino-input-background)'};
  border: ${p =>
    p.checked ? '2px solid var(--amino-primary)' : 'var(--amino-border)'};
  transition: all 150ms ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-shadow: var(--amino-shadow-small);
  margin-right: var(--amino-space-half);

  &:active {
    border: var(--amino-border-blue);
    box-shadow: var(--amino-glow-blue);
  }

  svg {
    color: white;
    box-shadow: var(--amino-shadow-small);
    width: 16px;
    height: 16px;
  }
`;

const CheckboxContainer = styled.div<{
  multiline: boolean;
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: ${p => (p.multiline ? 'flex-start' : 'center')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  opacity: ${props => (props.disabled ? '0.3' : '1')};

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
  checked,
  onChange,
  label,
  subtitle,
  disabled,
  labelComponent,
}: CheckboxProps) => (
  <CheckboxContainer
    className="amino-input-wrapper"
    disabled={disabled}
    multiline={!!subtitle}
    onClick={() => onChange(!checked)}
  >
    <AminoCheckbox onClick={() => onChange(!checked)} checked={checked}>
      <AnimatePresence>
        {checked && (
          <motion.svg
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            key="checkbox"
            width={10}
            height={7}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </AminoCheckbox>

    {label && (
      <label>
        <Text type="inputlabel">{labelComponent || label}</Text>
        {subtitle && <Text type="subtitle">{subtitle}</Text>}
      </label>
    )}
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  checked: false,
};
