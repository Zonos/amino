import { useState } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import type { IOption } from 'src/types/IOption';

type FilterMultiSelectProps<T extends string = string> = BaseFilterProps & {
  options: IOption<T>[];
  value: IOption<T>[];
  onChange: (value: IOption<T>[]) => void;
};

export const FilterMultiSelect = <T extends string = string>({
  dropdownTitle,
  label,
  onChange,
  options,
  value,
}: FilterMultiSelectProps<T>) => {
  const [editingSelectedValues, setEditingSelectedValues] =
    useState<IOption<T>[]>(value);

  const handleApply: FilterApplyCallback = setFilterText => {
    const text =
      editingSelectedValues.length > 1
        ? `${editingSelectedValues.length} selected`
        : editingSelectedValues[0]?.label;
    setFilterText(text || '');
    onChange(editingSelectedValues);
  };

  const handleRemove = () => {
    onChange([]);
    setEditingSelectedValues([]);
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    filterExists: !!editingSelectedValues.length,
    label,
    onApply: handleApply,
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
