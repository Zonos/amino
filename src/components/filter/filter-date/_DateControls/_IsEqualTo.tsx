import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import {
  type _DateControlProps,
  DateControlsWrapper,
  defaultDateFormat,
  formatDate,
} from 'src/components/filter/filter-date/DateControlsWrapper';
import { Input } from 'src/components/input/Input';

export const IsEqualTo = ({
  onChange,
  onChangeFilterText,
  value,
}: _DateControlProps) => {
  const date = useMemo(
    () => value.dateBegin || dayjs().format(defaultDateFormat),
    [value],
  );

  const displayDate = dayjs(date).add(1, 'days').format(defaultDateFormat);

  const handleChange = useCallback(
    (val: string) => {
      onChange({
        dateBegin: dayjs(val).subtract(1, 'days').format(defaultDateFormat),
        dateEnd: dayjs(val).add(1, 'days').format(defaultDateFormat),
        lastCount: 5,
        lastUnit: 'days',
      });
    },
    [onChange],
  );

  useEffect(() => {
    onChangeFilterText(`On ${formatDate(displayDate)}`);
  }, [displayDate, onChangeFilterText]);

  useEffect(() => {
    handleChange(displayDate);
  }, [displayDate, handleChange]);

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
