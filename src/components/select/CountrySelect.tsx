import React from 'react';

import { FlagIcon, IFlag } from 'src/icons/flag-icon/FlagIcon';
import { ICountryOption } from 'src/types';

import { Select, SelectProps } from './Select';

export type CountrySelectProps = {
  autoFocus?: SelectProps['autoFocus'];
  countryOptions: ICountryOption[];
  filter?: (country: ICountryOption) => boolean;
  label?: string;
  onChange: SelectProps['onChange'];
  placeholder?: string;
  value: string | null;
};

const CountrySelect = ({
  autoFocus,
  countryOptions,
  filter = Boolean,
  label = 'Select country',
  onChange,
  placeholder = 'Enter in your country name',
  value,
}: CountrySelectProps) => {
  const filteredOptions = countryOptions
    .map(option =>
      filter(option)
        ? {
            ...option,
            icon: <FlagIcon iconScale="small" code={option.code as IFlag} />,
          }
        : null
    )
    .filter(Boolean) as ICountryOption[];

  const selected = filteredOptions.filter(x => x.value === value);
  const firstCountry = selected.find(Boolean);
  return (
    <Select
      autoFocus={autoFocus}
      icon={
        <FlagIcon
          code={firstCountry ? (firstCountry.value as IFlag) : 'Default'}
          iconScale="medium"
        />
      }
      options={filteredOptions}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      value={selected}
    />
  );
};
export default CountrySelect;
