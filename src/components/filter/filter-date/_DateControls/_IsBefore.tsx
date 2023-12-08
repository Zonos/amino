import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import {
  type _DateControlProps,
  DateControlsWrapper,
  defaultDateFormat,
  formatDate,
} from 'src/components/filter/filter-date/DateControlsWrapper';
import { Input } from 'src/components/input/Input';

export const IsBefore = ({
  onChange,
  onChangeFilterText,
  value,
}: _DateControlProps) => {
  const date = useMemo(
    () => value.dateEnd || dayjs().format(defaultDateFormat),
    [value],
  );

  const handleChange = useCallback(
    (val: string) => {
      onChange({
        dateBegin: null,
        dateEnd: val,
        lastCount: 5,
        lastUnit: 'days',
      });
    },
    [onChange],
  );

  useEffect(() => {
    onChangeFilterText(`Before ${formatDate(date)}`);
  }, [date, onChangeFilterText]);

  useEffect(() => {
    handleChange(date);
  }, [date, handleChange]);

  return (
    <DateControlsWrapper>
      <Input
        onChange={ev => handleChange(ev.target.value)}
        size="sm"
        type="date"
        value={date}
      />
    </DateControlsWrapper>
  );
};
