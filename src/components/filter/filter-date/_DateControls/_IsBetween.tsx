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
      dateBegin:
        value.dateBegin ||
        dayjs().subtract(1, 'days').format(defaultDateFormat),
      dateEnd:
        value.dateEnd || dayjs().add(1, 'days').format(defaultDateFormat),
    }),
    [value],
  );

  const displayDateEnd = dayjs(dateEnd)
    .subtract(1, 'days')
    .format(defaultDateFormat);
  const displayDateBegin = dayjs(dateBegin)
    .add(1, 'days')
    .format(defaultDateFormat);

  const handleChangeDateBegin = (val: string) => {
    onChange({
      dateBegin: dayjs(val).subtract(1, 'days').format(defaultDateFormat),
      dateEnd,
      lastCount: 5,
      lastUnit: 'days',
    });
  };

  const handleChangeDateEnd = (val: string) => {
    onChange({
      dateBegin,
      dateEnd: dayjs(val).add(1, 'days').format(defaultDateFormat),
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
