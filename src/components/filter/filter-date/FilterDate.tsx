import { type Dispatch, useState } from 'react';

import { DateControl } from 'src/components/filter/filter-date/DateControls';
import {
  type FilterDateAction,
  type FilterDateData,
  type FilterDateRangeType,
  type FilterDateState,
  initialFilterDateState,
} from 'src/components/filter/filter-date/filterDateReducer';
import {
  type BaseFilterProps,
  type FilterApplyCallback,
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';

export type FilterDateProps = BaseFilterProps & {
  dispatch: Dispatch<FilterDateAction>;
  filter: FilterDateState;
};

/**
 * Assumes exclusive date range. Specific formats/ranges should be handled upstream.
 */
export const FilterDate = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: FilterDateProps) => {
  const [editingValue, setEditingValue] = useState<FilterDateData>(
    filter.dateData,
  );
  const [rangeType, setRangeType] = useState<FilterDateRangeType>(
    filter.dateRangeType,
  );

  const [editingFilterText, setEditingFilterText] = useState<string>('');

  const dispatchDateValues = (value: FilterDateData) => {
    dispatch({
      name: 'dateRangeType',
      type: 'change',
      value: rangeType,
    });
    dispatch({
      name: 'dateData.dateBegin',
      type: 'change',
      value: value.dateBegin || null,
    });
    dispatch({
      name: 'dateData.dateEnd',
      type: 'change',
      value: value.dateEnd || null,
    });
    dispatch({
      name: 'dateData.lastCount',
      type: 'change',
      value: value.lastCount,
    });
    dispatch({
      name: 'dateData.lastUnit',
      type: 'change',
      value: value.lastUnit,
    });
  };

  const handleApply: FilterApplyCallback = setFilterText => {
    dispatchDateValues(editingValue);
    dispatch({
      name: 'isActive',
      type: 'change',
      value: true,
    });
    setFilterText(editingFilterText);
  };

  const handleRemove = () => {
    dispatch({
      name: 'isActive',
      type: 'change',
      value: false,
    });
    dispatch({
      name: 'dateRangeType',
      type: 'change',
      value: rangeType,
    });
    dispatchDateValues(initialFilterDateState.dateData);
    setEditingValue(initialFilterDateState.dateData);
    setRangeType(initialFilterDateState.dateRangeType);
  };

  const handleClose = () => {
    setEditingValue(filter.dateData);
    setRangeType(filter.dateRangeType);
  };

  const { renderWrapper } = useFilterWrapper({
    dropdownTitle,
    filterExists: !!filter.dateData.dateBegin || !!filter.dateData.dateEnd,
    label,
    onApply: handleApply,
    onClose: handleClose,
    onRemove: handleRemove,
  });

  const handleChangeFilterText = (text: string) => {
    setEditingFilterText(text);
  };

  return renderWrapper(
    <DateControl
      onChange={setEditingValue}
      onChangeFilterText={handleChangeFilterText}
      rangeType={rangeType}
      setRangeType={setRangeType}
      value={editingValue}
    />,
  );
};
