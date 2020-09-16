import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

const AminoTabs = styled.div`
  display: flex;
  align-items: center;
  border: var(${AminoTheme.border});
  background: white;
  border-radius: var(${AminoTheme.radiusLg});
`;

const Tab = styled.div`
  flex: 1;
  padding: var(${AminoTheme.spaceHalf}) 0;
  cursor: pointer;
  text-align: center;
  transition: all 150ms ease-in-out;
  font-weight: 500;
  color: var(${AminoTheme.gray900});
  user-select: none;
  box-sizing: border-box;
  border-bottom: var(${AminoTheme.radius}) solid transparent;

  &.is-selected {
    color: var(${AminoTheme.primary});
    border-bottom: var(${AminoTheme.radius}) solid var(${AminoTheme.primary});
  }

  &:first-of-type {
    border-bottom-left-radius: var(${AminoTheme.radiusLg});
  }
  &:last-of-type {
    border-bottom-right-radius: var(${AminoTheme.radiusLg});
  }

  & + & {
    border-left: var(${AminoTheme.border});
  }

  &:not(.is-selected):hover {
    color: var(${AminoTheme.gray900});
    background: rgba(0, 0, 0, 0.03);
  }
`;

type Props = {
  selected: number;
  onChange: (selectedTab: number) => void;
  items: string[];
};

export const Tabs: React.FC<Props> = ({ selected, onChange, items }) => {
  return (
    <AminoTabs>
      {items.map(item => (
        <Tab
          onClick={() => onChange(items.indexOf(item))}
          className={selected === items.indexOf(item) ? "is-selected" : ""}
          key={item}
        >
          {item}
        </Tab>
      ))}
    </AminoTabs>
  );
};
