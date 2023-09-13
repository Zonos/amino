import { useEffect, useState } from 'react';

import {
  type BaseFilterProps,
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

  const handleApply = () => {
    onChange(editingValue);
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      onChange(null);
      setEditingValue(null);
    } else {
      onChange(editingValue);
      setEditingValue(value || null);
    }
  };

  const { renderWrapper, setFilterText } = useFilterWrapper({
    ...props,
    filterExists: editingValue !== null,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    setFilterText(`is ${editingValue?.label || ''}`);
  }, [setFilterText, editingValue?.label]);

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
