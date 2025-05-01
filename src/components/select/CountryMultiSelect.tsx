import type { CSSProperties, ReactNode } from 'react';
import {
  components as RScomponents,
  type GroupBase,
  type MenuListProps,
  type OptionProps,
  type Props,
  type SelectComponentsConfig,
  type StylesConfig,
} from 'react-select';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import type { HelpTextProps } from 'src/components/help-text/HelpText';
import { MultiSelect } from 'src/components/select/MultiSelect';
import { type Flag, FlagIcon } from 'src/icons/flag-icon/FlagIcon';
import type { SelectOption } from 'src/types/SelectOption';
import type {
  CountryOption,
  UnavailableCountry,
} from 'src/utils/hooks/useCountryOptions';
import { prepRegionCountryOptions } from 'src/utils/prepRegionCountryOptions';

type AdditionalProps = {
  allSelected: boolean;
  toggleSelectAll: () => void;
};

const MenuList = <
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  children,
  ...props
}: MenuListProps<Option, IsMulti, Group>) => {
  const { getStyles, selectProps } = props;
  const { allSelected, toggleSelectAll } =
    selectProps as (typeof props)['selectProps'] & AdditionalProps;
  return (
    <RScomponents.MenuList {...props}>
      <div
        style={
          getStyles(
            'option',
            props as unknown as OptionProps<Option, IsMulti, Group>,
          ) as CSSProperties
        }
      >
        <Checkbox
          checked={allSelected}
          label="Select all"
          onChange={toggleSelectAll}
        />
      </div>
      {children}
    </RScomponents.MenuList>
  );
};

export type CountryMultiSelectProps<
  Option extends SelectOption<string> = SelectOption<string>,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = {
  /**
   * Custom components to override default react-select components
   */
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  /**
   * Array of country options to display in the select
   */
  countryOptions: CountryOption<Option['value']>[];
  /**
   * Optional icon to display in the select control
   */
  icon?: ReactNode;
  /**
   * Label for the select field
   * @default 'Select countries'
   */
  label?: string;
  /**
   * Handler called when selection changes
   * @param countryCodes Array of country codes that are selected
   */
  onChange: (countryCodes: Option['value'][]) => void;
  /**
   * Custom styles to override default react-select styles
   */
  styles?: StylesConfig<Option, IsMulti, Group>;
  /**
   * Array of countries that should appear disabled with optional explanatory messages
   */
  unavailableCountries: UnavailableCountry[];
  /**
   * Array of country codes that are currently selected
   */
  value: Option['value'][];
} & Omit<
  Props<Option, IsMulti, Group>,
  'isMulti' | 'onChange' | 'options' | 'value'
> &
  HelpTextProps;

/**
 * A multi-select component specialized for selecting multiple countries.
 * Displays country flags alongside names, organizes countries by region, and includes a "Select all" option.
 *
 * @example Basic usage
 * ```tsx
 * const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
 * const { countryOptions } = useCountryOptions();
 *
 * <CountryMultiSelect
 *   countryOptions={countryOptions}
 *   onChange={setSelectedCountries}
 *   unavailableCountries={[]}
 *   value={selectedCountries}
 * />
 * ```
 *
 * @example With unavailable countries
 * ```tsx
 * const [selectedCountries, setSelectedCountries] = useState<string[]>(['US', 'CA']);
 * const { countryOptions } = useCountryOptions();
 * const unavailableCountries = [
 *   { code: 'GB', message: 'Coming soon' },
 *   { code: 'AU', message: 'Not supported' }
 * ];
 *
 * <CountryMultiSelect
 *   countryOptions={countryOptions}
 *   label="Shipping Countries"
 *   onChange={setSelectedCountries}
 *   unavailableCountries={unavailableCountries}
 *   value={selectedCountries}
 * />
 * ```
 *
 * @example With error state
 * ```tsx
 * <CountryMultiSelect
 *   countryOptions={countryOptions}
 *   error={!selectedCountries.length}
 *   helpText={!selectedCountries.length ? 'At least one country is required' : undefined}
 *   onChange={setSelectedCountries}
 *   unavailableCountries={[]}
 *   value={selectedCountries}
 * />
 * ```
 */
export const CountryMultiSelect = <T extends string>({
  countryOptions,
  label = 'Select countries',
  onChange,
  unavailableCountries,
  value,
  ...props
}: CountryMultiSelectProps<SelectOption<T>>) => {
  const countries = countryOptions.map(option => {
    const unavailableCountry = unavailableCountries.find(
      x => x.code === option.code,
    );
    return {
      ...option,
      icon: <FlagIcon code={option.code as Flag} iconScale="small" />,
      isDisabled: !!unavailableCountry,
      labelDescription: unavailableCountry?.message,
    };
  });
  const unselectedOptions = countries.filter(
    option => !value.includes(option.code) && !option.isDisabled,
  );
  const allSelected = !!value.length && !unselectedOptions.length;
  const additionalProps: AdditionalProps = {
    allSelected,
    toggleSelectAll: () =>
      onChange(
        unselectedOptions.length
          ? value.concat(unselectedOptions.map(x => x.value))
          : [],
      ),
  };
  return (
    <MultiSelect
      {...props}
      components={{ MenuList }}
      hasGroups
      hideSelectedOptions={false}
      label={label}
      onChange={changed => onChange(changed.map(x => x.value))}
      options={prepRegionCountryOptions(countries)}
      value={countries.filter(x => value.includes(x.code))}
      {...additionalProps}
    />
  );
};
