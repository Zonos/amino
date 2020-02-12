import React, { useEffect, useState } from "react";
import { useSelect } from "downshift";
import styled, {keyframes} from "styled-components";

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

const SubLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  opacity: .4;
  padding: var(--amino-space-half);
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid var(--amino-border-color);
  text-align: left;

  &:focus {
    outline: none;
    box-shadow: var(--amino-shadow-glow);
    border: 1px solid var(--amino-primary-light);
  }
`;

const Dropdown = styled.div`
  border-radius: var(--amino-radius-large);
  background: white;
  box-shadow: var(--amino-shadow-large);
  outline: none !important;
  border: 1px solid var(--amino-border-color);
  position: absolute;
  top: calc(var(--amino-space) + 5px);
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
        {selectedItem || placeholder}
      </DropdownTrigger>

      <DropdownIcon />

      {isOpen && (
        <Dropdown>
          <SubLabel>{label}</SubLabel>
          <ul {...getMenuProps()}>
            {
              selectItems.map((item: any, index: number) => (
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

      {/*<Dropdown>*/}
      {/*  <ul {...getMenuProps()}>*/}
      {/*    {isOpen &&*/}
      {/*      selectItems.map((item: any, index: number) => (*/}
      {/*        <DropdownItem*/}
      {/*          active={highlightedIndex === index}*/}
      {/*          key={`${item}${index}`}*/}
      {/*          {...getItemProps({ item, index })}*/}
      {/*        >*/}
      {/*          {item}*/}
      {/*        </DropdownItem>*/}
      {/*      ))}*/}
      {/*  </ul>*/}
      {/*</Dropdown>*/}

      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}

      <div tabIndex={0} />
    </DropdownContainer>
  );
};
