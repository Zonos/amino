import type { ReactNode } from 'react';

import styled from 'styled-components';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';

const AminoSwitch = styled.div<{ checked: boolean }>`
  background: ${theme.gray0};
  box-shadow: ${p =>
    p.checked
      ? '0px -1px 1px 0px rgba(68, 94, 238, 0.08) inset, 0px 1px 3px 0px rgba(0, 0, 0, 0.20)'
      : '0px -1px 1px 0px rgba(0, 0, 0, 0.08) inset, 0px 1px 3px 0px rgba(0, 0, 0, 0.20)'};
  height: 14px;
  width: 14px;
  border-radius: 50%;
  transition: ${theme.transition};
  position: absolute;
  top: 1px;
  left: ${p => (p.checked ? 'calc(100% - 15px)' : '1px')};
  [data-theme='night'] & {
    background: ${theme.gray1200};
  }
`;

const AminoSwitchWrapper = styled.div<{
  checked: boolean;
}>`
  margin-right: ${theme.space16};
  width: 32px;
  height: 16px;
  min-width: 32px;
  min-height: 16px;
  line-height: 16px;
  border-radius: 20px;
  background: ${p => (p.checked ? theme.primary : theme.gray100)};
  box-shadow: ${theme.v3ShadowInset};
  display: block;
  user-select: none;
  margin-right: ${theme.space16};
  position: relative;
`;

const StyledLabel = styled(Text)`
  margin-bottom: 0;
`;

const StyledSubtitle = styled(Text)``;

const StyledLabelDescription = styled.span`
  margin-left: 4px;
  color: ${theme.gray600};
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
      opacity: 0.6;
    }
    ${AminoSwitch} {
      opacity: 0.95;
    }
    ${StyledLabel} {
      color: ${theme.gray600};
    }
    ${StyledSubtitle} {
      color: ${theme.gray400};
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
  subtitle?: string;
  onChange: (checked: boolean) => void;
};

export const Switch = ({
  checked,
  disabled,
  icon,
  label,
  labelDescription,
  onChange,
  subtitle,
}: SwitchProps) => (
  <SwitchContainer
    checked={checked}
    className={disabled ? 'disabled' : ''}
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
            <StyledLabelDescription>{labelDescription}</StyledLabelDescription>
          )}
        </StyledLabel>
      </LabelWrapper>
      {subtitle && <StyledSubtitle type="subtitle">{subtitle}</StyledSubtitle>}
    </div>
  </SwitchContainer>
);
