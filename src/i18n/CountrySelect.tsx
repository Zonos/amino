import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { type HelpTextProps } from 'components/HelpText';
import { Select } from 'components/Select';
import { IOption } from 'components/Select/StyledReactSelect';

import { CountryIcon, ICountryCode, ICountryIconScale } from './CountryIcon';
import { ICountryOption } from './ICountry';

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
