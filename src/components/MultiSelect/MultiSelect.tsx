import React, { ComponentType } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components,
  ControlProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
  GroupBase,
  OptionsOrGroups,
  PlaceholderProps,
  StylesConfig,
} from 'react-select';

import styled, { CSSObject } from 'styled-components';

import { ChevronDownSolidIcon, RemoveCircleSolidIcon } from 'icons';

import { OptionState } from './OptionState';

export type MultiSelectOption = { label: string; value: string };
type AdditionalProps = { label?: string };

const ClearIndicator = (
  props: ClearIndicatorProps<MultiSelectOption, true>
) => {
  return (
    <components.ClearIndicator {...props}>
      <RemoveCircleSolidIcon size={17} />
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
    top: var(--amino-space-half);
    transform: scale(0.8);
  }
`;

const StrongLabel = styled.strong`
  font-weight: 600;
`;

// const Control = (props: ControlProps<MultiSelectOption, true>) => {
//   const { selectProps } = props;
//   const { label, value } = selectProps as typeof props['selectProps'] &
//     AdditionalProps;
//   return (
//     <div
//       className={[label ? 'has-label' : '', value ? 'has-content' : ''].join(
//         ' '
//       )}
//     >
//       <Label>
//         {label}{' '}
//         {Array.isArray(value) && !!value.length && (
//           <StrongLabel>{`(${value.length} selected)`}</StrongLabel>
//         )}
//       </Label>
//       <div />
//       <components.Control {...props} />
//     </div>
//   );
// };

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
  console.log(props);
  return (
    <div
      ref={innerRef}
      style={getStyles('control', props)}
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

const styles = {
  clearIndicator: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      color: `var(--amino-gray-800)`,
      paddingLeft: 14,
      paddingRight: 4,
    };
  },
  container: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
    };
  },
  control: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      height: '3.5rem',
    };
  },
  dropdownIndicator: (provided: CSSObjectWithLabel) => {
    return {
      ...provided,
      color: `var(--amino-gray-800)`,
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
  // menu
  // menuList
  // menuPortal
  multiValue: (provided: CSSObjectWithLabel) =>
    ({
      ...provided,
      minWidth: 'inherit',
    } as CSSObject),
  // multiValueLabel
  // multiValueRemove
  // noOptionsMessage
  option: (provided: CSSObjectWithLabel, state: OptionState) =>
    ({
      ...provided,
      color: state.isSelected ? 'inherit' : 'inherit',
      backgroundColor: state.isSelected ? 'inherit' : 'inherit',
    } as CSSObject),
  // placeholder
  // singleValue
  valueContainer: (provided: CSSObjectWithLabel) =>
    ({
      ...provided,
      flexWrap: 'nowrap',
      marginLeft: 'var(--amino-space-half)',
      paddingLeft: '0',
    } as CSSObject),
};

// const Input = (props) => {
//   return (
//     <FloatLabelInput
//       label="Currencies"
//       input={<components.Input {...props} />}
//     />
//   );
// };

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
        // Option,
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
        if (Array.isArray(changed) && meta.action === 'select-option') {
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
