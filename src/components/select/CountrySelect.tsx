import { type SelectProps, Select } from 'src/components/select/Select';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { CountryOption } from 'src/types/Country';

type CountrySelectType<T extends string> = {
  autoFocus?: SelectProps['autoFocus'];
  countryOptions: CountryOption<T>[];
  label?: string;
  onChange: SelectProps<CountryOption<T>>['onChange'];
  placeholder?: string;
  value: T | null;

  filter?: (country: CountryOption<T>) => boolean;
};

export type CountrySelectProps<T extends string = string> =
  CountrySelectType<T> &
    Omit<SelectProps<CountryOption<T>>, keyof CountrySelectType<T> | 'options'>;

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
