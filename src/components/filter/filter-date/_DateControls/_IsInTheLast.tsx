import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import {
  type _DateControlProps,
  DateControlsWrapper,
  defaultDateFormat,
} from 'src/components/filter/filter-date/DateControlsWrapper';
import {
  dateUnits,
  type FilterDateLastRangeUnit,
} from 'src/components/filter/filter-date/filterDateReducer';
import { Input } from 'src/components/input/Input';
import { Select } from 'src/components/select/Select';
import type { SelectOption } from 'src/types/SelectOption';

const dateUnitOptions: SelectOption<FilterDateLastRangeUnit>[] = dateUnits.map(
  x => ({
    label: x,
    value: x,
  }),
);

export const IsInTheLast = ({
  onChange,
  onChangeFilterText,
  value,
}: _DateControlProps) => {
  const { count, unit } = useMemo<{
    count: number;
    unit: FilterDateLastRangeUnit;
  }>(
    () => ({
      count: value.lastCount,
      unit: value.lastUnit,
    }),
    [value],
  );

  const handleChangeUnit = useCallback(
    (newUnit: (typeof dateUnitOptions)[number]['value']) => {
      const dateBegin = dayjs()
        .subtract(count, newUnit)
        .format(defaultDateFormat);
      onChange({
        dateBegin,
        dateEnd: null,
        lastCount: count,
        lastUnit: newUnit,
      });
    },
    [count, onChange],
  );

  const handleChangeCount = useCallback(
    (newCount: number) => {
      const dateBegin = dayjs()
        .subtract(newCount, unit)
        .format(defaultDateFormat);
      onChange({
        dateBegin,
        dateEnd: null,
        lastCount: newCount,
        lastUnit: unit,
      });
    },
    [onChange, unit],
  );

  useEffect(() => {
    const dateBegin = dayjs().subtract(count, unit).format(defaultDateFormat);
    onChange({
      dateBegin,
      dateEnd: null,
      lastCount: count,
      lastUnit: unit,
    });
  }, [count, onChange, unit]);

  useEffect(() => {
    const filterText = `Last ${count} ${unit}`;
    onChangeFilterText(filterText);
  }, [unit, count, onChangeFilterText]);

  return (
    <DateControlsWrapper>
      <Input
        min={1}
        onChange={ev => handleChangeCount(parseFloat(ev.target.value))}
        size="sm"
        suffix={null}
        type="number"
        value={String(count)}
      />
      <Select
        isClearable={false}
        onChange={item => {
          handleChangeUnit(item?.value || 'days');
        }}
        options={dateUnitOptions}
        size="sm"
        value={dateUnitOptions.filter(item => item.value === unit)}
      />
    </DateControlsWrapper>
  );
};
