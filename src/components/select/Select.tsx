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

export const Select = <
  V extends SelectValue,
  Option extends SelectOption<V>,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  isClearable = true,
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
      label={label}
      value={value}
    />
  );
};
