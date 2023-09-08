import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import {
  type _DateControlProps,
  DateControlsWrapper,
  defaultDateFormat,
  formatDate,
} from 'src/components/filter/filter-date/temp';
import { Input } from 'src/components/input/Input';

export const IsBeforeOrOn = ({
  onChange,
  onChangeFilterText,
  value,
}: _DateControlProps) => {
  const date = useMemo(
    () => value.dateEnd || dayjs().format(defaultDateFormat),
    [value],
  );

  const displayDate = dayjs(date).subtract(1, 'days').format(defaultDateFormat);

  const handleChange = useCallback(
    (val: string) => {
      onChange({
        dateBegin: null,
        dateEnd: dayjs(val).add(1, 'days').format(defaultDateFormat),
        lastCount: 5,
        lastUnit: 'days',
      });
    },
    [onChange],
  );

  useEffect(() => {
    const filterText = `Ending on ${formatDate(displayDate)}`;
    onChangeFilterText(filterText);
  }, [displayDate, onChangeFilterText]);

  useEffect(() => {
    handleChange(date);
  }, [date, handleChange]);

  return (
    <DateControlsWrapper>
      <Input
        onChange={ev => handleChange(ev.target.value)}
        size="sm"
        type="date"
        value={displayDate}
      />
    </DateControlsWrapper>
  );
};
