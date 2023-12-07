import { useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
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

  const handleApply: FilterApplyCallback = setFilterText => {
    onChange(editingValue);
    setFilterText(editingValue);
  };

  const handleRemove = () => {
    onChange(null);
    setEditingValue('');
  };

  const handleClose = () => {
    setEditingValue(value || '');
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    filterExists: !!value,
    label,
    onApply: handleApply,
    onClose: handleClose,
    onRemove: handleRemove,
  });

  return renderWrapper(
    <Input
      onChange={e => setEditingValue(e.target.value)}
      size="sm"
      type="text"
      value={editingValue}
    />,
  );
};
