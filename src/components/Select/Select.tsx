import React, { useEffect, useState } from "react";
import { useSelect } from "downshift";
import styled, { keyframes } from "styled-components";

import { Text, TextStyle } from "../Text";
import { DropdownIcon } from "../../icons/DropdownIcon";

const DropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(--amino-space-half);
    top: 39px;
    width: 18px;
    height: 18px;
    opacity: .5;
    pointer-events: none;
    color: var(--amino-text-color);
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
  background: white;
  border: 1px solid var(--amino-border-color);
  box-shadow: var(--amino-shadow-top);
  text-align: left;

  &:focus {
    outline: none;
    border: 2px solid var(--amino-primary);
    padding: 0 calc(var(--amino-space-half) - 1px);
  }
`;

const Dropdown = styled.div`
  border-radius: var(--amino-radius);
  background: white;
  box-shadow: var(--amino-shadow-large);
  outline: none !important;
  border: 1px solid var(--amino-border-color);
  position: absolute;
  top: calc(var(--amino-space-double) + 32px);
  left: 0;
  z-index: 9999999;
  max-height: 350px;
  overflow-y: auto;
  width: 100%;
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;

  ul {
    outline: none !important;
  }
`;

const DropdownItem = styled.li<any>`
  padding: var(--amino-space-half);
  cursor: pointer;
  user-select: none;

  &:last-of-type {
    border-bottom-left-radius: var(--amino-radius-large);
    border-bottom-right-radius: var(--amino-radius-large);
  }

  background: ${p => (p.active ? "var(--amino-gray-lighter)" : "white")};
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
        <Dropdown>
          <ul {...getMenuProps()}>
            {selectItems.map((item: any, index: number) => (
              <DropdownItem
                active={highlightedIndex === index}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </DropdownItem>
            ))}
          </ul>
        </Dropdown>
      )}

      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}

      <div tabIndex={0} />
    </DropdownContainer>
  );
};
