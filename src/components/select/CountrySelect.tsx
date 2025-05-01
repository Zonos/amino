import { Select, type SelectProps } from 'src/components/select/Select';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { BaseProps } from 'src/types/BaseProps';
import type { CountryOption } from 'src/utils/hooks/useCountryOptions';

type CountrySelectType<T extends string> = {
  /**
   * Determines if the field should automatically receive focus when rendered
   */
  autoFocus?: SelectProps['autoFocus'];
  /**
   * Array of country options to display in the select dropdown
   */
  countryOptions: CountryOption<T>[];
  /**
   * Optional filter function to determine which countries to show
   * @param country The country option to filter
   * @returns Whether the country should be included in the dropdown
   * @default Boolean - Shows all countries that are truthy
   */
  filter?: (country: CountryOption<T>) => boolean;
  /**
   * Label displayed above the select input
   */
  label?: string;
  /**
   * Handler called when selection changes
   * @param value The selected country value or null if cleared
   * @param option The selected country option or null if cleared
   */
  onChange: SelectProps<T, CountryOption<T>>['onChange'];
  /**
   * Text displayed when no option is selected
   */
  placeholder?: string;
  /**
   * The currently selected country code or null if none selected
   */
  value: T | null;
};

export type CountrySelectProps<T extends string = string> =
  CountrySelectType<T> &
    BaseProps &
    Omit<
      SelectProps<T, CountryOption<T>>,
      keyof CountrySelectType<T> | 'options'
    >;

/**
 * A select component specialized for selecting a single country.
 * Displays country flags alongside names and supports filtering options.
 *
 * @example Basic usage
 * ```tsx
 * const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
 * const { countryOptions } = useCountryOptions();
 *
 * <CountrySelect
 *   countryOptions={countryOptions}
 *   label="Country"
 *   onChange={(value) => setSelectedCountry(value)}
 *   placeholder="Select a country"
 *   value={selectedCountry}
 * />
 * ```
 *
 * @example With pre-selected value
 * ```tsx
 * const [selectedCountry, setSelectedCountry] = useState<string | null>('US');
 * const { countryOptions } = useCountryOptions();
 *
 * <CountrySelect
 *   countryOptions={countryOptions}
 *   label="Country"
 *   onChange={(value) => setSelectedCountry(value)}
 *   value={selectedCountry}
 * />
 * ```
 *
 * @example With country filtering
 * ```tsx
 * const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
 * const { countryOptions } = useCountryOptions();
 *
 * // Only show EU countries
 * const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
 *   'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];
 *
 * <CountrySelect
 *   countryOptions={countryOptions}
 *   filter={(country) => euCountries.includes(country.code)}
 *   label="EU Country"
 *   onChange={(value) => setSelectedCountry(value)}
 *   value={selectedCountry}
 * />
 * ```
 *
 * @example With error state
 * ```tsx
 * <CountrySelect
 *   countryOptions={countryOptions}
 *   error={!selectedCountry}
 *   helpText={!selectedCountry ? 'Country selection is required' : undefined}
 *   label="Country"
 *   onChange={(value) => setSelectedCountry(value)}
 *   value={selectedCountry}
 * />
 * ```
 */
export const CountrySelect = <T extends string>({
  autoFocus,
  countryOptions,
  filter = Boolean,
  label,
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
