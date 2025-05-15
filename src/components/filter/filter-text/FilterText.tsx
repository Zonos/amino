import { useCallback, useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { Input } from 'src/components/input/Input';

export type FilterTextProps = BaseFilterProps & {
  onChange: (value: string | null) => void;
  value: string | null;
};

/**
 * FilterText provides a text input filter for searching or filtering by text.
 * It allows users to type text input and integrates with the filter wrapper system
 * for consistent behavior across filters.
 *
 * @example Basic usage
 * ```tsx
 * const [searchText, setSearchText] = useState<string | null>(null);
 *
 * <FilterText
 *   dropdownTitle="Search"
 *   label="Name"
 *   onChange={setSearchText}
 *   value={searchText}
 * />
 * ```
 *
 * @example With initial value
 * ```tsx
 * const [searchText, setSearchText] = useState<string | null>("initial search");
 *
 * <FilterText
 *   dropdownTitle="Search Products"
 *   label="Product Name"
 *   onChange={setSearchText}
 *   value={searchText}
 * />
 * ```
 *
 * @example As part of a filter group
 * ```tsx
 * <FilterWrapper>
 *   <FilterText
 *     dropdownTitle="Search"
 *     label="Search"
 *     onChange={setSearchText}
 *     value={searchText}
 *   />
 *   <OtherFilters... />
 * </FilterWrapper>
 * ```
 */
export const FilterText = ({
  dropdownTitle,
  label,
  onChange,
  value,
}: FilterTextProps) => {
  const [editingValue, setEditingValue] = useState<string>(value || '');

  const handleApplyFilterText: FilterApplyCallback = useCallback(
    setFilterText => {
      setFilterText(editingValue);
    },
    [editingValue],
  );

  const handleApply: FilterApplyCallback = useCallback(
    setFilterText => {
      onChange(editingValue);
      handleApplyFilterText(setFilterText);
    },
    [editingValue, handleApplyFilterText, onChange],
  );

  const handleRemove = () => {
    onChange(null);
    setEditingValue('');
  };

  const handleClose = () => {
    setEditingValue(value || '');
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    isActive: !!value,
    label,
    onApply: handleApply,
    onApplyFilterText: handleApplyFilterText,
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
