import React from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  SingleValue,
  StylesConfig,
} from 'react-select';

import { IOption, StyledReactSelect } from './StyledReactSelect';

export interface SelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    Props<Option, IsMulti, Group>,
    'onChange' | 'options' | 'isMulti'
  > {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  label?: string;
  onChange: (selected: SingleValue<Option>) => void;
  options: Option[];
  styles?: StylesConfig<Option, IsMulti, Group>;
}

export const Select = <
  Option extends IOption,
  Group extends GroupBase<Option>
>({
  isClearable = true,
  ...props
}: SelectProps<Option, false, Group>) => {
  return (
    <StyledReactSelect<Option, false, Group>
      {...props}
      isClearable={isClearable}
      isMulti={false}
    />
  );
};
