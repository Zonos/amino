import React, { ReactNode } from 'react';

import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import styled from 'styled-components';

import { VStack } from 'components/Stack';
import { CheckIcon } from 'icons';

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

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--amino-blue-600);
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
    background: var(--amino-primary);
    color: white;
    box-shadow: 0px 0px 0px 3px var(--amino-blue-300);
    border-color: transparent;
  }
  svg {
    color: var(--amino-blue-700);
    width: 12px;
    height: 12px;
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  content: ' ';
  right: var(--amino-space-half);
  background: var(--amino-blue-300);
  border-radius: 50px;
  padding: 5px;
`;

const StyledIndicator = styled(Indicator)`
  position: absolute;
  right: var(--amino-space-half);
  background: var(--amino-blue-300);
  content: ' ';
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type RichRadioItemType = {
  label: ReactNode;
  subtitle?: string;
  value: string;
};

export type RichRadioProps = {
  onChange: (newVal: string) => void;
  items: RichRadioItemType[];
  value: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
};

export const RichRadio = ({
  onChange,
  items,
  value,
  icon,
  activeIcon,
}: RichRadioProps) => {
  return (
    <StyledRoot onValueChange={onChange} value={value}>
      <VStack spacing="space-half">
        {items.map(item => (
          <StyledItem value={item.value} key={item.value}>
            <div>
              <Label>{item.label}</Label>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
            </div>
            {!!icon && <StyledIcon>{icon || <CheckIcon />}</StyledIcon>}
            <StyledIndicator>{activeIcon || <CheckIcon />}</StyledIndicator>
          </StyledItem>
        ))}
      </VStack>
    </StyledRoot>
  );
};
