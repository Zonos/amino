import React, { ReactNode } from 'react';

import { Indicator, Item, Root } from '@radix-ui/react-radio-group';
import styled from 'styled-components';

import { CheckIcon } from '../../icons';
import { VStack } from '../Stack';

const StyledItem = styled(Item)`
  align-items: center;
  appearance: none;
  background: white;
  border-radius: var(--amino-radius);
  border: var(--amino-border);
  display: block;
  display: flex;
  flex-direction: row;
  padding: var(--amino-space-half);
  text-align: left;
  transition: all 150ms ease-in-out;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &:focus {
    box-shadow: inset 0 0 0 2px var(--amino-blue-600);
    outline: none;
  }
`;

const Label = styled.span`
  font-weight: 500;
`;

const Subtitle = styled.span`
  opacity: 0.5;
`;

const StyledRoot = styled(Root)`
  button[data-state='checked'] {
    background: var(--amino-primary);
    border-color: transparent;
    box-shadow: 0px 0px 0px 3px var(--amino-blue-300);
    color: white;
  }
`;

const StyledIndicator = styled(Indicator)`
  align-items: center;
  background: var(--amino-blue-300);
  border-radius: 50px;
  content: ' ';
  display: flex;
  justify-content: center;
  padding: 5px;

  svg {
    box-shadow: var(--amino-shadow-small);
    color: var(--amino-blue-700);
    height: 12px;
    width: 12px;
  }
`;

const StyledItemContentDiv = styled.div`
  align-items: center;
  display: grid !important;
  grid-column-gap: var(--amino-space);
  grid-template-columns: 30px 1fr;
`;

type RichCheckboxItemType = {
  checked: boolean;
  icon?: ReactNode;
  label: ReactNode;
  subtitle?: string;
  value: string;
};

export type RichCheckboxGroupProps = {
  items: RichCheckboxItemType[];
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const RichCheckboxGroup = ({
  onClick,
  items,
}: RichCheckboxGroupProps) => (
  <StyledRoot>
    <VStack spacing="space-half">
      {items.map(item => {
        const { checked, icon, label, subtitle, value } = item;
        return (
          <StyledItem
            checked={checked}
            value={value}
            key={value}
            onMouseDown={e => onClick(e)}
          >
            <StyledItemContentDiv>
              {icon}
              <VStack spacing="none">
                <Label>{label}</Label>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
              </VStack>
            </StyledItemContentDiv>
            <StyledIndicator>
              <CheckIcon />
            </StyledIndicator>
          </StyledItem>
        );
      })}
    </VStack>
  </StyledRoot>
);
