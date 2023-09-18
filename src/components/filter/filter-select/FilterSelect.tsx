import { useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { Select } from 'src/components/select/Select';
import type { IOption } from 'src/types/IOption';

type FilterSelectProps<
  T extends string = string,
  O extends IOption<string> = IOption<T>,
> = BaseFilterProps & {
  options: O[];
  value: O | null;
  onChange: (value: O | null) => void;
};

export const FilterSelect = <
  T extends string = string,
  O extends IOption<T> = IOption<T>,
>({
  onChange,
  options,
  value,
  ...props
}: FilterSelectProps<T, O>) => {
  const [editingValue, setEditingValue] = useState<O | null>(value);

  const handleApply: FilterApplyCallback = setFilterText => {
    onChange(editingValue);
    setFilterText(`is ${editingValue?.label || ''}`);
  };

  const handleRemove = () => {
    onChange(null);
    setEditingValue(null);
  };

  const { renderWrapper } = useFilterWrapper({
    ...props,
    filterExists: editingValue !== null,
    onApply: handleApply,
    onRemove: handleRemove,
  });

  return renderWrapper(
    <Select
      isClearable={false}
      onChange={setEditingValue}
      options={options}
      size="sm"
      value={options.filter(item => item.value === editingValue?.value)}
    />,
  );
};
