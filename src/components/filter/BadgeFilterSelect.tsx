import { useEffect, useState } from 'react';

import { type IOption } from '@zonos/amino/types/IOption';

import {
  type IBaseBadgeFilterProps,
  type IChangeProps,
  useFilter,
} from 'src/components/ui/filters/useFilter';
import { Select } from 'src/components/ui/Select';

type IBadgeFilterSelectProps<T extends string = string> = {
  options: IOption<T>[];
} & IChangeProps<IOption<T>> &
  IBaseBadgeFilterProps;

export const BadgeFilterSelect = <T extends string = string>({
  onChange,
  options,
  value,
  ...props
}: IBadgeFilterSelectProps<T>) => {
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
