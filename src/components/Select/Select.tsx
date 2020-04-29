import React, { useEffect, useState } from "react";
import { useSelect } from "downshift";
import styled from "styled-components";

import { Text, TextStyle } from "../Text";
import { Menu, MenuItem } from "../Menu";
import { DropdownIcon } from "../../icons/DropdownIcon";
import { Depth, Surface } from "../../primitives";
import { DropdownAnimation } from "../../animations";

const DropdownContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(--amino-space-half);
    top: 41px;
    pointer-events: none;
    color: var(--amino-text-color);
    width: 16px;
    height: 16px;
    opacity: 0.3;
    transition: opacity 100ms ease-in-out;
  }

  &:hover svg {
    opacity: 0.6;
  }

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }
`;

const DropdownTrigger = styled.button`
  border-radius: var(--amino-radius);
  outline: none !important;
  box-sizing: border-box;
  transition: var(--amino-transition);
  display: block;
  height: 38px;
  width: 100%;
  padding: 0 var(--amino-space-half);
  background: var(--amino-input-background);
  border: 1px solid var(--amino-border-color);
  box-shadow: var(--amino-shadow-small);
  text-align: left;

  &:focus {
    outline: none;
    border: 1px solid var(--amino-blue-lighter);
    box-shadow: var(--amino-shadow-glow);
  }
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  border: 1px solid var(--amino-border-color);
  z-index: 10;
  position: absolute;
  padding: var(--amino-radius) 0;
  margin-top: var(--amino-space-quarter);
  right: 0;
  min-width: 100%;
  width: max-content;
  outline: none !important;
  max-height: 350px;
  overflow-y: auto;

  ul {
    outline: none !important;
  }
`;

const DropdownItem = styled(MenuItem)<any>`
  background: ${p =>
    p.isSelected ? "var(--amino-hover-color)" : "var(--amino-surface-color)"};
  color: ${p =>
    p.isSelected ? "var(--amino-primary)" : "var(--amino-text-color)"};
  font-weight: ${p => (p.isSelected ? "500" : "normal")};
`;

const Placeholder = styled.div`
  color: var(--amino-text-color);
  opacity: 0.3;
`;

type Props = {
  items: Array<any>;
  label: string;
  helpText?: string;
  onChange: (newValue: string) => any;
  value: string;
  placeholder: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  labelFormatFunction?: any;
};

// TODO: use onSelectedItemChange ?

export const Select: React.FC<Props> = ({
  items,
  label,
  onChange,
  helpText,
  value,
  placeholder,
  itemLabelPath,
  itemValuePath,
  labelFormatFunction
}) => {
  const [selectItems, setSelectItems] = useState([] as any);

  useEffect(() => {
    setSelectItems(
      items.map(item => {
        const label = itemLabelPath ? item[itemLabelPath] : item.label;

        if (labelFormatFunction) {
          return labelFormatFunction(label);
        } else {
          return label;
        }
      })
    );
  }, [items]);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items: selectItems,
    initialSelectedItem: value && value.length ? value : null
  });

  useEffect(() => {
    if (selectedItem && selectItems.length) {
      const item = items.find(i =>
        itemLabelPath
          ? i[itemLabelPath] === selectedItem
          : i.label === selectedItem
      );

      onChange(itemValuePath ? item[itemValuePath] : item.value);
    }
  }, [selectedItem]);

  return (
    <DropdownContainer className="amino-input-wrapper">
      <Text {...getLabelProps()} style={TextStyle.h5}>
        {label}
      </Text>

      <DropdownTrigger {...getToggleButtonProps()}>
        {selectedItem ? selectedItem : <Placeholder>{placeholder}</Placeholder>}
      </DropdownTrigger>

      <DropdownIcon />

      {isOpen && (
        <AnimatedSurface dense depth={Depth.depth16}>
          <Menu {...getMenuProps()}>
            {selectItems.map((item: any, index: number) => (
              <DropdownItem
                isSelected={selectedItem === item}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </DropdownItem>
            ))}
          </Menu>
        </AnimatedSurface>
      )}

      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}

      <div tabIndex={0} />
    </DropdownContainer>
  );
};
