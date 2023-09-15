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

const AminoSwitchWithIcons = styled(AminoSwitch)<{ checked: boolean }>`
  height: 28px;
  width: 28px;
  top: 2px;
  left: ${p => (p.checked ? 'calc(100% - 30px)' : '2px')};
  box-shadow:
    0px -1px 1px 0px rgba(0, 0, 0, 0.2) inset,
    0px 1px 3px 0px rgba(0, 0, 0, 0.4);
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
  background: ${p => (p.checked ? theme.gray0 : theme.gray100)};
  box-shadow: ${theme.v3ShadowInset};
  display: block;
  user-select: none;
  position: relative;
`;

const AminoSwitchWrapperWithIcons = styled(AminoSwitchWrapper)`
  width: 62px;
  height: 32px;
  min-width: 24px;
  background: ${theme.gray50};
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

const SwitchIcon = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 6px;
  left: ${p => (p.left ? '5.8px' : 'auto')};
  right: ${p => (p.left ? 'auto' : '5.6px')};
  svg {
    height: 20px;
    width: 20px;
  }
`;

export type SwitchProps = {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  labelDescription?: string;
  labelIcon?: ReactNode;
  subtitle?: string;
  switchIconLeft?: ReactNode;
  switchIconRight?: ReactNode;
  onChange: (checked: boolean) => void;
};

export const Switch = ({
  checked,
  disabled,
  label,
  labelDescription,
  labelIcon,
  onChange,
  subtitle,
  switchIconLeft,
  switchIconRight,
}: SwitchProps) => {
  const labelAsHtmlAttribute = label?.replace(/\s/g, '-').toLowerCase();
  const hasIcons = Boolean(switchIconLeft || switchIconRight);

  return (
    <SwitchContainer
      checked={checked}
      className={disabled ? 'disabled' : ''}
      htmlFor={labelAsHtmlAttribute}
      onClick={() => !disabled && onChange(!checked)}
    >
      {hasIcons ? (
        <AminoSwitchWrapperWithIcons checked={checked}>
          <AminoSwitchWithIcons checked={checked} id={labelAsHtmlAttribute} />
          <SwitchIcon left>{switchIconLeft}</SwitchIcon>
          <SwitchIcon>{switchIconRight}</SwitchIcon>
        </AminoSwitchWrapperWithIcons>
      ) : (
        <AminoSwitchWrapper checked={checked}>
          <AminoSwitch checked={checked} id={labelAsHtmlAttribute} />
        </AminoSwitchWrapper>
      )}
      <div>
        <LabelWrapper>
          {labelIcon}
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
