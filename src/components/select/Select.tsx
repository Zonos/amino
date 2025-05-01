import type { ReactNode } from 'react';
import type {
  ActionMeta,
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import type { HelpTextProps } from 'src/components/help-text/HelpText';
import { StyledReactSelect } from 'src/components/select/_StyledReactSelect';
import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption, SelectValue } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';

type RequiredProps = 'options' | 'value';

export type SelectProps<
  V extends SelectValue = SelectValue,
  Option = SelectOption<V>,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = BaseProps & {
  /** Close the select dropdown menu when scrolling outside of menu to prevent graphical jank */
  closeOnOutsideScroll?: boolean;
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  /**
   * An easier way to override the option rendering without having to use the typical component props and recreating all the styles.
   */
  customOption?: (value: V) => ReactNode;
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  /**
   * @example
   * onChange={changed => setExampleValue(changed?.value || null)}
   */
  onChange: (changed: Option | null, actionMeta: ActionMeta<Option>) => void;
  size?: Size;
  styles?: StylesConfig<Option, IsMulti, Group>;
  /**
   * @example
   * value={options.filter(x => x.value === exampleValue)}
   */
  value: Option[] | Option | null;
} & Omit<Props<Option, IsMulti, Group>, 'isMulti' | RequiredProps> &
  Required<Pick<Props<Option, IsMulti, Group>, RequiredProps>> &
  HelpTextProps;

/**
 * Select component that allows users to select one option from a dropdown list.
 * It's a wrapper around react-select with Amino styling and additional features.
 *
 * @example Basic usage
 * <Select
 *   label="Currency"
 *   options={[
 *     { label: 'US Dollar (USD)', value: 'USD' },
 *     { label: 'Euro (EUR)', value: 'EUR' },
 *     { label: 'British Pound (GBP)', value: 'GBP' }
 *   ]}
 *   value={{ label: 'US Dollar (USD)', value: 'USD' }}
 *   onChange={(option) => setValue(option)}
 * />
 *
 * @example With search functionality
 * <Select
 *   label="Currency"
 *   options={currencyOptions}
 *   value={selectedCurrency}
 *   onChange={(option) => setSelectedCurrency(option)}
 *   isSearchable={true}
 *   placeholder="Search for a currency..."
 * />
 *
 * @example With icon
 * <Select
 *   label="Currency"
 *   icon={<MoneyIcon size={24} />}
 *   options={currencyOptions}
 *   value={selectedCurrency}
 *   onChange={(option) => setSelectedCurrency(option)}
 * />
 *
 * @example With error state
 * <Select
 *   label="Currency"
 *   options={currencyOptions}
 *   value={selectedCurrency}
 *   onChange={(option) => setSelectedCurrency(option)}
 *   error={true}
 *   helpText="Please select a currency"
 * />
 *
 * @example With option icons
 * <Select
 *   label="Country"
 *   options={[
 *     { label: 'United States', value: 'US', icon: <FlagIcon code="US" iconScale="small" /> },
 *     { label: 'Canada', value: 'CA', icon: <FlagIcon code="CA" iconScale="small" /> },
 *     { label: 'Mexico', value: 'MX', icon: <FlagIcon code="MX" iconScale="small" /> }
 *   ]}
 *   value={selectedCountry}
 *   onChange={(option) => setSelectedCountry(option)}
 * />
 *
 * @example With custom option rendering
 * <Select
 *   label="Currency"
 *   options={currencyOptions}
 *   value={selectedCurrency}
 *   onChange={(option) => setSelectedCurrency(option)}
 *   customOption={(value) => (
 *     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
 *       <span>{value}</span>
 *       <span style={{ color: 'gray' }}>Rate: 1.0</span>
 *     </div>
 *   )}
 * />
 *
 * @example With custom styles
 * <Select
 *   label="Currency"
 *   options={currencyOptions}
 *   value={selectedCurrency}
 *   onChange={(option) => setSelectedCurrency(option)}
 *   styles={{
 *     menu: (base) => ({
 *       ...base,
 *       background: theme.blue100,
 *     }),
 *   }}
 * />
 *
 * @example In a dialog with scrolling
 * <Select
 *   label="Currency"
 *   options={currencyOptions}
 *   value={selectedCurrency}
 *   onChange={(option) => setSelectedCurrency(option)}
 *   closeOnOutsideScroll={true}
 * />
 */
export const Select = <
  V extends SelectValue,
  Option extends SelectOption<V>,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  isClearable = true,
  isSearchable = false,
  label,
  value,
  ...props
}: SelectProps<V, Option, false, Group>) => {
  if (Array.isArray(value) && value.length > 1) {
    throw Error(
      `Only one selection allowed for '${label}' select (${value.length}) selected.`,
    );
  }
  return (
    <StyledReactSelect<V, Option, false, Group>
      {...props}
      isClearable={isClearable}
      isMulti={false}
      isSearchable={isSearchable}
      label={label}
      value={value}
    />
  );
};
