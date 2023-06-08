import { type IFlag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { ICountryOption } from 'src/types/ICountry';

import { type SelectProps, Select } from './Select';

type CountrySelectType<T extends string> = {
  autoFocus?: SelectProps['autoFocus'];
  countryOptions: ICountryOption<T>[];
  label?: string;
  onChange: SelectProps<ICountryOption<T>>['onChange'];
  placeholder?: string;
  value: T | null;

  filter?: (country: ICountryOption<T>) => boolean;
};

export type CountrySelectProps<T extends string = string> =
  CountrySelectType<T> &
    Omit<
      SelectProps<ICountryOption<T>>,
      keyof CountrySelectType<T> | 'options'
    >;

export const CountrySelect = <T extends string>({
  autoFocus,
  countryOptions,
  filter = Boolean,
  label = 'Select country',
  onChange,
  placeholder,
  value,
  ...props
}: CountrySelectProps<T>) => {
  const filteredOptions: ICountryOption<T>[] = countryOptions.flatMap(option =>
    filter(option)
      ? {
          ...option,
          icon: <FlagIcon code={option.code as IFlag} iconScale="small" />,
        }
      : []
  );

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
      label={label}
      onChange={onChange}
      options={filteredOptions}
      placeholder={placeholder}
      value={selected}
      {...props}
    />
  );
};
