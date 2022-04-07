import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { MultiSelect } from '../MultiSelect';
import { IOption } from '../StyledReactSelect';
import { ICountryOption, IRegionCountryOption } from './ICountry';

export interface CountryMultiSelectProps<
  Option extends IOption = IOption,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    Props<Option, IsMulti, Group>,
    'isMulti' | 'onChange' | 'options' | 'value'
  > {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  icon?: ReactNode;
  label?: string;
  onChange: (changed: ICountryOption[]) => void;
  regionCountryOptions: IRegionCountryOption[];
  styles?: StylesConfig<Option, IsMulti, Group>;
  value: ICountryOption[];
}

export const CountryMultiSelect = ({
  label = 'Select countries',
  regionCountryOptions,
  onChange,
  value,
  ...props
}: CountryMultiSelectProps) => {
  return (
    <MultiSelect
      {...props}
      label={label}
      onChange={changed => {
        console.log(changed);
        onChange(changed as ICountryOption[]);
      }}
      options={regionCountryOptions}
      value={value}
    />
  );
};
