import React, { useEffect, useState } from "react";
import { useCombobox, useSelect } from "downshift";
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
    stroke: var(--amino-gray-base);
    pointer-events: none;
  }

  & > div {
    width: 100%;
  }

  button {
    z-index: 88;
  }

  span {
    margin-top: var(--amino-space-quarter);
    display: block;
  }

  //TODO: I don't like replicating this code...
  input {
    height: 38px;
    box-sizing: border-box;
    position: relative;
    outline: none;
    border: 1px solid var(--amino-border-color);
    padding: 0 var(--amino-space-half);
    transition: var(--amino-transition);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    width: 100%;
    border-radius: var(--amino-radius);

    &:focus {
      outline: none;
      border: 2px solid var(--amino-primary);
      padding: 0 calc(var(--amino-space-half) - 1px);
    }
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

export const Combobox: React.FC<Props> = ({
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
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem
  } = useCombobox({
    items: selectItems,
    onInputValueChange: ({ inputValue }: any) => {
      setSelectItems(
        items
          .map(item => {
            const label = itemLabelPath ? item[itemLabelPath] : item.label;

            if (labelFormatFunction) {
              return labelFormatFunction(label);
            } else {
              return label;
            }
          })
          .filter(item => {
            return item.toLowerCase().startsWith(inputValue.toLowerCase());
          })
      );
    }
  } as any);

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

      <div style={{ display: "inline-block" }} {...getComboboxProps()}>
        <input placeholder={placeholder} {...getInputProps()} />
      </div>

      {/*TODO: add dropdown button indicator*/}
      {/*<button {...getToggleButtonProps()} aria-label="toggle menu">*/}
      {/*  <DropdownIcon />*/}
      {/*</button>*/}

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
