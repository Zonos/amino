import { useEffect, useState } from 'react';

import { Checkbox } from 'src/components/checkbox/Checkbox';
import {
  type BaseFilterProps,
  useFilter,
} from 'src/components/filter/useFilter';
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

  const handleApply = () => {
    onChange(editingSelectedValues);
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      onChange([]);
      setEditingSelectedValues([]);
    } else {
      onChange(editingSelectedValues);
      setEditingSelectedValues(value);
    }
  };

  const { renderWrapper, setFilterText } = useFilter({
    dropdownTitle,
    filterExists: !!editingSelectedValues.length,
    label,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    const text =
      editingSelectedValues.length > 1
        ? `${editingSelectedValues.length} selected`
        : editingSelectedValues[0]?.label;
    setFilterText(text || '');
  }, [setFilterText, editingSelectedValues]);

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
