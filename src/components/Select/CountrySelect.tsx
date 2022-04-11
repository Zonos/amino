import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import {
  ICountryCode,
  CountryIcon,
  ICountryIconScale,
} from 'icons/country/CountryIcon';

import { ICountryOption } from './ICountry';
import { Select } from './Select';
import { IOption } from './StyledReactSelect';

export interface CountrySelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
    Props<Option, IsMulti, Group>,
    'isMulti' | 'onChange' | 'value'
  > {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  countryOptions: ICountryOption[];
  hasGroups?: boolean;
  icon?: ReactNode;
  iconScale?: ICountryIconScale;
  label?: string;
  onChange: (changed: ICountryOption | null) => void;
  styles?: StylesConfig<Option, IsMulti, Group>;
  value: ICountryOption | null;
}

export const CountrySelect = ({
  label = 'Select country',
  countryOptions,
  icon,
  iconScale = 'medium',
  value,
  ...props
}: CountrySelectProps<ICountryOption>) => {
  return (
    <Select
      {...props}
      icon={
        icon || (
          <CountryIcon
            scale={iconScale}
            type={(value?.code as ICountryCode) || 'Default'}
          />
        )
      }
      label={label}
      options={countryOptions}
      value={value}
    />
  );
};
