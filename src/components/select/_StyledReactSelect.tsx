import { type CSSProperties, type ReactNode, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
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

import type Select from 'node_modules/react-select/dist/declarations/src/Select';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  HelpText,
  type HelpTextProps,
} from 'src/components/help-text/HelpText';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { DoubleChevronIcon } from 'src/icons/DoubleChevronIcon';
import { RemoveCircleIcon } from 'src/icons/RemoveCircleIcon';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import type { SelectOption, SelectValue } from 'src/types/SelectOption';
import type { Size } from 'src/types/Size';
import { cn } from 'src/utils/cn';
import { getTestId } from 'src/utils/getTestId';

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
  customOption?: (value: Value) => ReactNode;
  hasGroups?: boolean;
  icon?: ReactNode;
  label?: string;
  size?: Size;
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
      className={cn(
        className,
        'react-select-control',
        hasValue && 'flex items-center',
        icon && 'flex items-center has-icon',
        isFocused && 'is-focused',
        isDisabled && 'opacity-disabled',
        menuIsOpen && 'menu-is-open',
        label || (Array.isArray(value) && value.length > 1) ? 'has-label' : '',
        size === 'sm' && 'h-8',
        size === 'md' && 'h-10',
        size === 'lg' && 'h-12',
        size === 'xl' && 'h-14',
      )}
      style={getStyles('control', props) as CSSProperties}
      {...innerProps}
    >
      {icon && (
        <div className="flex justify-evenly items-center text-gray-700 ml-amino-8 -mr-[2px] h-6 w-6">
          {icon}
        </div>
      )}
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
    className="flex items-center"
    style={{ '--amino-styled-react-select-color': color || 'inherit' }}
  >
    {icon && (
      <svg className="mr-1 text-gray-1000" style={{ color: 'inherit' }}>
        {icon}
      </svg>
    )}
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

  // We can have a lot of options, and with things like country select, the icons are a lot to load.
  const { inView, ref } = useInView({
    fallbackInView: true,
    triggerOnce: true,
  });

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
      <div ref={ref} className="flex items-center justify-between">
        {inView && (
          <IconLabel color={color} icon={data.icon}>
            {children}
          </IconLabel>
        )}
        {isSelected && <CheckmarkIcon color="blue600" size={24} />}
      </div>
    );
  };

  return (
    <div ref={innerRef} {...innerProps}>
      <div
        className={cn(
          className,
          'rounded-lg',
          isFocused &&
            !isDisabled &&
            'bg-gray-50 dark:bg-gray-100 [background-color:var(--amino-gray-50)!important] dark:[background-color:var(--amino-gray-100)!important]',
          isDisabled && 'opacity-disabled',
        )}
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
      </div>
    </div>
  );
};

const getMergedStyles = <
  V extends SelectValue,
  Option extends SelectOption<V>,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>(
  stylesProp?: StylesConfig<Option, IsMulti, Group>,
): StylesConfig<Option, IsMulti, Group> => ({
  clearIndicator: (provided, state) => ({
    ...provided,
    color: theme.gray700,
    paddingLeft: 14,
    paddingRight: 4,
    ...stylesProp?.clearIndicator?.(provided, state),
  }),
  // container
  control: (provided, state) => {
    const { size } = state.selectProps as (typeof state)['selectProps'] &
      AdditionalProps<SelectOption['value']>;
    return {
      ...provided,
      backgroundColor: theme.raisedSurfaceColor,
      borderColor: 'unset',
      borderRadius: getRadius(size),
      borderWidth: 0,
      boxShadow: state.isFocused
        ? `${theme.shadowRaisedFocus}`
        : `${theme.shadowRaisedStandard}`,
      color: theme.gray800,
      cursor: 'pointer',
      flexWrap: 'inherit',
      height: `var(--amino-size-${size})`,
      minHeight: `var(--amino-size-${size})`,
      ...stylesProp?.control?.(provided, state),
    };
  },
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: theme.gray900,
    paddingLeft: 4,
    paddingRight: 10,
    ...stylesProp?.dropdownIndicator?.(provided, state),
  }),
  group: (provided, state) => ({
    ...provided,
    paddingBottom: 0,
    paddingTop: 0,
    ...stylesProp?.group?.(provided, state),
  }),
  // groupHeading
  // indicatorsContainer
  indicatorSeparator: (provided, state) => ({
    ...provided,
    width: 0,
    ...stylesProp?.indicatorSeparator?.(provided, state),
  }),
  input: (provided, state) => ({
    ...provided,
    color: theme.textColor,
    opacity: 0.8,
    ...stylesProp?.input?.(provided, state),
  }),
  // loadingIndicator
  // loadingMessage
  menu: (provided, state) => ({
    ...provided,
    background: theme.surfaceColor,
    borderRadius: 12,
    boxShadow: theme.v3ShadowLarge,
    marginTop: 4,
    ...stylesProp?.menu?.(provided, state),
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 8,
    ...stylesProp?.menuList?.(provided, state),
  }),
  // menuPortal
  multiValue: (provided, state) => ({
    ...provided,
    alignItems: 'center',
    background: theme.gray100,
    borderRadius: theme.radius4,
    fontWeight: 600,
    maxHeight: 20,
    minWidth: 'inherit',
    paddingRight: 2,
    ...stylesProp?.multiValue?.(provided, state),
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: theme.textColor,
    ...stylesProp?.multiValueLabel?.(provided, state),
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
    ...stylesProp?.option?.(provided, state),
  }),
  placeholder: (provided, state) => ({
    ...provided,
    '.has-label.is-focused &': {
      opacity: 1,
    },
    color: 'var(--amino-gray-500)',
    fontSize: 'var(--amino-font-size-base)',
    fontWeight: 400,
    opacity: 1,
    ...stylesProp?.placeholder?.(provided, state),
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: theme.textColor,
    fontWeight: 500,
    ...stylesProp?.singleValue?.(provided, state),
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    '.has-icon &': { paddingLeft: 0 },
    flexWrap: 'nowrap',
    padding: 'unset',
    paddingLeft: 12,
    ...stylesProp?.valueContainer?.(provided, state),
  }),
});

export type StyledReactSelectProps<
  V extends SelectValue,
  Option extends SelectOption<V>,
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
  V extends SelectValue,
  Option extends SelectOption<V>,
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
  size = 'md',
  style,
  ...props
}: StyledReactSelectProps<V, Option, IsMulti, Group>) => {
  const additionalProps: AdditionalProps<V> = {
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
          return !selectElement.current?.menuListRef?.isEqualNode(e.target);
        }
        return true;
      };
    }

    return false;
  }, [closeOnOutsideScroll]);

  const { styles: stylesProp, ...restProps } = props;
  const mergedStyles = getMergedStyles(stylesProp);
  return (
    <div
      className={cn(
        'relative',
        '[&_.react-select-control+div]:z-20',
        '[&_.react-select-control.is-focused]:shadow-[var(--amino-shadow-raised-standard)]',
        '[&_.react-select-control.is-focused:not(.menu-is-open)]:shadow-[var(--amino-shadow-raised-focus)]',
        error && [
          '[&_.has-label]:text-red-600',
          '[&_.react-select-control]:shadow-[var(--amino-shadow-raised-error)]',
          '[&_.react-select-control.is-focused:not(.menu-is-open)]:shadow-[var(--amino-shadow-raised-error-focus)]',
        ],
      )}
      data-testid={testId}
    >
      {label && (
        <label className="text-amino-secondary block mb-2">{label}</label>
      )}
      <ReactSelect<Option, IsMulti, Group>
        ref={selectElement}
        closeMenuOnScroll={closeMenuOnScroll}
        components={
          {
            ClearIndicator,
            Control,
            DropdownIndicator,
            MultiValueLabel,
            MultiValueRemove,
            Option: CheckboxOptionComponent,
            ...components,
          } as SelectComponentsConfig<Option, IsMulti, Group>
        }
        menuPosition={menuPosition}
        placeholder={placeholder || ''}
        styles={
          {
            ...style,
            ...mergedStyles,
          } as StylesConfig<Option, IsMulti, Group>
        }
        {...restProps}
        {...additionalProps}
      />
      <HelpText error={error} helpText={helpText} />
    </div>
  );
};
