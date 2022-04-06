import React from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { IOption, StyledReactSelect } from './StyledReactSelect';

export interface MultiSelectProps<
  Option extends IOption = IOption,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    Props<Option, IsMulti, Group>,
    'onChange' | 'options' | 'isMulti' | 'value'
  > {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  label?: string;
  onChange: (selected: Option[]) => void;
  options: Option[];
  selected: Option[];
  styles?: StylesConfig<Option, IsMulti, Group>;
}

export const MultiSelect = <
  Option extends IOption,
  Group extends GroupBase<Option>
>({
  closeMenuOnSelect = false,
  hideSelectedOptions = false,
  onChange,
  selected,
  ...props
}: MultiSelectProps<Option, true, Group>) => {
  return (
    <StyledReactSelect<Option, true, Group>
      {...props}
      closeMenuOnSelect={closeMenuOnSelect}
      hideSelectedOptions={hideSelectedOptions}
      isMulti
      onChange={(changed, meta) => {
        if (
          meta.action === 'select-option' ||
          meta.action === 'deselect-option'
        ) {
          onChange(changed as Option[]);
        } else if (
          meta.action === 'remove-value' ||
          meta.action === 'pop-value'
        ) {
          onChange(selected.filter(x => x.value !== meta.removedValue?.value));
        } else if (meta.action === 'clear') {
          onChange([]);
        }
      }}
      value={selected}
    />
  );
};
