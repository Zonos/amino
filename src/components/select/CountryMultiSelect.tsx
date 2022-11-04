import React, { ReactNode } from 'react';
import {
  components as RScomponents,
  GroupBase,
  MenuListProps,
  OptionProps,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { type HelpTextProps } from 'src/components/help-text/HelpText';
import { FlagIcon, IFlag } from 'src/icons/flag-icon/FlagIcon';
import {
  type ICountryOption,
  type IUnavailableCountry,
} from 'src/types/ICountry';
import { IOption } from 'src/types/IOption';
import { prepRegionCountryOptions } from 'src/utils/prepRegionCountryOptions';

import { MultiSelect } from './MultiSelect';

type AdditionalProps = {
  allSelected: boolean;
  toggleSelectAll: () => void;
};

export const MenuList = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children,
  ...props
}: MenuListProps<Option, IsMulti, Group>) => {
  const { getStyles, selectProps } = props;
  const { allSelected, toggleSelectAll } =
    selectProps as typeof props['selectProps'] & AdditionalProps;
  return (
    <RScomponents.MenuList {...props}>
      <div
        style={
          getStyles(
            'option',
            props as unknown as OptionProps<Option, IsMulti, Group>
          ) as React.CSSProperties
        }
      >
        <Checkbox
          checked={allSelected}
          label="Rest of world"
          onChange={toggleSelectAll}
        />
      </div>
      {children}
    </RScomponents.MenuList>
  );
};

export interface CountryMultiSelectProps<
  Option extends IOption = IOption,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      Props<Option, IsMulti, Group>,
      'isMulti' | 'onChange' | 'options' | 'value'
    >,
    HelpTextProps {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  icon?: ReactNode;
  label?: string;
  onChange: (countryCodes: string[]) => void;
  countryOptions: ICountryOption[];
  styles?: StylesConfig<Option, IsMulti, Group>;
  unavailableCountries: IUnavailableCountry[];
  value: string[];
}

export const CountryMultiSelect = ({
  label = 'Select countries',
  countryOptions,
  onChange,
  unavailableCountries,
  value,
  ...props
}: CountryMultiSelectProps) => {
  const countries = countryOptions.map(option => {
    const unavailableCountry = unavailableCountries.find(
      x => x.code === option.code
    );
    return {
      ...option,
      icon: <FlagIcon iconScale="small" code={option.code as IFlag} />,
      isDisabled: !!unavailableCountry,
      labelDescription: unavailableCountry?.message,
    };
  });
  const unselectedOptions = countries.filter(
    option => !value.includes(option.code) && !option.isDisabled
  );
  const allSelected = !!value.length && !unselectedOptions.length;
  const additionalProps: AdditionalProps = {
    allSelected,
    toggleSelectAll: () =>
      onChange(
        unselectedOptions.length
          ? value.concat(unselectedOptions.map(x => x.value))
          : []
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
      // @ts-ignore additional props in selectProps
      {...additionalProps}
    />
  );
};
