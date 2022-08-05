import React, { ReactNode, useState } from 'react';
import ReactTooltip, { type TooltipProps } from 'react-tooltip';

import { VStack } from 'src/components/stack/VStack';
import { CheckMarkIcon } from 'src/icons/CheckMarkIcon';
import styled from 'styled-components';

const StyledIcon = styled.div`
  position: absolute;
  content: ' ';
  right: var(--amino-space-half);
  background: var(--amino-gray-400);
  border-radius: 50px;
  padding: 5px;
  svg {
    color: white;
  }
`;
const StyledActiveIcon = styled.div`
  position: absolute;
  right: var(--amino-space-half);
  background: var(--amino-blue-500);
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
  padding: var(--amino-space-half);
  padding-right: calc(var(--amino-space-double) + 10px);
  border: var(--amino-border);
  border-radius: var(--amino-radius);
  text-align: left;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  &:hover {
    background: var(--amino-gray-100);
    border: 1px solid var(--amino-gray-200);
    ${StyledIcon} {
      background: var(--amino-gray-500);
    }
  }

  &:focus {
    outline: none;
    border: 1px solid var(--amino-blue-300);
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
    background: var(--amino-blue-100);
    border: 1px solid var(--amino-blue-300);
    color: var(--amino-blue-500);
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

type RichRadioItemType<T extends string> = {
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
  value: T;
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

  const handleChange = (v: T) => {
    setSelectedValue(v);
    onChange(v);
  };

  return (
    <StyledRadioGroup spacing="space-half" className={className}>
      {items.map(item => (
        <StyledItem
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
          {!!icon && <StyledIcon>{icon || <CheckMarkIcon />}</StyledIcon>}
          {item.value === selectedValue && (
            <StyledActiveIcon>
              {activeIcon || <CheckMarkIcon />}
            </StyledActiveIcon>
          )}
        </StyledItem>
      ))}
    </StyledRadioGroup>
  );
};
