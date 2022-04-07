import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  PropsValue,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { IOption, StyledReactSelect } from './StyledReactSelect';

type RequiredProps = 'onChange' | 'options' | 'value';

export interface MultiSelectProps<
  Option extends IOption = IOption,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'isMulti' | RequiredProps>,
    Required<Pick<Props<Option, IsMulti, Group>, RequiredProps>> {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  icon?: ReactNode;
  label?: string;
  styles?: StylesConfig<Option, IsMulti, Group>;
  /**
   * @example
   * value: { label: string; value: string; }[];
   */
  value: PropsValue<Option>;
}

export const MultiSelect = <
  Option extends IOption,
  Group extends GroupBase<Option>
>({
  closeMenuOnSelect = false,
  hideSelectedOptions = false,
  ...props
}: MultiSelectProps<Option, true, Group>) => {
  return (
    <StyledReactSelect<Option, true, Group>
      {...props}
      closeMenuOnSelect={closeMenuOnSelect}
      hideSelectedOptions={hideSelectedOptions}
      isMulti
    />
  );
};
