import { type Dispatch, useEffect, useState } from 'react';

import { Checkbox } from '@zonos/amino/components/checkbox/Checkbox';
import { type IOption } from '@zonos/amino/types/IOption';

import type { IFilter } from 'src/components/orders/all/OrderFilter/filterReducer';
import {
  type IBaseBadgeFilterProps,
  useFilter,
} from 'src/components/ui/filters/useFilter';

type IBadgeFilterMultiSelectProps = {
  dispatch: Dispatch<string[]>;
  filter: IFilter;
  options: IOption<string>[];
} & IBaseBadgeFilterProps;

export const BadgeFilterMultiSelect = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
  options,
}: IBadgeFilterMultiSelectProps) => {
  const [editingSelectedValues, setEditingSelectedValues] = useState<string[]>(
    filter.serviceLevels,
  );
  const handleApply = () => {
    dispatch(editingSelectedValues);
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      setEditingSelectedValues([]);
      dispatch([]);
    } else {
      dispatch(editingSelectedValues);
    }
  };

  const { renderWrapper, setFilterText } = useFilter({
    dropdownTitle,
    filterExists: !!filter.serviceLevels.length,
    label,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    const text =
      editingSelectedValues.length > 1
        ? `${editingSelectedValues.length} selected`
        : editingSelectedValues[0];
    setFilterText(text || '');
  }, [setFilterText, editingSelectedValues]);

  return renderWrapper(
    options.map(option => (
      <Checkbox
        key={option.value}
        checked={editingSelectedValues.some(x => x === option.value) || false}
        label={option.label}
        onChange={() => {
          if (editingSelectedValues.some(x => x === option.value)) {
            setEditingSelectedValues(
              editingSelectedValues.filter(x => x !== option.value),
            );
          } else {
            setEditingSelectedValues([...editingSelectedValues, option.value]);
          }
        }}
      />
    )),
  );
};
