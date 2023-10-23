import { type KeyboardEvent, useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { Select } from 'src/components/select/Select';
import type { SelectOption } from 'src/types/SelectOption';

export type FilterSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = BaseFilterProps & {
  options: O[];
  value: O | null;
  onChange: (value: O | null) => void;
};

export const FilterSelect = <
  T extends string = string,
  O extends SelectOption<T> = SelectOption<T>,
>({
  onChange,
  options,
  value,
  ...props
}: FilterSelectProps<T, O>) => {
  const [editingValue, setEditingValue] = useState<O | null>(value);
  const [menuOpen, setMenuOpen] = useState(false);

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
    filterExists: !!value,
    onApply: handleApply,
    onRemove: handleRemove,
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (menuOpen) {
        event.stopPropagation();
      }
    }
  };

  return renderWrapper(
    <Select
      isClearable={false}
      onChange={setEditingValue}
      onKeyDown={handleKeyDown}
      onMenuClose={() => setMenuOpen(false)}
      onMenuOpen={() => setMenuOpen(true)}
      options={options}
      size="sm"
      value={options.filter(item => item.value === editingValue?.value)}
    />,
  );
};
