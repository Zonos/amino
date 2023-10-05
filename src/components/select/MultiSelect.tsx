import type { CSSProperties, ReactNode } from 'react';
import type {
  ActionMeta,
  GroupBase,
  GroupProps,
  MultiValue,
  OnChangeValue,
  OptionProps,
  Props,
  PropsValue,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import { type HelpTextProps } from 'src/components/help-text/HelpText';
import { StyledReactSelect } from 'src/components/select/_StyledReactSelect';
import type { SelectOption } from 'src/types/SelectOption';

type RequiredProps = 'onChange' | 'options' | 'value';

export interface MultiSelectProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends true = true,
  Group extends GroupBase<Option> = GroupBase<Option>,
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
   * value: { label: string; value: string; }[];
   */
  value: PropsValue<Option>;
}

export type GroupOption<Option extends SelectOption> = {
  data: Option;
  index: 0;
  isDisabled: false;
  isSelected: false;
  type: 'option';
} & SelectOption;

const Group = <
  Option extends SelectOption,
  IsMulti extends true,
  Group extends GroupBase<Option>,
>(
  props: GroupProps<Option, IsMulti, Group>,
) => {
  const { children, getStyles, innerProps, label, options, selectProps } =
    props;
  const currentValue = selectProps.value as MultiValue<Option>;
  const groupOptions = options as unknown as GroupOption<Option>[];
  const available = groupOptions.filter(x => !x.isDisabled);
  const unselected = available.filter(x => !x.isSelected).map(x => x.data);
  const selected = available.filter(x => x.isSelected).map(x => x.data);
  const groupIsSelected = available.length === selected.length;

  return (
    <div style={getStyles('group', props) as CSSProperties} {...innerProps}>
      <div
        style={
          getStyles(
            'option',
            props as unknown as OptionProps<Option, IsMulti, Group>,
          ) as CSSProperties
        }
      >
        <Checkbox
          checked={groupIsSelected}
          label={typeof label === 'string' ? label : ''}
          onChange={() => {
            const changed = groupIsSelected
              ? currentValue.filter(
                  option => !selected.find(x => x.value === option.value),
                )
              : currentValue.concat(unselected);
            selectProps.onChange(
              changed as unknown as OnChangeValue<Option, IsMulti>,
              {
                action: groupIsSelected ? 'deselect-group' : 'select-group',
                option: groupIsSelected ? selected : unselected,
              } as unknown as ActionMeta<Option>,
            );
          }}
        />
      </div>

      {children}
    </div>
  );
};

export const MultiSelect = <
  Option extends SelectOption,
  Group extends GroupBase<Option>,
>({
  closeMenuOnSelect = false,
  hideSelectedOptions = true,
  ...props
}: MultiSelectProps<Option, true, Group>) => (
  <StyledReactSelect<Option, true, Group>
    {...props}
    closeMenuOnSelect={closeMenuOnSelect}
    components={{ Group, ...props.components }}
    hideSelectedOptions={hideSelectedOptions}
    isMulti
  />
);
