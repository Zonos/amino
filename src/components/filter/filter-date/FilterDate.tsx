import { type Dispatch, useCallback, useState } from 'react';

import dayjs from 'dayjs';

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

import { defaultDateFormat } from './DateControlsWrapper';

export type FilterDateProps = BaseFilterProps & {
  dispatch: Dispatch<FilterDateAction>;
  filter: FilterDateState;
};

/**
 * FilterDate provides an interface for filtering by date ranges.
 * It supports various range types such as "is between", "is equal to", "is on or after", and "is before or on".
 * The component handles date formatting, adjustments, and integrates with the filter wrapper system.
 *
 * @example Basic usage with a reducer
 * ```tsx
 * const [filter, dispatch] = useReducer(filterDateReducer, initialFilterDateState);
 *
 * <FilterDate
 *   dispatch={dispatch}
 *   dropdownTitle="Date Range"
 *   filter={filter}
 *   label="Date"
 * />
 * ```
 *
 * @example With specific initial date filter
 * ```tsx
 * const [filter, dispatch] = useReducer(filterDateReducer, {
 *   ...initialFilterDateState,
 *   dateRangeType: 'is on or after',
 *   dateData: {
 *     ...initialFilterDateState.dateData,
 *     dateBegin: '2025-01-01'
 *   }
 * });
 *
 * <FilterDate
 *   dispatch={dispatch}
 *   dropdownTitle="Created"
 *   filter={filter}
 *   label="Creation Date"
 * />
 * ```
 *
 * @example With "last N days" filtering
 * ```tsx
 * const [filter, dispatch] = useReducer(filterDateReducer, {
 *   ...initialFilterDateState,
 *   dateRangeType: 'last',
 *   dateData: {
 *     ...initialFilterDateState.dateData,
 *     lastCount: 30,
 *     lastUnit: 'days'
 *   }
 * });
 *
 * <FilterDate
 *   dispatch={dispatch}
 *   dropdownTitle="Recent"
 *   filter={filter}
 *   label="Recent Activity"
 * />
 * ```
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

  // adjusts the date to set the filter to be inclusive of the entered value
  const getAdjustedDate = ({
    date,
    type,
  }: {
    date: string | null;
    type: 'begin' | 'end';
  }) => {
    if (!date) {
      return null;
    }
    switch (rangeType) {
      case 'is between':
      case 'is equal to':
        if (type === 'begin') {
          return dayjs(date).subtract(1, 'days').format(defaultDateFormat);
        }
        if (type === 'end') {
          return dayjs(date).add(1, 'days').format(defaultDateFormat);
        }
        return date;
      case 'is on or after':
        if (type === 'end') {
          return date;
        }
        return dayjs(date).subtract(1, 'days').format(defaultDateFormat);
      case 'is before or on':
        if (type === 'begin') {
          return date;
        }
        return dayjs(date).add(1, 'days').format(defaultDateFormat);
      default:
        return date;
    }
  };

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
        value:
          getAdjustedDate({ date: value.dateBegin, type: 'begin' }) || null,
      });
      dispatch({
        name: 'dateData.dateEnd',
        type: 'change',
        value: getAdjustedDate({ date: value.dateEnd, type: 'end' }) || null,
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
      value: getAdjustedDate({ date: editingValue.dateBegin, type: 'begin' }),
    });
    dispatch({
      name: 'dateData.dateEnd',
      type: 'change',
      value: getAdjustedDate({ date: editingValue.dateEnd, type: 'end' }),
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
