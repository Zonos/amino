import type { ReactNode } from 'react';

import clsx from 'clsx';
import dayjs from 'dayjs';

import type { FilterDateData } from 'src/components/filter/filter-date/filterDateReducer';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './DateControls.module.scss';

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
  <div className={clsx(styles.dateControlsWrapper, className)} style={style}>
    {children}
  </div>
);
