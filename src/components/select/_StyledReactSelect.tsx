import { type CSSProperties, type ReactNode, useMemo, useRef } from 'react';
import type {
  ClearIndicatorProps,
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
import ReactSelect, { components as RScomponents } from 'react-select';
import type Select from 'react-select/dist/declarations/src/Select';

import styled, { css } from 'styled-components';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  type HelpTextProps,
  HelpText,
} from 'src/components/help-text/HelpText';
import { CheckCircleIcon } from 'src/icons/CheckCircleIcon';
import { DoubleChevronIcon } from 'src/icons/DoubleChevronIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import type { Option as BaseOption } from 'src/types/Option';
import type { Size } from 'src/types/Size';
import { getTestId } from 'src/utils/getTestId';

type AdditionalProps<Value> = {
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  size?: Size;
  customOption?: (value: Value) => ReactNode;
};

const ClearIndicator = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: ClearIndicatorProps<Option, IsMulti, Group>,
) => (
  <RScomponents.ClearIndicator {...props}>
    <RemoveCircleIcon size={24} />
  </RScomponents.ClearIndicator>
);

const DropdownIndicator = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>,
) => (
  <RScomponents.DropdownIndicator {...props}>
    <DoubleChevronIcon size={24} />
  </RScomponents.DropdownIndicator>
);

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.gray700};
  padding: 10px;
`;

const StyledFloatedLabel = styled.label<{ $size?: Size }>`
  position: absolute;
  transition: ${theme.transition};
  font-size: ${theme.fontSizeBase};
  line-height: ${theme.fontSizeBase};
  transform-origin: left top;
  left: calc(${theme.space16} - 2px);
  .has-icon & {
    left: calc(${theme.space40} + 2px);
  }
  top: calc(50% - ${theme.fontSizeBase} / 2);
  .has-label & {
    & + div {
      align-self: flex-end;
    }
  }
  .has-value &,
  .is-focused & {
    top: calc(${theme.space8} + 3px);
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

const StyledSelectWrapper = styled.div`
  .react-select-control + div {
    z-index: 20;
  }

  &.has-error .react-select-control {
    box-shadow: ${theme.glowError};
  }
`;

const StrongLabel = styled.strong`
  font-weight: 600;
`;

const Control = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: ControlProps<Option, IsMulti, Group>,
) => {
  const {
    children,
    className,
    cx,
    getStyles,
    hasValue,
    innerProps,
    innerRef,
    isDisabled,
    isFocused,
    menuIsOpen,
    selectProps,
  } = props;
  const { icon, label, size, value } =
    selectProps as (typeof props)['selectProps'] &
      AdditionalProps<Option['value']>;
  return (
    <div
      ref={innerRef}
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
          'react-select-control',
        ].join(' '),
      )}
      style={getStyles('control', props) as CSSProperties}
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
    color: ${theme.gray1200};
  }
`;

const StyledSelectOptionWrapper = styled.div`
  &:not(.is-disabled) {
    &.is-focused,
    &:hover {
      /* The styles are inlined on this component from emotion, so we must override */
      background-color: ${theme.gray100} !important;
    }
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
}) => (
  <CheckboxOptionIconWrapper $color={color}>
    {icon}
    {children}
  </CheckboxOptionIconWrapper>
);

const MultiValueLabel = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  children,
  ...props
}: MultiValueGenericProps<Option, IsMulti, Group>) => (
  <RScomponents.MultiValueLabel {...props}>
    <IconLabel icon={props.data.icon}>{children}</IconLabel>
  </RScomponents.MultiValueLabel>
);

const MultiValueRemove = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  innerProps,
}: MultiValueRemoveProps<Option, IsMulti, Group>) => (
  <div {...innerProps} role="button">
    <RemoveIcon size={14} />
  </div>
);

export const CheckboxOptionComponent = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: OptionProps<Option, IsMulti, Group>,
) => {
  const {
    children,
    className,
    data,
    getStyles,
    innerProps,
    innerRef,
    isDisabled,
    isFocused,
    isSelected,
    selectProps,
  } = props;
  const { customOption, hasGroups } =
    selectProps as (typeof props)['selectProps'] &
      AdditionalProps<Option['value']>;

  const { color, ...style } = getStyles('option', props) as CSSProperties;
  if (hasGroups) {
    style.paddingLeft = 48;
  }

  const renderContent = () => {
    if (customOption) {
      return customOption(data.value);
    }

    return (
      <SelectedSingleOptionWrapper>
        <IconLabel color={color} icon={data.icon}>
          {children}
        </IconLabel>
        {isSelected && <CheckCircleIcon color="blue600" size={24} />}
      </SelectedSingleOptionWrapper>
    );
  };

  return (
    <div ref={innerRef} {...innerProps}>
      <StyledSelectOptionWrapper
        className={[
          className,
          isFocused ? 'is-focused' : '',
          isDisabled ? 'is-disabled' : '',
        ].join(' ')}
        style={style}
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
          renderContent()
        )}
      </StyledSelectOptionWrapper>
    </div>
  );
};

const localStyles: StylesConfig<BaseOption, boolean, GroupBase<BaseOption>> = {
  clearIndicator: provided => ({
    ...provided,
    color: theme.gray700,
    paddingLeft: 14,
    paddingRight: 4,
  }),
  // container
  control: (provided, state) => {
    const { size } = state.selectProps as (typeof state)['selectProps'] &
      AdditionalProps<BaseOption['value']>;
    return {
      ...provided,
      background: theme.inputBackground,
      borderColor: `${theme.gray200}`,
      borderRadius: 6,
      boxShadow: state.isFocused ? `${theme.glowBlue}` : '',
      color: theme.gray800,
      cursor: 'pointer',
      flexWrap: 'inherit',
      height: `var(--amino-size-${size})`,
      minHeight: `var(--amino-size-${size})`,
    };
  },
  dropdownIndicator: provided => ({
    ...provided,
    color: theme.gray900,
    paddingLeft: 4,
    paddingRight: 10,
  }),
  group: provided => ({
    ...provided,
    paddingBottom: 0,
    paddingTop: 0,
  }),
  // groupHeading
  // indicatorsContainer
  indicatorSeparator: provided => ({ ...provided, width: 0 }),
  input: provided => ({
    ...provided,
    color: theme.textColor,
    opacity: 0.8,
  }),
  // loadingIndicator
  // loadingMessage
  menu: provided => ({
    ...provided,
    background: theme.surfaceColor,
    borderRadius: 12,
    boxShadow: theme.v3ShadowLarge,
    marginTop: 4,
  }),
  menuList: provided => ({
    ...provided,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  }),
  // menuPortal
  multiValue: provided => ({
    ...provided,
    alignItems: 'center',
    background: theme.gray100,
    borderRadius: theme.radius4,
    fontWeight: 600,
    maxHeight: 20,
    minWidth: 'inherit',
    paddingRight: 2,
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: theme.textColor,
  }),
  // multiValueRemove
  // noOptionsMessage
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'inherit',
    borderRadius: '8px',
    color: state.isSelected ? theme.blue600 : theme.textColor,
    cursor: 'pointer',
    fontWeight: state.isSelected ? 500 : 400,
    paddingBottom: 7,
    paddingLeft: 8,
    paddingRight: 12,
    paddingTop: 7,
  }),
  placeholder: provided => ({
    ...provided,
    '.has-label.is-focused &': {
      opacity: 1,
    },
    opacity: 0,
  }),
  singleValue: provided => ({
    ...provided,
    color: theme.textColor,
    fontWeight: 500,
  }),
  valueContainer: provided => ({
    ...provided,
    '.has-icon &': { paddingLeft: 0 },
    flexWrap: 'nowrap',
    padding: 'unset',
    paddingLeft: 12,
  }),
};

export interface StyledReactSelectProps<
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> extends Props<Option, IsMulti, Group>,
    HelpTextProps,
    AdditionalProps<Option['value']> {
  closeOnOutsideScroll?: boolean;
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  size?: Size;
  styles?: StylesConfig<Option, IsMulti, Group>;
}

export const StyledReactSelect = <
  Option extends BaseOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  closeOnOutsideScroll = false,
  components,
  customOption,
  error,
  hasGroups,
  helpText,
  icon,
  label,
  menuPosition = 'fixed',
  placeholder,
  size = 'xl',
  styles,
  ...props
}: StyledReactSelectProps<Option, IsMulti, Group>) => {
  const additionalProps: AdditionalProps<Option['value']> = {
    customOption,
    hasGroups,
    icon,
    label,
    size,
  };
  const testId = useMemo(
    () => getTestId({ componentName: 'select', name: label }),
    [label],
  );

  const selectElement = useRef<Select<Option, IsMulti, Group>>(null);

  const closeMenuOnScroll = useMemo(() => {
    if (closeOnOutsideScroll) {
      return (e: Event) => {
        if (e.target instanceof HTMLElement) {
          return (
            !selectElement.current?.menuListRef?.isEqualNode(e.target) ?? true
          );
        }
        return true;
      };
    }

    return false;
  }, [closeOnOutsideScroll]);

  return (
    <StyledSelectWrapper
      className={[error ? 'has-error' : ''].join(' ')}
      data-testid={testId}
    >
      <ReactSelect<Option, IsMulti, Group>
        ref={selectElement}
        closeMenuOnScroll={closeMenuOnScroll}
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
        menuPosition={menuPosition}
        placeholder={placeholder || ''}
        styles={
          {
            ...styles,
            ...localStyles,
          } as StylesConfig<Option, IsMulti, Group>
        }
        {...props}
        {...additionalProps}
      />
      <HelpText error={error} helpText={helpText} />
    </StyledSelectWrapper>
  );
};
