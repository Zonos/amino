import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Text } from 'src/components/Text/Text';
import styled from 'styled-components';

const StyledRadio = styled.div<{
  checked: boolean;
}>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${p =>
    p.checked ? 'var(--amino-primary) ' : 'var(--amino-input-background)'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: ${p => (!p.checked ? '1.5px solid var(--amino-gray-400)' : 'none')};
  margin-right: var(--amino-space-quarter);
  transition: var(--amino-transition);

  &:active {
    box-shadow: var(--amino-glow-blue);
  }

  svg {
    color: white;
    width: 8px;
    height: 8px;
  }
`;

const RadioContainer = styled.div<{
  checked: boolean;
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &.disabled {
    cursor: not-allowed;
    & > div {
      background: ${p => p.checked && 'var(--amino-blue-300)'};
      cursor: not-allowed;
    }
    label {
      cursor: not-allowed;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 0;
    color: ${props => (props.disabled ? 'var(--amino-gray-300)' : 'black')};
  }
`;

export type RadioProps = {
  disabled?: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export const Radio = ({ disabled, label, checked, onChange }: RadioProps) => (
  <RadioContainer
    checked={checked}
    className={disabled ? 'disabled' : ''}
    disabled={disabled}
    onClick={() => !disabled && onChange(!checked)}
  >
    <StyledRadio checked={checked}>
      <AnimatePresence>
        {checked && (
          <motion.svg
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            key="radio"
            fill="currentColor"
            viewBox="0 0 10 10"
          >
            <circle cx="5" cy="5" r="5" />
          </motion.svg>
        )}
      </AnimatePresence>
    </StyledRadio>
    {label && <Text type="input-label">{label}</Text>}
  </RadioContainer>
);
