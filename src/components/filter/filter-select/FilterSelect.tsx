import { type KeyboardEvent, useCallback, useMemo, useState } from 'react';

import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';
import { type SelectProps, Select } from 'src/components/select/Select';
import type { SelectOption } from 'src/types/SelectOption';
import { truncateText } from 'src/utils/truncateText';

type CustomSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = Omit<SelectProps<T, O>, 'onChange' | 'value' | 'options'>;

export type FilterSelectProps<
  T extends string = string,
  O extends SelectOption<string> = SelectOption<T>,
> = BaseFilterProps & {
  filterTextCharacterLimit?: number;
  options: O[];
  selectProps?:
    | CustomSelectProps<T, O>
    | ((editingValue: O | null) => CustomSelectProps<T, O>);
  value: T | null;
  /**
   * @default `is ${value.label}`
   */
  getFilterText?: (value: O) => string;
  onChange: (value: T | null) => void;
};

export const FilterSelect = <
  T extends string = string,
  O extends SelectOption<T> = SelectOption<T>,
>({
  filterTextCharacterLimit = 20,
  getFilterText: _getFilterText,
  onChange,
  options,
  selectProps,
  value,
  ...props
}: FilterSelectProps<T, O>) => {
  const [editingValue, setEditingValue] = useState<T | null>(value);
  const [menuOpen, setMenuOpen] = useState(false);

  const getFilterText = useMemo(
    () => _getFilterText || ((v: O) => `is ${v.label}`),
    [_getFilterText],
  );

  const selectedOption = useMemo(
    () => options.find(item => item.value === editingValue) || null,
    [editingValue, options],
  );

  const handleApplyFilterText: FilterApplyCallback = useCallback(
    setFilterText => {
      if (editingValue) {
        const option = options.find(item => item.value === editingValue);
        if (option) {
          const filterText = getFilterText(option);
          setFilterText(
            truncateText({
              length: filterTextCharacterLimit,
              text: filterText,
            }),
          );
        }
      }
    },
    [editingValue, filterTextCharacterLimit, getFilterText, options],
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
    setEditingValue(null);
  };

  const handleClose = () => {
    setEditingValue(value);
  };

  const { renderWrapper } = useFilterWrapper({
    ...props,
    initialFilterText: value ? `is ${value}` : undefined,
    isActive: !!value,
    onApply: handleApply,
    onApplyFilterText: handleApplyFilterText,
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
        ? selectProps(selectedOption)
        : selectProps,
    [selectProps, selectedOption],
  );

  return renderWrapper(
    <Select
      isClearable={false}
      onChange={o => setEditingValue(o?.value || null)}
      onKeyDown={handleKeyDown}
      onMenuClose={() => setMenuOpen(false)}
      onMenuOpen={() => setMenuOpen(true)}
      options={options}
      size="sm"
      value={options.filter(item => item.value === editingValue)}
      {...selectPropsResolved}
    />,
  );
};
