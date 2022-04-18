import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { type HelpTextProps } from 'components/HelpText';
import {
  CountryIcon,
  ICountryCode,
  ICountryIconScale,
} from 'icons/country/CountryIcon';

import { ICountryOption } from './ICountry';
import { Select } from './Select';
import { IOption } from './StyledReactSelect';

export interface CountrySelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'isMulti' | 'onChange' | 'value'>,
    HelpTextProps {
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
            code={(value?.code as ICountryCode) || 'Default'}
            scale={iconScale}
          />
        )
      }
      label={label}
      options={countryOptions}
      value={value}
    />
  );
};
