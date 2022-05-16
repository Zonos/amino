import React, { ReactNode } from 'react';

import { Text } from 'src/components/Text/Text';
import styled from 'styled-components';

const AminoSwitch = styled.div<{ checked: boolean }>`
  background: white;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  transition: 0.5s all ease;
  position: absolute;
  top: 2px;
  left: ${p => (p.checked ? 'calc(100% - 14px)' : '2px')}; ;
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

const StyledLabel = styled(Text)``;

const StyledSubtitle = styled(Text)``;

const StyledLabelDescription = styled.span`
  margin-left: 4px;
  color: var(--amino-gray-500);
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 16px;

  svg {
    margin-right: 4px;
  }
`;

const SwitchContainer = styled.label<{
  checked: boolean;
}>`
  display: flex;
  flex-direction: row;
  cursor: pointer;

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

    cursor: not-allowed;
  }
`;

export type SwitchProps = {
  checked: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  label?: string;
  labelDescription?: string;
  onChange: (checked: boolean) => void;
  subtitle?: string;
};

export const Switch = ({
  checked,
  disabled,
  icon,
  label,
  labelDescription,
  onChange,
  subtitle,
}: SwitchProps) => {
  return (
    <SwitchContainer
      className={disabled ? 'disabled' : ''}
      checked={checked}
      htmlFor={label}
      onClick={() => !disabled && onChange(!checked)}
    >
      <AminoSwitchWrapper checked={checked}>
        <AminoSwitch checked={checked} id={label} />
      </AminoSwitchWrapper>

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
    </SwitchContainer>
  );
};
