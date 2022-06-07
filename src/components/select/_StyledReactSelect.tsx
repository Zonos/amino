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

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { CheckCircleSolidIcon } from 'src/icons/CheckCircleIcon';
import { ChevronDownSolidIcon } from 'src/icons/ChevronDownIcon';
import { RemoveCircleSolidIcon } from 'src/icons/RemoveCircleIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { Size } from 'src/types/Size';
import styled, { css } from 'styled-components';

export interface IOption {
  icon?: ReactNode;
  isDisabled?: boolean;
  label: string;
  labelDescription?: string;
  value: string;
}
type AdditionalProps = {
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  size?: Size;
};

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

const StyledFloatedLabel = styled.label<{ $size?: Size }>`
  position: absolute;
  transition: var(--amino-transition);
  font-size: var(--amino-text-base);
  line-height: var(--amino-text-base);
  transform-origin: left top;
  left: var(--amino-space-half);
  .has-icon & {
    left: calc(var(--amino-space-double) + 6px);
  }
  top: calc(50% - var(--amino-text-base) / 2);
  .has-label & {
    & + div {
      align-self: flex-end;
    }
  }
  .has-value &,
  .is-focused & {
    top: calc(var(--amino-space-quarter) + 3px);
    transform: scale(0.8);
  }

  /* Size modify */
  ${({ $size }) =>
    $size === 'sm' &&
    css`
      .${$size}.has-label & {
        & + div {
          margin-bottom: -6px;
        }
      }
      .${$size}.has-value &,
      .${$size}.is-focused & {
        top: 2px;
      }
    `}

  ${({ $size }) =>
    $size === 'md' &&
    css`
      .${$size}.has-label & {
        & + div {
          margin-bottom: -2px;
        }
      }
      .${$size}.has-value &,
      .${$size}.is-focused & {
        top: 6px;
      }
    `}
  
  ${({ $size }) =>
    $size === 'lg' &&
    css`
      .${$size}.has-value &,
      .${$size}.is-focused & {
        top: 10px;
      }
    `}
  
  ${({ $size }) =>
    $size === 'xl' &&
    css`
      .${$size}.has-label & {
        & + div {
          margin-bottom: 3px;
        }
      }
      .${$size}.has-value &,
      .${$size}.is-focused & {
        top: 11px;
      }
    `}
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
  const { icon, label, value, size } =
    selectProps as typeof props['selectProps'] & AdditionalProps;
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
          label || (Array.isArray(value) && value.length > 1)
            ? 'has-label'
            : '',
          size,
        ].join(' ')
      )}
      ref={innerRef}
      style={getStyles('control', props) as React.CSSProperties}
      {...innerProps}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}

      <StyledFloatedLabel $size={size}>
        {label}{' '}
        {Array.isArray(value) && value.length > 1 && (
          <StrongLabel>({value.length} selected)</StrongLabel>
        )}
      </StyledFloatedLabel>
      {children}
    </div>
  );
};

const CheckboxOptionIconWrapper = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  color: ${p => p.$color || 'inherit'};
  svg {
    margin-right: 4px;
    color: black;
  }
`;

const StyledSelectOptionWrapper = styled.div`
  &.is-focused,
  &:hover {
    background-color: var(--amino-gray-l80) !important;
  }
`;

const SelectedSingleOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconLabel = ({
  children,
  color,
  icon,
}: {
  children: ReactNode;
  color?: string;
  icon?: ReactNode;
}) => {
  return (
    <CheckboxOptionIconWrapper $color={color}>
      {icon}
      {children}
    </CheckboxOptionIconWrapper>
  );
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
    isDisabled,
    isSelected,
    isFocused,
    className,
    selectProps,
  } = props;
  const { hasGroups } = selectProps as typeof props['selectProps'] &
    AdditionalProps;

  const { color, ...style } = getStyles('option', props) as React.CSSProperties;
  if (hasGroups) {
    style.paddingLeft = 48;
  }
  return (
    <StyledSelectOptionWrapper
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={innerRef as any}
      style={style}
      className={[className, isFocused ? 'is-focused' : ''].join(' ')}
      {...innerProps}
    >
      {selectProps.isMulti ? (
        <Checkbox
          checked={isSelected}
          disabled={isDisabled}
          icon={data.icon}
          label={data.label}
          labelDescription={data.labelDescription}
          onChange={() => {}}
        />
      ) : (
        <SelectedSingleOptionWrapper>
          <IconLabel color={color} icon={data.icon}>
            {children}
          </IconLabel>
          {isSelected && <CheckCircleSolidIcon color="blue-500" size={16} />}
        </SelectedSingleOptionWrapper>
      )}
    </StyledSelectOptionWrapper>
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
  control: (provided, state) => {
    const { size } = state.selectProps as typeof state['selectProps'] &
      AdditionalProps;
    return {
      ...provided,
      borderColor: `var(--amino-gray-l60)`,
      borderRadius: 6,
      color: `var(--amino-gray-d40)`,
      height: `var(--amino-size-${size})`,
      flexWrap: 'inherit',
      minHeight: `var(--amino-size-${size})`,
      boxShadow: state.isFocused ? `var(--amino-glow-blue)` : '',
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
      paddingLeft: 8,
      paddingRight: 8,
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
  option: (provided, state) => {
    return {
      ...provided,
      color: state.isSelected ? 'var(--amino-blue-500)' : 'black',
      fontWeight: state.isSelected ? 500 : 400,
      backgroundColor: 'inherit',
      paddingTop: 7,
      paddingRight: 12,
      paddingBottom: 7,
      paddingLeft: 8,
      borderRadius: '8px',
      cursor: 'pointer',
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
  singleValue: provided => {
    return {
      ...provided,
      fontWeight: 500,
    };
  },
  valueContainer: provided => {
    return {
      ...provided,
      flexWrap: 'nowrap',
      padding: 'unset',
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
  size?: Size;
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
  label,
  size = 'xl',
  styles,
  ...props
}: StyledReactSelectProps<Option, IsMulti, Group>) => {
  const additionalProps: AdditionalProps = {
    hasGroups,
    icon,
    label,
    size,
  };
  return (
    <div>
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
    </div>
  );
};
