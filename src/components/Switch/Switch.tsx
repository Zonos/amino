import React from 'react';

import styled from 'styled-components';

import { Text } from 'components/Text';

const AminoSwitch = styled.div<{ checked: boolean }>`
  background: white;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  transition: 0.5s all ease;
  position: absolute;
  top: 1px;
  left: ${p => (p.checked ? 'calc(100% - 15px)' : '1px')}; ;
`;
const AminoSwitchWrapper = styled.div<{
  checked: boolean;
}>`
  margin-right: var(--amino-space-half);
  width: 24px;
  height: 16px;
  min-width: 24px;
  min-height: 16px;
  line-height: 16px;
  border-radius: 20px;
  transition: 0.5s all ease;
  background: ${p =>
    p.checked ? 'var(--amino-primary)' : 'var(--amino-gray-400)'};
  display: block;
  user-select: none;
  margin-right: var(--amino-space-half);
  position: relative;
`;

const StyledSubtitle = styled(Text)`
  font-style: normal;
`;
const StyledLabel = styled(Text)``;

const SwitchContainer = styled.div<{
  checked: boolean;
  disabled?: boolean;
  multiline?: boolean;
}>`
  display: flex;
  flex-direction: row;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'auto')};
  align-items: ${p => (p.multiline ? 'normal' : 'center')};
  pointer-events: ${p => (p.disabled ? 'none' : 'auto')};
  &.disabled {
    ${AminoSwitchWrapper} {
      background: ${p => (p.checked ? 'var(--amino-gray-300)' : '')};
    }
    ${StyledLabel} {
      color: var(--amino-gray-500);
    }
    ${StyledSubtitle} {
      color: var(--amino-gray-400);
    }
  }
  ${AminoSwitchWrapper} {
    margin-top: ${p => (p.multiline ? '4px' : '')};
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: ${p => (p.multiline ? 'flex-start' : 'center')};
    margin-bottom: 0;
    color: black;
    cursor: ${p => (p.disabled ? 'not-allowed' : 'auto')};
  }
`;

export type SwitchProps = {
  checked: boolean;
  onChange: (newValue: boolean) => void;
  label?: string;
  subtitle?: string;
  disabled?: boolean;
};

export const Switch = ({
  checked,
  onChange,
  label,
  subtitle,
  disabled,
}: SwitchProps) => (
  <SwitchContainer
    className={disabled ? 'disabled' : ''}
    checked={checked}
    disabled={disabled}
    multiline={!!subtitle}
    onClick={() => !disabled && onChange(!checked)}
  >
    <AminoSwitchWrapper checked={checked}>
      <AminoSwitch checked={checked} id={label} />
    </AminoSwitchWrapper>

    {label && (
      <label htmlFor={label}>
        <StyledLabel type="inputlabel">{label}</StyledLabel>
        {subtitle && (
          <StyledSubtitle type="subtitle">{subtitle}</StyledSubtitle>
        )}
      </label>
    )}
  </SwitchContainer>
);
