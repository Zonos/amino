import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import {
  type FilterDateLastRangeUnit,
  dateUnits,
} from 'src/components/filter/filter-date/filterDateReducer';
import {
  type _DateControlProps,
  DateControlsWrapper,
  defaultDateFormat,
} from 'src/components/filter/filter-date/temp';
import { Input } from 'src/components/input/Input';
import { Select } from 'src/components/select/Select';
import type { IOption } from 'src/types/IOption';

const dateUnitOptions: IOption<'days' | 'months'>[] = dateUnits.map(x => ({
  label: x,
  value: x,
}));

export const IsInTheLast = ({
  onChange,
  onChangeFilterText,
  value,
}: _DateControlProps) => {
  const dateEnd = dayjs().format(defaultDateFormat);

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
      if (newUnit === 'days') {
        const dateBegin = dayjs()
          .subtract(value.lastCount, value.lastUnit)
          .format(defaultDateFormat);
        onChange({
          dateBegin,
          dateEnd,
          lastCount: count,
          lastUnit: newUnit,
        });
      } else {
        // months
        const dateBegin = dayjs()
          .subtract(1, 'months')
          .format(defaultDateFormat);
        onChange({
          dateBegin,
          dateEnd,
          lastCount: count,
          lastUnit: newUnit,
        });
      }
    },
    [count, dateEnd, onChange, value.lastCount, value.lastUnit],
  );

  const handleChangeCount = useCallback(
    (newCount: number) => {
      const dateBegin = dayjs()
        .subtract(newCount, 'days')
        .format(defaultDateFormat);
      onChange({
        dateBegin,
        dateEnd,
        lastCount: newCount,
        lastUnit: unit,
      });
    },
    [dateEnd, onChange, unit],
  );

  useEffect(() => {
    handleChangeCount(5);
  }, [handleChangeCount]);

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
        // eslint-disable-next-line react/jsx-no-useless-fragment -- needed to get rid of number input arrows
        suffix={<></>}
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
