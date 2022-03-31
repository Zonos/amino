import React from 'react';
import ReactSelect, {
  components,
  CSSObjectWithLabel,
  GroupBase,
  MultiValueGenericProps,
  OptionsOrGroups,
  StylesConfig,
} from 'react-select';

import { CSSObject } from 'styled-components';

import { OptionState } from './OptionState';

export type MultiSelectProps<OptionType> = {
  menuIsOpen?: boolean;
  onChange: (selected: OptionType[]) => void;
  options: OptionsOrGroups<OptionType, GroupBase<OptionType>>;
  selected: OptionType[];
};

export type MultiSelectOption = { label: string; value: string };

const styles = {
  valueContainer: (provided: CSSObjectWithLabel) =>
    ({
      ...provided,
      flexWrap: 'nowrap',
    } as CSSObject),
  multiValue: (provided: CSSObjectWithLabel) =>
    ({
      ...provided,
      minWidth: 'inherit',
    } as CSSObject),
  option: (provided: CSSObjectWithLabel, state: OptionState) =>
    ({
      ...provided,
      color: state.isSelected ? 'inherit' : 'inherit',
      backgroundColor: state.isSelected ? 'inherit' : 'inherit',
    } as CSSObject),
};

export const MultiSelect = <OptionType extends MultiSelectOption>({
  onChange,
  options,
  menuIsOpen,
  selected,
}: MultiSelectProps<OptionType>) => {
  return (
    <>
      <ReactSelect<OptionType, true, GroupBase<OptionType>>
        hideSelectedOptions={false}
        isMulti
        components={{}}
        filterOption={option => option.label !== 'meta'}
        menuIsOpen={menuIsOpen}
        options={options}
        onChange={(changed, meta) => {
          if (Array.isArray(changed) && meta.action === 'select-option') {
            onChange(changed);
          } else if (
            meta.action === 'remove-value' ||
            meta.action === 'pop-value'
          ) {
            onChange(
              selected.filter(x => x.value !== meta.removedValue?.value)
            );
          } else if (meta.action === 'clear') {
            onChange([]);
          }
        }}
        styles={
          styles as unknown as StylesConfig<
            OptionType,
            true,
            GroupBase<OptionType>
          >
        }
        value={selected}
      />
    </>
  );
};
