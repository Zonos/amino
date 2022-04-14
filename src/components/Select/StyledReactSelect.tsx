import React, { ReactNode } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components as RScomponents,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueGenericProps,
  MultiValueRemoveProps,
  OptionProps,
  Props,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';

import styled from 'styled-components';

import { Checkbox } from 'components/Checkbox';
import { HelpText } from 'components/HelpText';
import { HelpTextProps } from 'components/HelpText/HelpText';
import { ChevronDownSolidIcon, RemoveCircleSolidIcon, RemoveIcon } from 'icons';

export type IOption = { icon?: ReactNode; label: string; value: string };
type AdditionalProps = {
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
};

const SelectWrapper = styled.div``;

const ClearIndicator = <
  Option extends IOption,
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
  Option extends IOption,
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--amino-gray-d20);
  padding: 10px;
`;

const StyledFloatedLabel = styled.label`
  position: absolute;
  transition: all 0.5s ease;
  font-size: var(--amino-text-base);
  line-height: var(--amino-text-base);
  transform-origin: left top;
  left: var(--amino-space-half);
  .has-icon & {
    left: calc(var(--amino-space-double) + 6px);
  }
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
  Option extends IOption,
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
  const { icon, label, value } = selectProps as typeof props['selectProps'] &
    AdditionalProps;
  return (
    <div
      className={cx(
        {
          control: true,
          'control--is-disabled': isDisabled,
          'control--is-focused': isFocused,
          'control--menu-is-open': menuIsOpen,
        },
        [
          className,
          hasValue ? 'has-value' : '',
          icon ? 'has-icon' : '',
          isFocused ? 'is-focused' : '',
          label ? 'has-label' : '',
        ].join(' ')
      )}
      ref={innerRef}
      style={getStyles('control', props) as React.CSSProperties}
      {...innerProps}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}

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

const CheckboxOptionIconWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 4px;
  }
`;

const IconLabel = ({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) => {
  if (icon) {
    return (
      <CheckboxOptionIconWrapper>
        {icon}
        {children}
      </CheckboxOptionIconWrapper>
    );
  }
  return <>{children}</>;
};

const MultiValueLabel = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children,
  ...props
}: MultiValueGenericProps<Option, IsMulti, Group>) => {
  return (
    <RScomponents.MultiValueLabel {...props}>
      <IconLabel icon={props.data.icon}>{children}</IconLabel>
    </RScomponents.MultiValueLabel>
  );
};

const MultiValueRemove = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  innerProps,
}: MultiValueRemoveProps<Option, IsMulti, Group>) => {
  return (
    <div {...innerProps} role="button">
      <RemoveIcon size={14} />
    </div>
  );
};

export const CheckboxOptionComponent = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const {
    children,
    data,
    getStyles,
    innerRef,
    innerProps,
    isSelected,
    selectProps,
  } = props;
  const { hasGroups } = selectProps as typeof props['selectProps'] &
    AdditionalProps;
  const style = getStyles('option', props) as React.CSSProperties;
  if (hasGroups) {
    style.paddingLeft = 48;
  }

  return (
    <div ref={innerRef} style={style} {...innerProps}>
      {selectProps.isMulti ? (
        <Checkbox
          checked={isSelected}
          label={data.value}
          labelComponent={<IconLabel icon={data.icon}>{children}</IconLabel>}
          onChange={() => {}}
        />
      ) : (
        <IconLabel icon={data.icon}>{children}</IconLabel>
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
      '&:hover': {
        borderColor: `var(--amino-gray-l80)`,
      },
      borderColor: `var(--amino-gray-l60)`,
      borderRadius: 6,
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
  group: provided => {
    return {
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
    };
  },
  // groupHeading
  // indicatorsContainer
  indicatorSeparator: provided => {
    return { ...provided, width: 0 };
  },
  // input
  // loadingIndicator
  // loadingMessage
  menu: provided => {
    return {
      ...provided,
      borderRadius: 12,
      boxShadow: `var(--amino-v3-shadow-large)`,
      marginTop: 4,
    };
  },
  menuList: provided => {
    return {
      ...provided,
      paddingTop: 8,
    };
  },
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
      paddingTop: 7,
      paddingRight: 12,
      paddingBottom: 7,
      paddingLeft: 16,
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
      paddingLeft: 12,
      '.has-icon &': { paddingLeft: 0 },
    };
  },
};

export interface StyledReactSelectProps<
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Props<Option, IsMulti, Group>,
    HelpTextProps,
    AdditionalProps {
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  styles?: StylesConfig<Option, IsMulti, Group>;
}

export const StyledReactSelect = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  components,
  error,
  helpText,
  hasGroups,
  icon,
  label = ' ',
  styles,
  ...props
}: StyledReactSelectProps<Option, IsMulti, Group>) => {
  const additionalProps: AdditionalProps = {
    hasGroups,
    icon,
    label,
  };
  return (
    <SelectWrapper>
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
            MultiValueLabel,
            MultiValueRemove,
            Option: CheckboxOptionComponent,
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
        // @ts-ignore additional props in selectProps
        {...additionalProps}
      />
      <HelpText error={error} helpText={helpText} />
    </SelectWrapper>
  );
};
