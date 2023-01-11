import { ReactNode } from 'react';

import { VStack } from 'src/components/stack/VStack';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { theme } from 'src/styles/constants/theme';
import { type StyledProps } from 'src/types/StyledProps';
import styled from 'styled-components';

const StyledRichCheckbox = styled.button`
  position: relative;
  appearance: none;
  background: white;
  padding: ${theme.spaceHalf};
  padding-right: ${theme.spaceDouble};
  border: ${theme.border};
  border-radius: ${theme.radius};
  text-align: left;
  transition: all 150ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background: ${theme.grayL80};
    border: 1px solid ${theme.grayL60};
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.blueL40};
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
    background: ${theme.blueL80};
    border: 1px solid ${theme.blueL40};
    color: ${theme.blueBase};
  }
  svg {
    color: white;
    width: 12px;
    height: 12px;
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  right: ${theme.spaceHalf};
  background: ${theme.blueBase};
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
  grid-column-gap: ${theme.space};
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

export const RichCheckbox = ({ onClick, items }: RichCheckboxProps) => (
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
              <CheckmarkIcon />
            </StyledIcon>
          )}
        </StyledRichCheckbox>
      );
    })}
  </StyledVStack>
);
