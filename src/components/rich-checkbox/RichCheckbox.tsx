import React, { ReactNode } from 'react';

import { VStack } from 'src/components/stack/VStack';
import { CheckMarkIcon } from 'src/icons/CheckMarkIcon';
import { type StyledProps } from 'src/types/StyledProps';
import styled from 'styled-components';

const StyledRichCheckbox = styled.button`
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

const Label = styled.span`
  font-weight: 500;
`;

const Subtitle = styled.span`
  opacity: 0.5;
`;

const StyledVStack = styled(VStack)`
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

const StyledIcon = styled.div`
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

const StyledItemContentDiv = styled.div<StyledItemContentDivProps>`
  align-items: center;
  display: grid !important;
  grid-column-gap: var(--amino-space);
  ${({ $icon }) => $icon && `grid-template-columns: 30px 1fr;`}
`;

type StyledItemContentDivProps = StyledProps<RichCheckboxItemType>;

type RichCheckboxItemType = {
  checked: boolean;
  icon?: ReactNode;
  label: ReactNode;
  subtitle?: string;
  value: string;
};

export type RichCheckboxProps = {
  items: RichCheckboxItemType[];
  onClick: (newVal: string) => void;
};

export const RichCheckbox = ({ onClick, items }: RichCheckboxProps) => {
  return (
    <StyledVStack spacing="space-half">
      {items.map(item => {
        const { checked, icon, label, subtitle, value } = item;
        return (
          <StyledRichCheckbox
            data-state={checked ? 'checked' : ''}
            value={value}
            key={value}
            onClick={e => onClick(e.currentTarget.value)}
          >
            <StyledItemContentDiv $icon={!!icon}>
              {icon && icon}
              <VStack spacing="none">
                <Label>{label}</Label>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
              </VStack>
            </StyledItemContentDiv>
            {checked && (
              <StyledIcon>
                <CheckMarkIcon />
              </StyledIcon>
            )}
          </StyledRichCheckbox>
        );
      })}
    </StyledVStack>
  );
};
