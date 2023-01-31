import { FlagIcon, IFlag } from 'src/icons/flag-icon/FlagIcon';
import { ICountryOption } from 'src/types/ICountry';

import { Select, SelectProps } from './Select';

type CountrySelectType<T extends string> = {
  autoFocus?: SelectProps['autoFocus'];
  countryOptions: ICountryOption<T>[];
  filter?: (country: ICountryOption<T>) => boolean;
  label?: string;
  onChange: SelectProps<ICountryOption<T>>['onChange'];
  placeholder?: string;

  value: T | null;
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
          icon: <FlagIcon iconScale="small" code={option.code as IFlag} />,
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
      options={filteredOptions}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      value={selected}
      {...props}
    />
  );
};
