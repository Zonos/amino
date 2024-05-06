import { type Dispatch, useCallback, useState } from 'react';

import { DateControls } from 'src/components/filter/filter-date/DateControls';
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

  const dispatchDateValues = useCallback(
    (value: FilterDateData) => {
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
    },
    [dispatch, rangeType],
  );

  const handleApplyEditingState = useCallback(() => {
    dispatch({
      name: 'dateRangeType',
      type: 'change',
      value: rangeType,
    });
    dispatch({
      name: 'dateData.dateBegin',
      type: 'change',
      value: editingValue.dateBegin || null,
    });
    dispatch({
      name: 'dateData.dateEnd',
      type: 'change',
      value: editingValue.dateEnd || null,
    });
    dispatch({
      name: 'dateData.lastCount',
      type: 'change',
      value: editingValue.lastCount,
    });
    dispatch({
      name: 'dateData.lastUnit',
      type: 'change',
      value: editingValue.lastUnit,
    });
    dispatch({
      name: 'isActive',
      type: 'change',
      value: true,
    });
  }, [
    dispatch,
    editingValue.dateBegin,
    editingValue.dateEnd,
    editingValue.lastCount,
    editingValue.lastUnit,
    rangeType,
  ]);

  const handleApplyFilterText: FilterApplyCallback = useCallback(
    setFilterText => {
      setFilterText(editingFilterText);
    },
    [editingFilterText],
  );

  const handleApply: FilterApplyCallback = useCallback(
    setFilterText => {
      handleApplyEditingState();
      handleApplyFilterText(setFilterText);
    },
    [handleApplyEditingState, handleApplyFilterText],
  );

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
    isActive: filter.isActive,
    label,
    onApply: handleApply,
    onApplyFilterText: handleApplyFilterText,
    onClose: handleClose,
    onRemove: handleRemove,
    setActive: active =>
      dispatch({
        name: 'isActive',
        type: 'change',
        value: active,
      }),
  });

  const handleChangeFilterText = (text: string) => {
    setEditingFilterText(text);
  };

  return renderWrapper(
    <DateControls
      onChange={setEditingValue}
      onChangeFilterText={handleChangeFilterText}
      rangeType={rangeType}
      setRangeType={setRangeType}
      value={editingValue}
    />,
  );
};
