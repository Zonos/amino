import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';

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
  border: ${p => (!p.checked ? `1.5px solid ${theme.gray400}` : 'none')};
  box-shadow: ${p => (p.checked ? theme.shadowButtonPrimary : 'none')};
  margin-right: ${theme.space8};
  transition: ${theme.transition};

  svg {
    color: ${theme.gray0};
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
      background: ${p => p.checked && theme.blue300};
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
    color: ${props => (props.disabled ? theme.gray300 : 'black')};
  }
`;

export type RadioProps = {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
};

export const Radio = ({ checked, disabled, label, onChange }: RadioProps) => (
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
            key="radio"
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            fill="currentColor"
            initial={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
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
