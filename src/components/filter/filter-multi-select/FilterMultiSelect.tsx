import { useCallback, useState } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { VStack } from 'src/components/stack/VStack';
import type { SelectOption, SelectValue } from 'src/types/SelectOption';

import styles from './FilterMultiSelect.module.scss';

export type FilterMultiSelectProps<T extends SelectValue = SelectValue> =
  BaseFilterProps & {
    onChange: (value: T[]) => void;
    options: SelectOption<T>[];
    value: T[];
  };

/**
 * FilterMultiSelect provides a checkbox-based multi-selection filter.
 * It allows users to select multiple options from a list and integrates
 * with the filter wrapper system for consistent behavior.
 *
 * @example Basic usage
 * ```tsx
 * const [selected, setSelected] = useState<string[]>([]);
 *
 * <FilterMultiSelect
 *   dropdownTitle="Categories"
 *   label="Category"
 *   onChange={setSelected}
 *   options={[
 *     { label: 'Electronics', value: 'electronics' },
 *     { label: 'Clothing', value: 'clothing' },
 *     { label: 'Books', value: 'books' }
 *   ]}
 *   value={selected}
 * />
 * ```
 *
 * @example With initial selection
 * ```tsx
 * const [selected, setSelected] = useState<string[]>(['electronics']);
 *
 * <FilterMultiSelect
 *   dropdownTitle="Product Type"
 *   label="Type"
 *   onChange={setSelected}
 *   options={[
 *     { label: 'Electronics', value: 'electronics' },
 *     { label: 'Clothing', value: 'clothing' },
 *     { label: 'Books', value: 'books' }
 *   ]}
 *   value={selected}
 * />
 * ```
 *
 * @example With numeric values
 * ```tsx
 * const [selected, setSelected] = useState<number[]>([]);
 *
 * <FilterMultiSelect<number>
 *   dropdownTitle="Priority"
 *   label="Priority Level"
 *   onChange={setSelected}
 *   options={[
 *     { label: 'High', value: 3 },
 *     { label: 'Medium', value: 2 },
 *     { label: 'Low', value: 1 }
 *   ]}
 *   value={selected}
 * />
 * ```
 */
export const FilterMultiSelect = <T extends SelectValue = SelectValue>({
  dropdownTitle,
  label,
  onChange,
  options,
  value,
}: FilterMultiSelectProps<T>) => {
  const [editingSelectedValues, setEditingSelectedValues] =
    useState<T[]>(value);

  const handleApplyFilterText: FilterApplyCallback = useCallback(
    setFilterText => {
      if (editingSelectedValues.length === 1) {
        const singleOption = options.find(
          option => option.value === editingSelectedValues[0],
        );
        setFilterText(singleOption?.label || '1 selected');
      } else {
        setFilterText(`${editingSelectedValues.length} selected`);
      }
    },
    [editingSelectedValues, options],
  );

  const handleApply: FilterApplyCallback = useCallback(
    setFilterText => {
      onChange(editingSelectedValues);
      handleApplyFilterText(setFilterText);
    },
    [editingSelectedValues, handleApplyFilterText, onChange],
  );

  const handleRemove = () => {
    onChange([]);
    setEditingSelectedValues([]);
  };

  const handleClose = () => {
    setEditingSelectedValues(value);
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    isActive: !!value.length,
    label,
    onApply: handleApply,
    onApplyFilterText: handleApplyFilterText,
    onClose: handleClose,
    onRemove: handleRemove,
  });

  return renderWrapper(
    <VStack className={styles.vStackStyled} spacing={8}>
      {options.map(option => (
        <Checkbox
          key={option.value}
          checked={editingSelectedValues.some(x => x === option.value) || false}
          label={option.label}
          onChange={() => {
            if (editingSelectedValues.some(x => x === option.value)) {
              setEditingSelectedValues(
                editingSelectedValues.filter(x => x !== option.value),
              );
            } else {
              setEditingSelectedValues([
                ...editingSelectedValues,
                option.value,
              ]);
            }
          }}
        />
      ))}
    </VStack>,
  );
};
