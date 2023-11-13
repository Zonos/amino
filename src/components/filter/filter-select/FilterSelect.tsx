import { type KeyboardEvent, useMemo, useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { type SelectProps, Select } from 'src/components/select/Select';
import type { SelectOption } from 'src/types/SelectOption';

type CustomSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = Omit<SelectProps<O>, 'onChange' | 'value' | 'options'>;

export type FilterSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = BaseFilterProps & {
  options: O[];
  selectProps?:
    | CustomSelectProps<T, O>
    | ((editingValue: O | null) => CustomSelectProps<T, O>);
  value: O | null;
  onChange: (value: O | null) => void;
};

export const FilterSelect = <
  T extends string = string,
  O extends SelectOption<T> = SelectOption<T>,
>({
  onChange,
  options,
  selectProps,
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

  const handleClose = () => {
    setEditingValue(value);
  };

  const { renderWrapper } = useFilterWrapper({
    ...props,
    filterExists: !!value,
    onApply: handleApply,
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
        ? selectProps(editingValue)
        : selectProps,
    [editingValue, selectProps],
  );

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
      {...selectPropsResolved}
    />,
  );
};
