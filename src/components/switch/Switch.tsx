import { ReactNode } from 'react';

import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const AminoSwitch = styled.div<{ checked: boolean }>`
  background: white;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  transition: 0.2s all ease;
  position: absolute;
  top: 2px;
  left: ${p => (p.checked ? 'calc(100% - 14px)' : '2px')}; ;
`;
const AminoSwitchWrapper = styled.div<{
  checked: boolean;
}>`
  margin-right: ${theme.space16};
  width: 24px;
  height: 16px;
  min-width: 24px;
  min-height: 16px;
  line-height: 16px;
  border-radius: 20px;
  transition: 0.5s all ease;
  background: ${p => (p.checked ? theme.primary : theme.gray400)};
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
      background: ${p => (p.checked ? theme.gray300 : '')};
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
}: SwitchProps) => (
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
            <StyledLabelDescription>{labelDescription}</StyledLabelDescription>
          )}
        </StyledLabel>
      </LabelWrapper>
      {subtitle && <StyledSubtitle type="subtitle">{subtitle}</StyledSubtitle>}
    </div>
  </SwitchContainer>
);
