import { ReactNode, useEffect, useState } from 'react';
import ReactTooltip, { type TooltipProps } from 'react-tooltip';

import { VStack } from 'src/components/stack/VStack';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const StyledIcon = styled.div`
  position: absolute;
  content: ' ';
  right: ${theme.space16};
  background: ${theme.gray400};
  border-radius: 50px;
  padding: 5px;
  svg {
    color: white;
  }
`;
const StyledActiveIcon = styled.div`
  position: absolute;
  right: ${theme.space16};
  background: ${theme.blue600};
  content: ' ';
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledItem = styled.button`
  position: relative;
  appearance: none;
  background: white;
  padding: ${theme.space16};
  padding-right: calc(${theme.space40} + 10px);
  border: ${theme.border};
  border-radius: ${theme.radius6};
  text-align: left;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  &:hover {
    background: ${theme.gray100};
    border: 1px solid ${theme.gray200};
    ${StyledIcon} {
      background: ${theme.gray600};
    }
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.blue300};
  }
  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const Subtitle = styled.span`
  opacity: 0.5;
`;

const Label = styled.span`
  font-weight: 500;
`;

const StyledRadioGroup = styled(VStack)`
  ${StyledItem}[data-state='checked'] {
    background: ${theme.blue100};
    border: 1px solid ${theme.blue300};
    color: ${theme.blue600};
  }
  svg {
    color: white;
    width: 12px;
    height: 12px;
  }
`;
const StyledTooltip = styled(ReactTooltip)`
  && {
    max-width: 350px;
    border-radius: 10px;
  }
`;

export type RichRadioItemType<T extends string> = {
  label: ReactNode;
  subtitle?: string;
  value: T;
  disabled?: boolean;
  tooltip?: string;
  tooltipSetting?: Omit<TooltipProps, 'title' | 'children'>;
};

export type RichRadioProps<T extends string = string> = {
  onChange: (value: T) => void;
  renderCustomText?: (option: RichRadioItemType<T>) => ReactNode;
  items: RichRadioItemType<T>[];
  value: T | null;
  className?: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
};

export const RichRadio = <T extends string>({
  onChange,
  renderCustomText,
  items,
  value,
  icon,
  className,
  activeIcon,
}: RichRadioProps<T>) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleChange = (v: T) => {
    setSelectedValue(v);
    onChange(v);
  };

  return (
    <StyledRadioGroup spacing="space-half" className={className}>
      {items.map(item => (
        <StyledItem
          type="button"
          key={item.value}
          data-tip={item.tooltip}
          data-disabled={item.disabled}
          onClick={() => {
            handleChange(item.value);
          }}
          data-state={item.value === selectedValue ? 'checked' : ''}
        >
          {item.tooltip && (
            <StyledTooltip
              effect="solid"
              arrowColor="transparent"
              {...item.tooltipSetting}
            />
          )}
          {renderCustomText ? (
            renderCustomText(item)
          ) : (
            <div>
              <Label>{item.label}</Label>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
            </div>
          )}
          {!!icon && <StyledIcon>{icon || <CheckmarkIcon />}</StyledIcon>}
          {item.value === selectedValue && (
            <StyledActiveIcon>
              {activeIcon || <CheckmarkIcon />}
            </StyledActiveIcon>
          )}
        </StyledItem>
      ))}
    </StyledRadioGroup>
  );
};
