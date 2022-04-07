import React, { ReactNode } from 'react';
import {
  ActionMeta,
  GroupBase,
  GroupProps,
  MultiValue,
  OnChangeValue,
  OptionProps,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import {
  CheckboxOptionComponent,
  IOption,
  StyledReactSelect,
} from './StyledReactSelect';

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
}

type GroupOption<Option extends IOption> = {
  data: Option;
  index: 0;
  isDisabled: false;
  isSelected: false;
  type: 'option';
} & IOption;

const Group = <
  Option extends IOption,
  IsMulti extends true,
  Group extends GroupBase<Option>
>(
  props: GroupProps<Option, IsMulti, Group>
) => {
  const { children, label, getStyles, innerProps, options, selectProps } =
    props;
  const currentValue = selectProps.value as MultiValue<Option>;
  const groupOptions = options as unknown as GroupOption<Option>[];
  const available = groupOptions.filter(x => !x.isDisabled);
  const unselected = available.filter(x => !x.isSelected).map(x => x.data);
  const selected = available.filter(x => x.isSelected).map(x => x.data);
  const groupIsSelected = available.length === selected.length;

  return (
    <div
      style={getStyles('group', props) as React.CSSProperties}
      {...innerProps}
    >
      <CheckboxOptionComponent
        {...(props as unknown as OptionProps<Option, IsMulti, Group>)}
        innerProps={{
          onClick: () => {
            const changed = groupIsSelected
              ? currentValue.filter(
                  option => !selected.find(x => x.value === option.value)
                )
              : currentValue.concat(unselected);
            selectProps.onChange(
              changed as unknown as OnChangeValue<Option, IsMulti>,
              {
                action: groupIsSelected ? 'deselect-group' : 'select-group',
                option: groupIsSelected ? selected : unselected,
              } as unknown as ActionMeta<Option>
            );
          },
        }}
        isSelected={groupIsSelected}
      >
        {label as string}
      </CheckboxOptionComponent>
      {children}
    </div>
  );
};

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
      components={{ Group, ...props.components }}
      hideSelectedOptions={hideSelectedOptions}
      isMulti
    />
  );
};
