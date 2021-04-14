import React from "react";
import styled from "styled-components";

const AminoTabs = styled.div`
  display: flex;
  align-items: center;
  border: var(--amino-border);
  background: var(--amino-surface-color);
  border-radius: var(--amino-radius-lg);
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
  box-sizing: border-box;
  border-bottom: var(--amino-radius) solid transparent;

  &.is-selected {
    color: var(--amino-primary);
    border-bottom: var(--amino-radius) solid var(--amino-primary);
  }

  &:first-of-type {
    border-bottom-left-radius: var(--amino-radius-lg);
  }
  &:last-of-type {
    border-bottom-right-radius: var(--amino-radius-lg);
  }

  & + & {
    border-left: var(--amino-border);
  }

  &:not(.is-selected):hover {
    color: var(--amino-gray-900);
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
      {items.map((item) => (
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
