import { useEffect, useState } from 'react';

import {
  type BaseFilterProps,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { Input } from 'src/components/input/Input';

export type FilterTextProps = BaseFilterProps & {
  value: string | null;
  onChange: (value: string | null) => void;
};

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

  const { renderWrapper, setFilterText } = useFilterWrapper({
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
