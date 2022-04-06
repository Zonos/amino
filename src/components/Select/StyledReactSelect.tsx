import React from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components as RScomponents,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import styled from 'styled-components';

import { Checkbox } from 'components/Checkbox';
import { ChevronDownSolidIcon, RemoveCircleSolidIcon } from 'icons';

export type IOption = { label: string; value: string | null };
type AdditionalProps = { label?: string };

const ClearIndicator = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>
) => {
  return (
    <RScomponents.ClearIndicator {...props}>
      <RemoveCircleSolidIcon size={19} />
    </RScomponents.ClearIndicator>
  );
};

const DropdownIndicator = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => {
  return (
    <RScomponents.DropdownIndicator {...props}>
      <ChevronDownSolidIcon size={20} />
    </RScomponents.DropdownIndicator>
  );
};

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
  .has-value &,
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
    hasValue,
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
          hasValue ? 'has-value' : '',
        ].join(' ')
      )}
      {...innerProps}
    >
      <StyledFloatedLabel>
        {label}{' '}
        {Array.isArray(value) && value.length > 1 && (
          <StrongLabel>({value.length} selected)</StrongLabel>
        )}
      </StyledFloatedLabel>
      {children}
    </div>
  );
};

const Option = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { children, getStyles, innerRef, innerProps, isSelected, selectProps } =
    props;
  return (
    <div
      ref={innerRef}
      style={getStyles('option', props) as React.CSSProperties}
      {...innerProps}
    >
      {selectProps.isMulti ? (
        <Checkbox
          checked={isSelected}
          labelComponent={children}
          onChange={() => {}}
        />
      ) : (
        children
      )}
    </div>
  );
};

const localStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
  clearIndicator: provided => {
    return {
      ...provided,
      color: `var(--amino-gray-d20)`,
      paddingLeft: 14,
      paddingRight: 4,
    };
  },
  // container
  control: provided => {
    return {
      ...provided,
      borderColor: `var(--amino-gray-l60)`,
      color: `var(--amino-gray-d40)`,
      height: '3.5rem',
    };
  },
  dropdownIndicator: provided => {
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
  indicatorSeparator: provided => {
    return { ...provided, width: 0 };
  },
  // input
  // loadingIndicator
  // loadingMessage
  menu: provided => {
    return { ...provided, boxShadow: `var(--amino-v3-shadow-large)` };
  },
  // menuList
  // menuPortal
  multiValue: provided => {
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
  option: provided => {
    return {
      ...provided,
      '&:hover': { backgroundColor: 'red' },
      color: 'black',
      backgroundColor: 'inherit',
    };
  },
  placeholder: provided => {
    return {
      ...provided,
      opacity: 0,
      '.has-label.is-focused &': {
        opacity: 1,
      },
    };
  },
  // singleValue
  valueContainer: provided => {
    return {
      ...provided,
      flexWrap: 'nowrap',
      marginLeft: 'var(--amino-space-half)',
      paddingLeft: 0,
    };
  },
};

export interface SelectProps<
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  label?: string;
  styles?: StylesConfig<Option, IsMulti, Group>;
}

export const StyledReactSelect = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  components,
  label,
  styles,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  const additionalProps: AdditionalProps = {
    label,
  };
  return (
    <ReactSelect<Option, IsMulti, Group>
      components={
        {
          ClearIndicator,
          Control,
          DropdownIndicator,
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
          Option,
          // Placeholder,
          // SelectContainer,
          // SingleValue,
          // ValueContainer,
          ...components,
        } as SelectComponentsConfig<Option, IsMulti, Group>
      }
      styles={
        {
          ...styles,
          ...localStyles,
        } as StylesConfig<Option, IsMulti, Group>
      }
      {...props}
      // @ts-ignore additional props as selectProps
      {...additionalProps}
    />
  );
};
