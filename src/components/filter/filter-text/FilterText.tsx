import { useEffect, useState } from 'react';

import {
  type IBaseFilterProps,
  useFilter,
} from 'src/components/filter/useFilter';
import { Input } from 'src/components/input/Input';

export type FilterTextProps = {
  value: string | null;
  onChange: (value: string | null) => void;
} & IBaseFilterProps;

export const FilterText = ({
  dropdownTitle,
  label,
  onChange,
  value,
}: FilterTextProps) => {
  const [editingValue, setEditingValue] = useState<string>(value || '');

  const handleToggle = (active: boolean) => {
    if (active) {
      onChange(null);
      setEditingValue('');
    } else {
      onChange(editingValue);
      setEditingValue(value || '');
    }
  };

  const handleApply = () => {
    onChange(editingValue);
  };

  const { renderWrapper, setFilterText } = useFilter({
    dropdownTitle,
    filterExists: !!value,
    label,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    setFilterText(editingValue);
  }, [setFilterText, editingValue]);

  return renderWrapper(
    <Input
      onChange={e => setEditingValue(e.target.value)}
      size="sm"
      type="text"
      value={editingValue}
    />,
  );
};
