import React, { ReactNode } from 'react';
import {
  ActionMeta,
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { HelpTextProps } from 'components/HelpText';

import { IOption, StyledReactSelect } from './StyledReactSelect';

type RequiredProps = 'options' | 'value';

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
  /**
   * @example
   * onChange={changed => setExampleValue(changed?.value || null)}
   */
  onChange: (changed: Option | null, actionMeta: ActionMeta<Option>) => void;
  styles?: StylesConfig<Option, IsMulti, Group>;
  /**
   * @example
   * value={options.filter(x => x.value === exampleValue)}
   */
  value: Option[] | Option | null;
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
