import React from "react";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";

const AminoTabs = styled.div`
  background: var(${AminoTheme.pageBackground});
  border-radius: var(${AminoTheme.radiusLg});
  display: flex;
  align-items: center;
  border: var(${AminoTheme.border});
  padding: var(${AminoTheme.spaceQuarter});
  box-shadow: var(${AminoTheme.shadowInset});
`;

const Tab = styled.div`
  flex: 1;
  padding: var(${AminoTheme.spaceHalf}) 0;
  cursor: pointer;
  text-align: center;
  transition: all 150ms ease-in-out;
  font-weight: 500;
  border-radius: var(${AminoTheme.radius});
  color: var(${AminoTheme.gray700});
  user-select: none;

  &.is-selected {
    background: white;
    box-shadow: var(${AminoTheme.shadowMedium});
    color: var(${AminoTheme.primary});
  }

  &:not(.is-selected):hover {
    color: var(${AminoTheme.gray900});
    background: rgba(0, 0, 0, 0.03);
  }

  & + & {
    margin-left: var(${AminoTheme.spaceHalf});
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
