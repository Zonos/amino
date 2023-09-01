import { useEffect, useState } from 'react';

import {
  type BaseFilterProps,
  useFilter,
} from 'src/components/filter/useFilter';
import { Select } from 'src/components/select/Select';
import type { IOption } from 'src/types/IOption';

type FilterSelectProps<T extends string = string> = BaseFilterProps & {
  options: IOption<T>[];
  value: IOption<T> | null;
  onChange: (value: IOption<T> | null) => void;
};

export const FilterSelect = <T extends string = string>({
  onChange,
  options,
  value,
  ...props
}: FilterSelectProps<T>) => {
  const [editingValue, setEditingValue] = useState<IOption<T> | null>(value);

  const handleApply = () => {
    onChange(editingValue);
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      onChange(null);
    } else {
      onChange(editingValue);
    }
  };

  const { renderWrapper, setFilterText } = useFilter({
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
