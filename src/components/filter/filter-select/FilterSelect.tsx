import { type KeyboardEvent, useCallback, useMemo, useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { Select, type SelectProps } from 'src/components/select/Select';
import type { SelectOption } from 'src/types/SelectOption';
import { truncateText } from 'src/utils/truncateText';

type CustomSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = Omit<SelectProps<T, O>, 'onChange' | 'value' | 'options'>;

export type FilterSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = BaseFilterProps & {
  filterTextCharacterLimit?: number;
  /**
   * @default `is ${value.label}`
   */
  getFilterText?: (value: O) => string;
  onChange: (value: T | null) => void;
  options: O[];
  selectProps?:
    | CustomSelectProps<T, O>
    | ((editingValue: O | null) => CustomSelectProps<T, O>);
  value: T | null;
};

/**
 * FilterSelect provides a dropdown-based single selection filter.
 * It allows users to select a single option from a list and integrates
 * with the filter wrapper system for consistent behavior.
 *
 * @example Basic usage
 * ```tsx
 * const [selected, setSelected] = useState<string | null>(null);
 *
 * <FilterSelect
 *   dropdownTitle="Status"
 *   label="Status"
 *   onChange={setSelected}
 *   options={[
 *     { label: 'Active', value: 'active' },
 *     { label: 'Pending', value: 'pending' },
 *     { label: 'Completed', value: 'completed' }
 *   ]}
 *   value={selected}
 * />
 * ```
 *
 * @example With initial selection
 * ```tsx
 * const [selected, setSelected] = useState<string | null>('active');
 *
 * <FilterSelect
 *   dropdownTitle="Status"
 *   label="Status"
 *   onChange={setSelected}
 *   options={[
 *     { label: 'Active', value: 'active' },
 *     { label: 'Pending', value: 'pending' },
 *     { label: 'Completed', value: 'completed' }
 *   ]}
 *   value={selected}
 * />
 * ```
 *
 * @example With custom filter text formatter
 * ```tsx
 * <FilterSelect
 *   dropdownTitle="Priority"
 *   getFilterText={(option) => `Priority: ${option.label}`}
 *   label="Priority"
 *   onChange={setPriority}
 *   options={[
 *     { label: 'High', value: 'high' },
 *     { label: 'Medium', value: 'medium' },
 *     { label: 'Low', value: 'low' }
 *   ]}
 *   value={priority}
 * />
 * ```
 *
 * @example With custom select props
 * ```tsx
 * <FilterSelect
 *   dropdownTitle="Country"
 *   label="Country"
 *   onChange={setCountry}
 *   options={countryOptions}
 *   selectProps={{
 *     isSearchable: true,
 *     placeholder: 'Select a country...',
 *     size: "md"
 *   }}
 *   value={country}
 * />
 * ```
 */
export const FilterSelect = <
  T extends string = string,
  O extends SelectOption<T> = SelectOption<T>,
>({
  filterTextCharacterLimit = 20,
  getFilterText: _getFilterText,
  onChange,
  options,
  selectProps,
  value,
  ...props
}: FilterSelectProps<T, O>) => {
  const [editingValue, setEditingValue] = useState<T | null>(value);
  const [menuOpen, setMenuOpen] = useState(false);

  const getFilterText = useMemo(
    () => _getFilterText || ((v: O) => `is ${v.label}`),
    [_getFilterText],
  );

  const selectedOption = useMemo(
    () => options.find(item => item.value === editingValue) || null,
    [editingValue, options],
  );

  const handleApplyFilterText: FilterApplyCallback = useCallback(
    setFilterText => {
      if (editingValue) {
        const option = options.find(item => item.value === editingValue);
        if (option) {
          const filterText = getFilterText(option);
          setFilterText(
            truncateText({
              length: filterTextCharacterLimit,
              text: filterText,
            }),
          );
        }
      }
    },
    [editingValue, filterTextCharacterLimit, getFilterText, options],
  );

  const handleApply: FilterApplyCallback = useCallback(
    setFilterText => {
      onChange(editingValue);
      handleApplyFilterText(setFilterText);
    },
    [editingValue, handleApplyFilterText, onChange],
  );

  const handleRemove = () => {
    onChange(null);
    setEditingValue(null);
  };

  const handleClose = () => {
    setEditingValue(value);
  };

  const { renderWrapper } = useFilterWrapper({
    ...props,
    initialFilterText: value ? `is ${value}` : undefined,
    isActive: !!value,
    onApply: handleApply,
    onApplyFilterText: handleApplyFilterText,
    onClose: handleClose,
    onRemove: handleRemove,
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (menuOpen) {
        event.stopPropagation();
      }
    }
  };

  const selectPropsResolved = useMemo(
    () =>
      typeof selectProps === 'function'
        ? selectProps(selectedOption)
        : selectProps,
    [selectProps, selectedOption],
  );

  return renderWrapper(
    <Select
      isClearable={false}
      isSearchable
      onChange={o => setEditingValue(o?.value || null)}
      onKeyDown={handleKeyDown}
      onMenuClose={() => setMenuOpen(false)}
      onMenuOpen={() => setMenuOpen(true)}
      options={options}
      size="sm"
      value={options.filter(item => item.value === editingValue)}
      {...selectPropsResolved}
    />,
  );
};
