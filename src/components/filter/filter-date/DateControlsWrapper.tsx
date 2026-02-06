import type { ReactNode } from 'react';

import dayjs from 'dayjs';

import type { FilterDateData } from 'src/components/filter/filter-date/filterDateReducer';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type _DateControlProps = {
  onChange: (value: FilterDateData) => void;
  onChangeFilterText: (text: string) => void;
  value: FilterDateData;
};

export const formatDate = (date: string) => dayjs(date).format('MM/DD/YYYY');

export const defaultDateFormat = `YYYY-MM-DD`;

export const DateControlsWrapper = ({
  children,
  className,
  style,
}: BaseProps & { children: ReactNode }) => (
  <div
    className={cn(
      'w-full grid auto-cols-max gap-2 grid-flow-col items-center',
      className,
    )}
    style={style}
  >
    {children}
  </div>
);
