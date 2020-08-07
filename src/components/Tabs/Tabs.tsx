import React from "react";
import styled from "styled-components";

const AminoTabs = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--amino-border);
`;

const Tab = styled.div`
  flex: 1;
  padding: var(--amino-space-half) 0;
  cursor: pointer;
  text-align: center;
  transition: all 150ms ease-in-out;
  font-weight: 500;
  color: var(--amino-gray-900);
  user-select: none;
  border-bottom: 3px solid transparent;

  &.is-selected {
    color: var(--amino-primary);
    border-bottom: 3px solid var(--amino-primary);
  }

  &:not(.is-selected):hover {
    color: var(--amino-gray-900);
    background: rgba(0, 0, 0, 0.03);
  }

  & + & {
    margin-left: var(--amino-space-half);
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
