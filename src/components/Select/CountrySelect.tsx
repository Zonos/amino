import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { CountryIcon, ICountryCode, ICountryIconScale } from 'i18n/CountryIcon';

import { type HelpTextProps } from 'components/HelpText';

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
  /**
   * @example
   * value={countryOptions.filter(x => x.value === countryCode)}
   */
  value: ICountryOption[] | ICountryOption | null;
}

export const CountrySelect = ({
  label = 'Select country',
  countryOptions,
  icon,
  iconScale = 'medium',
  value,
  ...props
}: CountrySelectProps<ICountryOption>) => {
  const firstCountry = Array.isArray(value) ? value.find(Boolean) : value;
  return (
    <Select
      {...props}
      icon={
        icon || (
          <CountryIcon
            code={(firstCountry?.code as ICountryCode) || 'Default'}
            iconScale={iconScale}
          />
        )
      }
      label={label}
      options={countryOptions}
      value={value}
    />
  );
};
