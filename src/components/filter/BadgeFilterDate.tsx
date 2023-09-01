import { type Dispatch, useEffect, useState } from 'react';

import {
  type IChangeFilterAction,
  type IDateFilterData,
  type IDateRangeType,
  type IFilter,
  initialDateData,
} from 'src/components/orders/all/OrderFilter/filterReducer';
import { DateControls } from 'src/components/ui/filters/DateControls';
import {
  type IBaseBadgeFilterProps,
  useFilter,
} from 'src/components/ui/filters/useFilter';

type IBadgeFilterDateProps = {
  dispatch: Dispatch<IChangeFilterAction>;
  filter: IFilter;
} & IBaseBadgeFilterProps;

export const BadgeFilterDate = ({
  dispatch,
  dropdownTitle,
  filter,
  label,
}: IBadgeFilterDateProps) => {
  const [editingValue, setEditingValue] = useState<IDateFilterData>(
    filter.dateData,
  );
  const [rangeType, setRangeType] = useState<IDateRangeType>('is in the last');

  const dispatchDateValues = (value: IDateFilterData) => {
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
      dispatchDateValues(initialDateData);
    } else {
      dispatchDateValues(editingValue);
    }
  };

  const { renderWrapper, setFilterText } = useFilter({
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
    <DateControls
      onChange={setEditingValue}
      onChangeFilterText={setFilterText}
      rangeType={rangeType}
      setRangeType={setRangeType}
      value={editingValue}
    />,
  );
};
