import { type Dispatch, useEffect, useState } from 'react';

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
  useFilterWrapper,
} from 'src/components/filter/useFilterWrapper';

type IBadgeFilterDateProps = BaseFilterProps & {
  dispatch: Dispatch<FilterDateAction>;
  filter: FilterDateState;
};

export const FilterDate = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: IBadgeFilterDateProps) => {
  const [editingValue, setEditingValue] = useState<FilterDateData>(
    filter.dateData,
  );
  const [rangeType, setRangeType] =
    useState<FilterDateRangeType>('is in the last');

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

  const handleApply = () => {
    dispatchDateValues(editingValue);
  };

  const handleToggle = (active: boolean) => {
    if (active) {
      dispatchDateValues(initialFilterDateState.dateData);
      setEditingValue(initialFilterDateState.dateData);
    } else {
      dispatchDateValues(editingValue);
      setEditingValue(filter.dateData);
    }
  };

  const { renderWrapper, setFilterText } = useFilterWrapper({
    dropdownTitle,
    filterExists: !!filter.dateData.dateBegin || !!filter.dateData.dateEnd,
    label,
    onApply: handleApply,
    onToggle: handleToggle,
  });

  useEffect(() => {
    setEditingValue(editingValue);
  }, [editingValue, rangeType]);

  return renderWrapper(
    <DateControl
      onChange={setEditingValue}
      onChangeFilterText={setFilterText}
      rangeType={rangeType}
      setRangeType={setRangeType}
      value={editingValue}
    />,
  );
};
