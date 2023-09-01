import { useCallback, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import { Input } from '@zonos/amino/components/input/Input';

import type { IDateControlProps } from 'src/components/ui/filters/DateControls';
import {
  DateControlsWrapper,
  defaultDateFormat,
  formatDate,
} from 'src/components/ui/filters/DateControls';

export const IsAfter = ({
  onChange,
  onChangeFilterText,
  value,
}: IDateControlProps) => {
  const date = useMemo(
    () => value.dateBegin || dayjs().format(defaultDateFormat),
    [value],
  );

  const handleChange = useCallback(
    (val: string) => {
      onChange({
        dateBegin: val,
        dateEnd: null,
        lastCount: 5,
        lastUnit: 'days',
      });
    },
    [onChange],
  );

  useEffect(() => {
    onChangeFilterText(`After ${formatDate(date)}`);
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
