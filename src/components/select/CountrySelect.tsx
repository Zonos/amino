import { Select, type SelectProps } from 'src/components/select/Select';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { CountryOption } from 'src/utils/hooks/useCountryOptions';

type CountrySelectType<T extends string> = {
  autoFocus?: SelectProps['autoFocus'];
  countryOptions: CountryOption<T>[];
  filter?: (country: CountryOption<T>) => boolean;
  label?: string;
  onChange: SelectProps<T, CountryOption<T>>['onChange'];
  placeholder?: string;
  value: T | null;
};

export type CountrySelectProps<T extends string = string> =
  CountrySelectType<T> &
    BaseProps &
    Omit<
      SelectProps<T, CountryOption<T>>,
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
  const filteredOptions: CountryOption<T>[] = countryOptions.flatMap(option =>
    filter(option)
      ? {
          ...option,
          icon: <FlagIcon code={option.code as Flag} iconScale="small" />,
        }
      : [],
  );

  const selected = filteredOptions.filter(x => x.value === value);
  const firstCountry = selected.find(Boolean);
  return (
    <Select
      autoFocus={autoFocus}
      icon={
        <FlagIcon
          code={firstCountry ? (firstCountry.value as Flag) : 'Default'}
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
