import { useEffect, useMemo } from 'react';

import dayjs from 'dayjs';

import {
  type _DateControlProps,
  DateControlsWrapper,
  defaultDateFormat,
  formatDate,
} from 'src/components/filter/filter-date/DateControlsWrapper';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';

/** Inclusive */
export const IsBetween = ({
  onChange,
  onChangeFilterText,
  value,
}: _DateControlProps) => {
  const { dateBegin, dateEnd } = useMemo(
    () => ({
      dateBegin: value.dateBegin || dayjs().format(defaultDateFormat),
      dateEnd: value.dateEnd || dayjs().format(defaultDateFormat),
    }),
    [value],
  );

  const displayDateEnd = dateEnd;
  const displayDateBegin = dateBegin;
  const handleChangeDateBegin = (val: string) => {
    onChange({
      dateBegin: val,
      dateEnd,
      lastCount: 5,
      lastUnit: 'days',
    });
  };

  const handleChangeDateEnd = (val: string) => {
    onChange({
      dateBegin,
      dateEnd: val,
      lastCount: 5,
      lastUnit: 'days',
    });
  };

  useEffect(() => {
    const filterText = `${formatDate(displayDateBegin)} - ${formatDate(
      displayDateEnd,
    )}`;
    onChangeFilterText(filterText);
  }, [onChangeFilterText, displayDateEnd, displayDateBegin]);

  useEffect(() => {
    onChange({
      dateBegin,
      dateEnd,
      lastCount: 5,
      lastUnit: 'days',
    });
  }, [dateEnd, dateBegin, onChange]);

  return (
    <DateControlsWrapper>
      <Input
        onChange={ev => handleChangeDateBegin(ev.target.value)}
        size="sm"
        type="date"
        value={displayDateBegin}
      />
      <Text type="label">and</Text>
      <Input
        onChange={ev => handleChangeDateEnd(ev.target.value)}
        size="sm"
        type="date"
        value={displayDateEnd}
      />
    </DateControlsWrapper>
  );
};
