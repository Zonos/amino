import React, { ReactNode } from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import styled from 'styled-components';

import { VStack } from 'components/Stack';
import { CheckMarkIcon } from 'icons';

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

const StyledIndicator = styled(Indicator)`
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

const StyledItem = styled(Item)`
  position: relative;
  appearance: none;
  background: white;
  padding: var(--amino-space-half);
  padding-right: var(--amino-space-double);
  border: var(--amino-border);
  border-radius: var(--amino-radius);
  text-align: left;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
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

const StyledRoot = styled(Root)`
  button[data-state='checked'] {
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

type RichRadioItemType = {
  label: ReactNode;
  subtitle?: string;
  value: string;
  tooltip?: string;
  tooltipSetting?: TooltipProps;
};

export type RichRadioProps = {
  onChange: (newVal: string) => void;
  renderCustomText?: (option: RichRadioItemType) => ReactNode;
  items: RichRadioItemType[];
  value: string;
  className?: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
};

export const RichRadio = ({
  onChange,
  renderCustomText,
  items,
  value,
  icon,
  className,
  activeIcon,
}: RichRadioProps) => {
  return (
    <StyledRoot className={className} onValueChange={onChange} value={value}>
      <VStack spacing="space-half">
        {items.map(item => (
          <StyledItem
            value={item.value}
            data-tip={item.tooltip}
            key={item.value}
          >
            {item.tooltip && (
              <ReactTooltip {...{ effect: 'solid', ...item.tooltipSetting }} />
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
            <StyledIndicator>{activeIcon || <CheckMarkIcon />}</StyledIndicator>
          </StyledItem>
        ))}
      </VStack>
    </StyledRoot>
  );
};
