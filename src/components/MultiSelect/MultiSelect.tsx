import React, { ComponentType } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components,
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  OptionsOrGroups,
  PlaceholderProps,
  StylesConfig,
} from 'react-select';

import styled from 'styled-components';

import { Checkbox } from 'components/Checkbox';
import { ChevronDownSolidIcon, RemoveCircleSolidIcon } from 'icons';

export type MultiSelectOption = { label: string; value: string };
type AdditionalProps = { label?: string };

const ClearIndicator = (
  props: ClearIndicatorProps<MultiSelectOption, true>
) => {
  return (
    <components.ClearIndicator {...props}>
      <RemoveCircleSolidIcon size={19} />
    </components.ClearIndicator>
  );
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<MultiSelectOption>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownSolidIcon size={20} />
    </components.DropdownIndicator>
  );
};

const StyledPlaceholder = styled(components.Placeholder)`
  opacity: 0;
  .has-label.is-focused & {
    opacity: 1;
  }
`;

const StyledFloatedLabel = styled.label`
  position: absolute;
  transition: all 0.5s ease;
  font-size: var(--amino-text-base);
  line-height: var(--amino-text-base);
  transform-origin: left top;
  left: var(--amino-space-half);
  top: calc(50% - var(--amino-text-base) / 2);
  .has-label & + div {
    align-self: flex-end;
  }
  .has-content &,
  .is-focused & {
    top: calc(var(--amino-space-quarter) + 3px);
    transform: scale(0.8);
  }
`;

const StrongLabel = styled.strong`
  font-weight: 600;
`;

const Control = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ControlProps<Option, IsMulti, Group>
) => {
  const {
    children,
    cx,
    getStyles,
    className,
    isDisabled,
    isFocused,
    innerRef,
    innerProps,
    menuIsOpen,
    selectProps,
  } = props;
  const { label, value } = selectProps as typeof props['selectProps'] &
    AdditionalProps;

  return (
    <div
      ref={innerRef}
      style={getStyles('control', props) as React.CSSProperties}
      className={cx(
        {
          control: true,
          'control--is-disabled': isDisabled,
          'control--is-focused': isFocused,
          'control--menu-is-open': menuIsOpen,
        },
        [
          className,
          label ? 'has-label' : '',
          isFocused ? 'is-focused' : '',
          Array.isArray(value) && !!value.length ? 'has-content' : '',
        ].join(' ')
      )}
      {...innerProps}
    >
      <StyledFloatedLabel>
        {label}{' '}
        {Array.isArray(value) && !!value.length && (
          <StrongLabel>({value.length} selected)</StrongLabel>
        )}
      </StyledFloatedLabel>
      {children}
    </div>
  );
};

const Placeholder = (props: PlaceholderProps) => {
  return <StyledPlaceholder {...props} />;
};

const Option = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { children, getStyles, innerRef, innerProps, isSelected } = props;
  return (
    <div
      ref={innerRef}
      style={getStyles('option', props) as React.CSSProperties}
      {...innerProps}
    >
      <Checkbox
        checked={isSelected}
        labelComponent={children}
        onChange={() => {}}
      />
    </div>
  );
};

const styles = {
  clearIndicator: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      color: `var(--amino-gray-d20)`,
      paddingLeft: 14,
      paddingRight: 4,
    };
  },
  // container
  control: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      borderColor: `var(--amino-gray-l60)`,
      color: `var(--amino-gray-d40)`,
      height: '3.5rem',
    };
  },
  dropdownIndicator: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      color: `var(--amino-gray-d60)`,
      paddingLeft: 4,
      paddingRight: 10,
    };
  },
  // group
  // groupHeading
  // indicatorsContainer
  indicatorSeparator: (provided: CSSObjectWithLabel) => {
    return { ...provided, width: 0 };
  },
  // input
  // loadingIndicator
  // loadingMessage
  menu: (provided: CSSObjectWithLabel) => {
    return { ...provided, boxShadow: `var(--amino-v3-shadow-large)` };
  },
  // menuList
  // menuPortal
  multiValue: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      background: 'var(--amino-gray-l60)',
      color: 'black',
      fontWeight: 500,
      minWidth: 'inherit',
    };
  },
  // multiValueLabel
  // multiValueRemove
  // noOptionsMessage
  option: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      '&:hover': { backgroundColor: 'red' },
      color: 'black',
      backgroundColor: 'inherit',
    };
  },
  // placeholder
  // singleValue
  valueContainer: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      flexWrap: 'nowrap',
      marginLeft: 'var(--amino-space-half)',
      paddingLeft: 0,
    };
  },
};

export type MultiSelectProps<OptionType> = {
  closeMenuOnSelect?: boolean;
  label?: string;
  menuIsOpen?: boolean;
  onChange: (selected: OptionType[]) => void;
  options: OptionsOrGroups<OptionType, GroupBase<OptionType>>;
  selected: OptionType[];
};

export const MultiSelect = <OptionType extends MultiSelectOption>({
  closeMenuOnSelect = false,
  label,
  onChange,
  options,
  menuIsOpen,
  selected,
}: MultiSelectProps<OptionType>) => {
  const additionalProps: AdditionalProps = {
    label,
  };
  return (
    <ReactSelect<OptionType, true, GroupBase<OptionType>>
      closeMenuOnSelect={closeMenuOnSelect}
      components={{
        ClearIndicator: ClearIndicator as unknown as ComponentType<
          ClearIndicatorProps<OptionType, true, GroupBase<OptionType>>
        >,
        Control: Control as unknown as ComponentType<
          ControlProps<OptionType, true, GroupBase<OptionType>>
        >,
        DropdownIndicator: DropdownIndicator as unknown as ComponentType<
          DropdownIndicatorProps<OptionType, true, GroupBase<OptionType>>
        >,
        // DownChevron,
        // CrossIcon,
        // Group,
        // GroupHeading,
        // IndicatorsContainer,
        // IndicatorSeparator,
        // Input,
        // LoadingIndicator,
        // Menu,
        // MenuList,
        // MenuPortal,
        // LoadingMessage,
        // NoOptionsMessage,
        // MultiValue,
        // MultiValueContainer,
        // MultiValueLabel,
        // MultiValueRemove,
        Option: Option as unknown as ComponentType<
          OptionProps<OptionType, true, GroupBase<OptionType>>
        >,
        Placeholder: Placeholder as unknown as ComponentType<
          PlaceholderProps<OptionType, true, GroupBase<OptionType>>
        >,
        // SelectContainer,
        // SingleValue,
        // ValueContainer,
      }}
      hideSelectedOptions={false}
      isMulti
      filterOption={option => option.label !== 'meta'}
      menuIsOpen={menuIsOpen}
      options={options}
      onChange={(changed, meta) => {
        if (
          Array.isArray(changed) &&
          (meta.action === 'select-option' || meta.action === 'deselect-option')
        ) {
          onChange(changed);
        } else if (
          meta.action === 'remove-value' ||
          meta.action === 'pop-value'
        ) {
          onChange(selected.filter(x => x.value !== meta.removedValue?.value));
        } else if (meta.action === 'clear') {
          onChange([]);
        }
      }}
      styles={
        styles as unknown as StylesConfig<
          OptionType,
          true,
          GroupBase<OptionType>
        >
      }
      value={selected}
      // @ts-ignore additional props as selectProps
      {...additionalProps}
    />
  );
};
