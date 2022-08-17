import React from 'react';

import { theme } from 'src/styles/constants/theme';
import styled from 'styled-components';

const AminoTabs = styled.div`
  display: flex;
  align-items: center;
  border: ${theme.border};
  background: ${theme.surfaceColor};
  border-radius: ${theme.radiusLg};
`;

const Tab = styled.div`
  flex: 1;
  padding: ${theme.spaceHalf} 0;
  cursor: pointer;
  text-align: center;
  transition: all 150ms ease-in-out;
  font-weight: 500;
  color: ${theme.grayD80};
  user-select: none;
  box-sizing: border-box;
  border-bottom: ${theme.radius} solid transparent;

  &.is-selected {
    color: ${theme.primary};
    border-bottom: ${theme.radius} solid ${theme.primary};
  }

  &:first-of-type {
    border-bottom-left-radius: ${theme.radiusLg};
  }
  &:last-of-type {
    border-bottom-right-radius: ${theme.radiusLg};
  }

  & + & {
    border-left: ${theme.border};
  }

  &:not(.is-selected):hover {
    color: ${theme.grayD80};
    background: rgba(0, 0, 0, 0.03);
  }
`;

export type TabsProps = {
  selected: number;
  onChange: (selectedTab: number) => void;
  items: string[];
};

export const Tabs = ({ selected, onChange, items }: TabsProps) => {
  return (
    <AminoTabs>
      {items.map(item => (
        <Tab
          onClick={() => onChange(items.indexOf(item))}
          className={selected === items.indexOf(item) ? 'is-selected' : ''}
          key={item}
        >
          {item}
        </Tab>
      ))}
    </AminoTabs>
  );
};
