import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledRadio = styled.div<{
  checked: boolean;
}>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${p => (p.checked ? theme.primary : theme.inputBackground)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: ${p => (!p.checked ? `1.5px solid ${theme.grayL20}` : 'none')};
  margin-right: ${theme.spaceQuarter};
  transition: ${theme.transition};

  &:active {
    box-shadow: ${theme.glowBlue};
  }

  svg {
    color: white;
    width: 8px;
    height: 8px;
  }
`;

const StyledText = styled(Text)`
  margin-bottom: 0;
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
      background: ${p => p.checked && theme.blueL40};
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
    color: ${props => (props.disabled ? theme.grayL40 : 'black')};
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
    {label && <StyledText type="input-label">{label}</StyledText>}
  </RadioContainer>
);
