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
import type { SelectOption } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';

type RequiredProps = 'options' | 'value';

export type SelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends false = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = BaseProps & {
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
   * An easier way to override the option rendering without having to use the typical component props and recreating all the styles.
   */
  customOption?: (value: Option['value']) => ReactNode;
  /**
   * @example
   * onChange={changed => setExampleValue(changed?.value || null)}
   */
  onChange: (changed: Option | null, actionMeta: ActionMeta<Option>) => void;
} & Omit<Props<Option, IsMulti, Group>, 'isMulti' | RequiredProps> &
  Required<Pick<Props<Option, IsMulti, Group>, RequiredProps>> &
  HelpTextProps;

export const Select = <
  Option extends SelectOption,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  isClearable = true,
  label,
  value,
  ...props
}: SelectProps<Option, false, Group>) => {
  if (Array.isArray(value) && value.length > 1) {
    throw Error(
      `Only one selection allowed for '${label}' select (${value.length}) selected.`,
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
