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

import clsx from 'clsx';

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
import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';
import { getTestId } from 'src/utils/getTestId';

import styles from './_StyledReactSelect.module.scss';

const getRadius = ($size?: Size) => {
  switch ($size) {
    case 'sm':
      return `${theme.radius6}`;
    case 'lg':
      return `${theme.radius10}`;
    case 'xl':
      return `${theme.radius10}`;
    case 'md':
    default:
      return `${theme.radius8}`;
  }
};

type AdditionalProps<Value> = {
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  size?: Size;
  customOption?: (value: Value) => ReactNode;
};

const ClearIndicator = <
  Option extends SelectOption,
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
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>,
) => (
  <RScomponents.DropdownIndicator {...props}>
    <DoubleChevronIcon size={24} />
  </RScomponents.DropdownIndicator>
);

const Control = <
  Option extends SelectOption,
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
          hasValue && styles.hasValue,
          icon && styles.hasIcon,
          isFocused && styles.isFocused,
          label || (Array.isArray(value) && value.length > 1)
            ? styles.hasLabel
            : '',
          size && styles[size],
          styles.reactSelectControl,
          'react-select-control',
        ].join(' '),
      )}
      style={getStyles('control', props) as CSSProperties}
      {...innerProps}
    >
      {icon && <div className={styles.iconWrapper}>{icon}</div>}

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={styles.styledFloatedLabel}>
        {label}{' '}
        {Array.isArray(value) && value.length > 1 && (
          <strong className={styles.strongLabel}>
            ({value.length} selected)
          </strong>
        )}
      </label>
      {children}
    </div>
  );
};

const IconLabel = ({
  children,
  color,
  icon,
}: {
  children: ReactNode;
  color?: string;
  icon?: ReactNode;
}) => (
  <div
    className={styles.checkboxOptionIconWrapper}
    style={{ '--amino-styled-react-select-color': color || 'inherit' }}
  >
    {icon}
    {children}
  </div>
);

const MultiValueLabel = <
  Option extends SelectOption,
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
  Option extends SelectOption,
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
  Option extends SelectOption,
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
      <div className={styles.selectedSingleOptionWrapper}>
        <IconLabel color={color} icon={data.icon}>
          {children}
        </IconLabel>
        {isSelected && <CheckCircleIcon color="blue600" size={24} />}
      </div>
    );
  };

  return (
    <div ref={innerRef} {...innerProps}>
      <div
        className={[
          className,
          styles.styledSelectOptionWrapper,
          isFocused && styles.isFocused,
          isDisabled && styles.isDisabled,
        ].join(' ')}
        style={style}
      >
        {selectProps.isMulti ? (
          <Checkbox
            allowPropagation
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
      </div>
    </div>
  );
};

const localStyles: StylesConfig<
  SelectOption,
  boolean,
  GroupBase<SelectOption>
> = {
  clearIndicator: provided => ({
    ...provided,
    color: theme.gray700,
    paddingLeft: 14,
    paddingRight: 4,
  }),
  // container
  control: (provided, state) => {
    const { size } = state.selectProps as (typeof state)['selectProps'] &
      AdditionalProps<SelectOption['value']>;
    return {
      ...provided,
      background: theme.raisedSurfaceColor,
      borderColor: 'unset',
      borderRadius: getRadius(size),
      borderWidth: 0,
      boxShadow: state.isFocused
        ? `${theme.shadowSelectActive}`
        : `${theme.shadowSelectBase}`,
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

export type StyledReactSelectProps<
  Option extends SelectOption,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
> = {
  closeOnOutsideScroll?: boolean;
  components?: SelectComponentsConfig<Option, IsMulti, Group>;
  size?: Size;
  styles?: StylesConfig<Option, IsMulti, Group>;
} & Props<Option, IsMulti, Group> &
  HelpTextProps &
  AdditionalProps<Option['value']> &
  BaseProps;

export const StyledReactSelect = <
  Option extends SelectOption,
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
  style,
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
    <div
      className={clsx(styles.styledSelectWrapper, error && styles.hasError)}
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
            ...style,
            ...localStyles,
          } as StylesConfig<Option, IsMulti, Group>
        }
        {...props}
        {...additionalProps}
      />
      <HelpText error={error} helpText={helpText} />
    </div>
  );
};
