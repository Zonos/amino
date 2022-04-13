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

import { Checkbox } from 'components/Checkbox';

import { ICountryOption, IRegionCountryOption } from './ICountry';
import { MultiSelect } from './MultiSelect';
import { IOption } from './StyledReactSelect';

type AdditionalProps = {
  allSelected: boolean;
  toggleSelectAll: () => void;
};

const MenuList = <
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
          labelComponent="Rest of world"
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
  > {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  icon?: ReactNode;
  label?: string;
  onChange: (changed: ICountryOption[]) => void;
  regionCountryOptions: IRegionCountryOption[];
  styles?: StylesConfig<Option, IsMulti, Group>;
  value: ICountryOption[];
}

export const CountryMultiSelect = ({
  label = 'Select countries',
  regionCountryOptions,
  onChange,
  value,
  ...props
}: CountryMultiSelectProps) => {
  const allOptions = regionCountryOptions.flatMap(x => x.options);
  const unselectedOptions = allOptions.filter(
    option => !value.find(x => x.code === option.code)
  );
  const allSelected = !!value.length && !unselectedOptions.length;
  const additionalProps: AdditionalProps = {
    allSelected,
    toggleSelectAll: () =>
      onChange(unselectedOptions.length ? value.concat(unselectedOptions) : []),
  };
  return (
    <MultiSelect
      {...props}
      components={{ MenuList }}
      hasGroups
      label={label}
      onChange={changed => onChange(changed as ICountryOption[])}
      options={regionCountryOptions}
      value={value}
      // @ts-ignore additional props in selectProps
      {...additionalProps}
    />
  );
};
