import { CSSProperties, ReactNode, useMemo, useRef } from 'react';
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
import Select from 'react-select/dist/declarations/src/Select';

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
import { IOption } from 'src/types/IOption';
import { Size } from 'src/types/Size';
import { getTestId } from 'src/utils/getTestId';
import styled, { css } from 'styled-components';

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
) => (
  <RScomponents.ClearIndicator {...props}>
    <RemoveCircleIcon size={19} />
  </RScomponents.ClearIndicator>
);

const DropdownIndicator = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => (
  <RScomponents.DropdownIndicator {...props}>
    <DoubleChevronIcon size={20} />
  </RScomponents.DropdownIndicator>
);

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.grayD20};
  padding: 10px;
`;

const StyledFloatedLabel = styled.label<{ $size?: Size }>`
  position: absolute;
  transition: ${theme.transition};
  font-size: ${theme.textBase};
  line-height: ${theme.textBase};
  transform-origin: left top;
  left: calc(${theme.spaceHalf} - 2px);
  .has-icon & {
    left: calc(${theme.spaceDouble} + 2px);
  }
  top: calc(50% - ${theme.textBase} / 2);
  .has-label & {
    & + div {
      align-self: flex-end;
    }
  }
  .has-value &,
  .is-focused & {
    top: calc(${theme.spaceQuarter} + 3px);
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
          'react-select-control',
        ].join(' ')
      )}
      ref={innerRef}
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
    color: black;
  }
`;

const StyledSelectOptionWrapper = styled.div`
  &:not(.is-disabled) {
    &.is-focused,
    &:hover {
      background-color: ${theme.grayL80} !important;
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
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  children,
  ...props
}: MultiValueGenericProps<Option, IsMulti, Group>) => (
  <RScomponents.MultiValueLabel {...props}>
    <IconLabel icon={props.data.icon}>{children}</IconLabel>
  </RScomponents.MultiValueLabel>
);

const MultiValueRemove = <
  Option extends IOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>({
  innerProps,
}: MultiValueRemoveProps<Option, IsMulti, Group>) => (
  <div {...innerProps} role="button">
    <RemoveIcon size={14} />
  </div>
);

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

  const { color, ...style } = getStyles('option', props) as CSSProperties;
  if (hasGroups) {
    style.paddingLeft = 48;
  }
  return (
    <div ref={innerRef} {...innerProps}>
      <StyledSelectOptionWrapper
        style={style}
        className={[
          className,
          isFocused ? 'is-focused' : '',
          isDisabled ? 'is-disabled' : '',
        ].join(' ')}
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
            {isSelected && <CheckCircleIcon color="blue600" size={16} />}
          </SelectedSingleOptionWrapper>
        )}
      </StyledSelectOptionWrapper>
    </div>
  );
};

const localStyles: StylesConfig<IOption, boolean, GroupBase<IOption>> = {
  clearIndicator: provided => ({
    ...provided,
    color: `${theme.grayD20}`,
    paddingLeft: 14,
    paddingRight: 4,
  }),
  // container
  control: (provided, state) => {
    const { size } = state.selectProps as typeof state['selectProps'] &
      AdditionalProps;
    return {
      ...provided,
      borderColor: `${theme.grayL60}`,
      borderRadius: 6,
      cursor: 'pointer',
      color: theme.grayD40,
      height: `var(--amino-size-${size})`,
      flexWrap: 'inherit',
      minHeight: `var(--amino-size-${size})`,
      boxShadow: state.isFocused ? `${theme.glowBlue}` : '',
    };
  },
  dropdownIndicator: provided => ({
    ...provided,
    color: `${theme.grayD60}`,
    paddingLeft: 4,
    paddingRight: 10,
  }),
  group: provided => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  // groupHeading
  // indicatorsContainer
  indicatorSeparator: provided => ({ ...provided, width: 0 }),
  // input
  // loadingIndicator
  // loadingMessage
  menu: provided => ({
    ...provided,
    borderRadius: 12,
    boxShadow: theme.v3ShadowLarge,
    marginTop: 4,
  }),
  menuList: provided => ({
    ...provided,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  }),
  // menuPortal
  multiValue: provided => ({
    ...provided,
    background: theme.grayL60,
    color: 'black',
    fontWeight: 500,
    minWidth: 'inherit',
  }),
  // multiValueLabel
  // multiValueRemove
  // noOptionsMessage
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? theme.blueBase : 'black',
    fontWeight: state.isSelected ? 500 : 400,
    backgroundColor: 'inherit',
    paddingTop: 7,
    paddingRight: 12,
    paddingBottom: 7,
    paddingLeft: 8,
    borderRadius: '8px',
    cursor: 'pointer',
  }),
  placeholder: provided => ({
    ...provided,
    opacity: 0,
    '.has-label.is-focused &': {
      opacity: 1,
    },
  }),
  singleValue: provided => ({
    ...provided,
    fontWeight: 500,
  }),
  valueContainer: provided => ({
    ...provided,
    flexWrap: 'nowrap',
    padding: 'unset',
    paddingLeft: 12,
    '.has-icon &': { paddingLeft: 0 },
  }),
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
  closeOnOutsideScroll?: boolean;
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
  placeholder,
  menuPosition = 'fixed',
  closeOnOutsideScroll = false,
  ...props
}: StyledReactSelectProps<Option, IsMulti, Group>) => {
  const additionalProps: AdditionalProps = {
    hasGroups,
    icon,
    label,
    size,
  };
  const testId = useMemo(
    () => getTestId({ componentName: 'select', name: label }),
    [label]
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
      data-testid={testId}
      className={[error ? 'has-error' : ''].join(' ')}
    >
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
        menuPosition={menuPosition}
        placeholder={placeholder || ''}
        styles={
          {
            ...styles,
            ...localStyles,
          } as StylesConfig<Option, IsMulti, Group>
        }
        ref={selectElement}
        closeMenuOnScroll={closeMenuOnScroll}
        {...props}
        {...additionalProps}
      />
      <HelpText error={error} helpText={helpText} />
    </StyledSelectWrapper>
  );
};
