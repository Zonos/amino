import type { ReactNode } from 'react';
import type {
  ActionMeta,
  GroupBase,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { type HelpTextProps } from 'src/components/help-text/HelpText';
import type { IOption } from 'src/types/IOption';
import type { Size } from 'src/types/Size';

import { StyledReactSelect } from './_StyledReactSelect';

type RequiredProps = 'options' | 'value';

export interface SelectProps<
  Option extends IOption = IOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'isMulti' | RequiredProps>,
    Required<Pick<Props<Option, IsMulti, Group>, RequiredProps>>,
    HelpTextProps {
  /** Close the select dropdown menu when scrolling outside of menu to prevent graphical jank */
  closeOnOutsideScroll?: boolean;
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  size?: Size;
  styles?: StylesConfig<Option, IsMulti, Group>;
  /**
   * @example
   * value={options.filter(x => x.value === exampleValue)}
   */
  value: Option[] | Option | null;
  /**
   * @example
   * onChange={changed => setExampleValue(changed?.value || null)}
   */
  onChange: (changed: Option | null, actionMeta: ActionMeta<Option>) => void;
}

export const Select = <
  Option extends IOption,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isClearable = true,
  label,
  value,
  ...props
}: SelectProps<Option, false, Group>) => {
  if (Array.isArray(value) && value.length > 1) {
    throw Error(
      `Only one selection allowed for '${label}' select (${value.length}) selected.`
    );
  }
  return (
    <StyledReactSelect<Option, false, Group>
      {...props}
      isClearable={isClearable}
      isMulti={false}
      label={label}
      value={value}
    />
  );
};
