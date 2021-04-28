import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Root, Item, Indicator } from '@radix-ui/react-radio-group';

import { VStack } from 'components/Stack';
import { CheckIcon } from 'icons';

const StyledItem = styled(Item)`
  appearance: none;
  display: block;
  background: white;
  padding: var(--amino-space-half);
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
`;

const StyledIndicator = styled(Indicator)`
  background: var(--amino-blue-300);
  content: ' ';
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    width: 12px;
    height: 12px;
    box-shadow: var(--amino-shadow-small);
  }
`;

type RichRadioItemType = {
  label: ReactNode;
  subtitle?: string;
  value: string;
};

export type RichRadioProps = {
  onChange: (newVal: string) => {};
  items: RichRadioItemType[];
  value?: string;
  defaultValue?: string;
};

export const RichRadio = ({
  defaultValue,
  value,
  onChange,
  items,
}: RichRadioProps) => (
  <StyledRoot
    defaultValue={defaultValue}
    value={value}
    onValueChange={e => onChange(e.target.value)}
  >
    <VStack spacing="space-half">
      {items.map(item => (
        <StyledItem value={item.value} key={item.value}>
          <div>
            <Label>{item.label}</Label>
            {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
          </div>
          <StyledIndicator>
            <CheckIcon />
          </StyledIndicator>
        </StyledItem>
      ))}
    </VStack>
  </StyledRoot>
);
