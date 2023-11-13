import { useState } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import type { SelectOption } from 'src/types/SelectOption';

export type FilterMultiSelectProps<T extends string = string> =
  BaseFilterProps & {
    options: SelectOption<T>[];
    value: SelectOption<T>[];
    onChange: (value: SelectOption<T>[]) => void;
  };

export const FilterMultiSelect = <T extends string = string>({
  dropdownTitle,
  label,
  onChange,
  options,
  value,
}: FilterMultiSelectProps<T>) => {
  const [editingSelectedValues, setEditingSelectedValues] =
    useState<SelectOption<T>[]>(value);

  const handleApply: FilterApplyCallback = setFilterText => {
    const text =
      editingSelectedValues.length > 1
        ? `${editingSelectedValues.length} selected`
        : editingSelectedValues[0]?.label || '';
    setFilterText(text);
    onChange(editingSelectedValues);
  };

  const handleRemove = () => {
    onChange([]);
    setEditingSelectedValues([]);
  };

  const handleClose = () => {
    setEditingSelectedValues(value);
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    filterExists: !!value.length,
    label,
    onApply: handleApply,
    onClose: handleClose,
    onRemove: handleRemove,
  });

  return renderWrapper(
    options.map(option => (
      <Checkbox
        key={option.value}
        checked={
          editingSelectedValues.some(x => x.value === option.value) || false
        }
        label={option.label}
        onChange={() => {
          if (editingSelectedValues.some(x => x.value === option.value)) {
            setEditingSelectedValues(
              editingSelectedValues.filter(x => x.value !== option.value),
            );
          } else {
            setEditingSelectedValues([...editingSelectedValues, option]);
          }
        }}
      />
    )),
  );
};
