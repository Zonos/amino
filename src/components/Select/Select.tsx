import React, { ReactNode } from 'react';
import {
  GroupBase,
  Props,
  PropsValue,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { type HelpTextProps } from 'components/HelpText';

import { IOption, StyledReactSelect } from './StyledReactSelect';

type RequiredProps = 'onChange' | 'options' | 'value';

export interface SelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'isMulti' | RequiredProps>,
    Required<Pick<Props<Option, IsMulti, Group>, RequiredProps>>,
    HelpTextProps {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  styles?: StylesConfig<Option, IsMulti, Group>;
  /**
   * @example
   * value: { label: string; value: string; } | null;
   */
  value: PropsValue<Option>;
}

export const Select = <
  Option extends IOption,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isClearable = true,
  ...props
}: SelectProps<Option, false, Group>) => {
  return (
    <StyledReactSelect<Option, false, Group>
      {...props}
      isClearable={isClearable}
      isMulti={false}
    />
  );
};
