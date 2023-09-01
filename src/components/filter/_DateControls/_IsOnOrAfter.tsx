import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import { Input } from '@zonos/amino/components/input/Input';

import type { IDateControlProps } from 'src/components/ui/filters/DateControls';
import {
  DateControlsWrapper,
  defaultDateFormat,
  formatDate,
} from 'src/components/ui/filters/DateControls';

export const IsOnOrAfter = ({
  onChange,
  onChangeFilterText,
  value,
}: IDateControlProps) => {
  const date = useMemo(
    () => value.dateBegin || dayjs().format(defaultDateFormat),
    [value],
  );

  const displayDate = dayjs(date).add(1, 'days').format(defaultDateFormat);

  const handleChange = useCallback(
    (val: string) => {
      onChange({
        dateBegin: dayjs(val).subtract(1, 'days').format(defaultDateFormat),
        dateEnd: null,
        lastCount: 5,
        lastUnit: 'days',
      });
    },
    [onChange],
  );

  useEffect(() => {
    const filterText = `Starting from ${formatDate(displayDate)}`;
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
