import { MouseEvent, ReactNode, useMemo } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import { getTestId } from 'src/utils/getTestId';
import styled from 'styled-components';

const AnimatedCheckIcon = motion(CheckmarkIcon);

const AminoCheckbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  min-width: 16px;
  min-height: 16px;
  line-height: 16px;
  border-radius: ${theme.radiusSm};
  background: ${p => (p.checked ? theme.primary : theme.inputBackground)};
  border: ${p => (!p.checked ? `1.5px solid ${theme.grayL20}` : 'none')};
  transition: all 150ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin-right: 8px;

  &:active {
    box-shadow: ${theme.glowBlue};
  }

  svg {
    color: white;
    box-shadow: ${theme.v3ShadowBase};
    width: 14px;
    height: 14px;
  }
`;

const StyledSubtitle = styled(Text)``;

const StyledLabelDescription = styled.span`
  margin-left: 4px;
  color: ${theme.grayBase};
`;

const StyledLabel = styled(Text)`
  margin-bottom: 0;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 16px;

  svg {
    margin-right: 4px;
  }
`;

const CheckboxContainer = styled.label<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  user-select: none;
  cursor: pointer;

  &.disabled {
    ${AminoCheckbox} {
      background: ${p => (p.checked ? theme.blueL60 : '')};
      border: ${p =>
        p.checked
          ? `2px solid ${theme.blueL60}`
          : `1.5px solid ${theme.grayL40}`};
      &:active {
        box-shadow: none;
      }
    }
    ${StyledLabel} {
      color: ${theme.grayBase};
    }
    ${StyledSubtitle} {
      color: ${theme.grayL20};
    }
    ${LabelWrapper} {
      svg {
        opacity: 0.6;
      }
    }

    cursor: not-allowed;
  }
`;

export type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  label?: string;
  labelComponent?: ReactNode;
  labelDescription?: string;
  onChange: (checked: boolean, event: MouseEvent<HTMLLabelElement>) => void;
  subtitle?: string;
};

export const Checkbox = ({
  checked = false,
  disabled,
  icon,
  label,
  labelComponent,
  labelDescription,
  onChange,
  subtitle,
}: CheckboxProps) => {
  const testId = useMemo(
    () => getTestId({ componentName: 'checkbox', name: label }),
    [label]
  );
  return (
    <CheckboxContainer
      data-testid={testId}
      className={['amino-input-wrapper', disabled ? 'disabled' : ''].join(' ')}
      checked={checked}
      htmlFor={label}
      onClick={e => !disabled && onChange(!checked, e)}
    >
      <AminoCheckbox checked={checked} id={label}>
        <AnimatePresence>
          {checked && (
            <AnimatedCheckIcon
              transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.35 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              key="checkbox"
            />
          )}
        </AnimatePresence>
      </AminoCheckbox>

      {labelComponent || (
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
      )}
    </CheckboxContainer>
  );
};
