import React, { useEffect, useState } from "react";
import { useSelect } from "downshift";
import styled from "styled-components";

import { AminoTheme } from "../../styles/AminoTheme";
import { Text, TextStyle } from "../Text";
import { Menu, MenuItem } from "../Menu";
import { DropdownIcon } from "../../icons/DropdownIcon";
import { Depth, Surface } from "../../primitives";
import { DropdownAnimation } from "../../animations";

const DropdownContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: var(${AminoTheme.spaceHalf});
    top: 41px;
    pointer-events: none;
    color: var(${AminoTheme.textColor});
    width: 16px;
    height: 16px;
    opacity: 0.3;
    transition: opacity 100ms ease-in-out;
  }

  &:hover svg {
    opacity: 0.6;
  }

  span {
    margin-top: var(${AminoTheme.spaceQuarter});
    display: block;
  }
`;

const DropdownTrigger = styled.button`
  border-radius: var(${AminoTheme.radius});
  outline: none !important;
  box-sizing: border-box;
  transition: var(${AminoTheme.transition});
  display: block;
  height: 38px;
  width: 100%;
  padding: 0 var(${AminoTheme.spaceHalf});
  background: var(${AminoTheme.inputBackground});
  border: 1px solid var(${AminoTheme.borderColor});
  box-shadow: var(${AminoTheme.shadowSmall});
  text-align: left;

  &:focus,
  &:active {
    outline: none;
    border: var(${AminoTheme.borderBlue});
    box-shadow: var(${AminoTheme.glowBlue});
  }
`;

const AnimatedSurface = styled(Surface)`
  animation: ${DropdownAnimation} 250ms ease-in-out;
  animation-fill-mode: both;
  border: 1px solid var(${AminoTheme.borderColor});
  z-index: 10;
  position: absolute;
  padding: var(${AminoTheme.radius}) 0;
  margin-top: var(${AminoTheme.spaceQuarter});
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
    p.isSelected ? `var(${AminoTheme.hoverColor})` : `var(${AminoTheme.surfaceColor})`};
  color: ${p =>
    p.isSelected ? `var(${AminoTheme.primary})` : `var(${AminoTheme.textColor})`};
  font-weight: ${p => (p.isSelected ? "500" : "normal")};
`;

const SectionHeader = styled.div`
  span {
    display: block;
    margin: var(${AminoTheme.spaceHalf});
  }
`;

const Placeholder = styled.div<any>`
  color: var(${AminoTheme.textColor});
  opacity: 0.3;
`;

type Props = {
  items: any;
  label: string;
  helpText?: string;
  onChange: (newValue: string) => any;
  value: string;
  placeholder: string;
  itemLabelPath?: string;
  itemValuePath?: string;
  labelFormatFunction?: any;
  tabIndex?: number;
};

// TODO: use onSelectedItemChange ?

export const GroupedSelect: React.FC<Props> = ({
  items,
  label,
  onChange,
  helpText,
  value,
  placeholder,
  itemLabelPath,
  itemValuePath,
  labelFormatFunction,
  tabIndex
}) => {
  const [selectItems, setSelectItems] = useState([] as any);

  const parseItems = (toParse: any) =>
    toParse.map((item: any) => {
      const label = itemLabelPath ? item[itemLabelPath] : item.label;

      if (labelFormatFunction) {
        return labelFormatFunction(label);
      } else {
        return label;
      }
    });

  useEffect(() => {
    let flatItems = [] as any;

    Object.entries(items).forEach(([key, value]) => {
      flatItems.push(parseItems(value));
    });

    setSelectItems(flatItems.flat());
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
      let item;

      for (const value of Object.values(items) as any) {
        const childItem = value.find((i: any) =>
          itemLabelPath
            ? i[itemLabelPath] === selectedItem
            : i.label === selectedItem
        );

        if (childItem) {
          item = childItem;
          break;
        }
      }

      if (item) {
        onChange(itemValuePath ? item[itemValuePath] : item.value);
      }
    }
  }, [selectedItem]);

  return (
    <DropdownContainer className="amino-input-wrapper">
      <Text {...getLabelProps()} style={TextStyle.InputLabel}>
        {label}
      </Text>

      <DropdownTrigger {...getToggleButtonProps()}>
        {selectedItem ? (
          <div tabIndex={tabIndex && tabIndex}>{selectedItem}</div>
        ) : (
          <Placeholder tabIndex={tabIndex && tabIndex}>
            {placeholder}
          </Placeholder>
        )}
      </DropdownTrigger>

      <DropdownIcon />

      {isOpen && (
        <AnimatedSurface dense depth={Depth.depth16}>
          <Menu {...getMenuProps()}>
            {Object.keys(items).map(key => {
              return (
                <div key={key}>
                  <SectionHeader>
                    <Text style={TextStyle.SmallHeader}>{key}</Text>
                  </SectionHeader>

                  {parseItems(items[key]).map((item: any, index: number) => (
                    <DropdownItem
                      isSelected={selectedItem === item}
                      key={`${item}${index}`}
                      {...getItemProps({
                        item,
                        index: selectItems.indexOf(item)
                      })}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </div>
              );
            })}
          </Menu>
        </AnimatedSurface>
      )}

      {helpText && <Text style={TextStyle.Subtitle}>{helpText}</Text>}

      <div tabIndex={0} />
    </DropdownContainer>
  );
};
