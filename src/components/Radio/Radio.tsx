import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Text } from 'components/Text';

const StyledRadio = styled.div<{ checked: boolean }>`
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
  border: ${p => (p.checked ? '2px solid var(--amino-primary)' : 'none')};
  margin-right: var(--amino-space-half);
  transition: var(--amino-transition);
  box-shadow: var(--amino-shadow-small);
  border: var(--amino-border);

  &:active {
    box-shadow: var(--amino-glow-blue);
  }

  svg {
    color: white;
    box-shadow: var(--amino-shadow-small);
    width: 8px;
    height: 8px;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;

  label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 0;
  }
`;

export type RadioProps = {
  checked: boolean;
  onChange?: any;
  label?: string;
};

export const Radio = ({ label, checked, onChange }: RadioProps) => (
  <RadioContainer onClick={() => onChange(!checked)}>
    <StyledRadio checked={checked} onClick={() => onChange(!checked)}>
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
    {label && <Text type="inputlabel">{label}</Text>}
  </RadioContainer>
);

Radio.defaultProps = {
  checked: false,
};
