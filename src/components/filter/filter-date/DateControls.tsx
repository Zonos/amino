import { type KeyboardEvent, useState } from 'react';

import { IsAfter } from 'src/components/filter/filter-date/_DateControls/_IsAfter';
import { IsBefore } from 'src/components/filter/filter-date/_DateControls/_IsBefore';
import { IsBeforeOrOn } from 'src/components/filter/filter-date/_DateControls/_IsBeforeOrOn';
import { IsBetween } from 'src/components/filter/filter-date/_DateControls/_IsBetween';
import { IsEqualTo } from 'src/components/filter/filter-date/_DateControls/_IsEqualTo';
import { IsInTheLast } from 'src/components/filter/filter-date/_DateControls/_IsInTheLast';
import { IsOnOrAfter } from 'src/components/filter/filter-date/_DateControls/_IsOnOrAfter';
import {
  type FilterDateData,
  filterDateRanges,
  type FilterDateRangeType,
  initialFilterDateState,
} from 'src/components/filter/filter-date/filterDateReducer';
import { Select } from 'src/components/select/Select';
import { ArrowRightIcon } from 'src/icons/ArrowRightIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './DateControls.module.scss';

const optionsDate = filterDateRanges.map(r => ({
  label: r,
  value: r,
}));

type DateControlProps = BaseProps & {
  onChange: (value: FilterDateData) => void;
  onChangeFilterText: (text: string) => void;
  rangeType: FilterDateRangeType;
  setRangeType: (range: FilterDateRangeType) => void;
  value: FilterDateData;
};

export const DateControls = ({
  onChange,
  onChangeFilterText,
  rangeType,
  setRangeType,
  value,
}: DateControlProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderRangeControl = () => {
    switch (rangeType) {
      case 'is in the last':
        return (
          <IsInTheLast
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is equal to':
        return (
          <IsEqualTo
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is after':
        return (
          <IsAfter
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is before':
        return (
          <IsBefore
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is between':
        return (
          <IsBetween
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is on or after':
        return (
          <IsOnOrAfter
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      case 'is before or on':
        return (
          <IsBeforeOrOn
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
      default:
        return (
          <IsEqualTo
            onChange={onChange}
            onChangeFilterText={onChangeFilterText}
            value={value}
          />
        );
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (menuOpen) {
        event.stopPropagation();
      }
    }
  };

  return (
    <>
      <Select
        isClearable={false}
        onChange={item => {
          setRangeType(item?.value || initialFilterDateState.dateRangeType);
        }}
        onKeyDown={handleKeyDown}
        onMenuClose={() => setMenuOpen(false)}
        onMenuOpen={() => setMenuOpen(true)}
        options={optionsDate}
        size="sm"
        value={optionsDate.filter(item => item.value === rangeType)}
      />
      <div className={styles.controlsValueWrapper}>
        <ArrowRightIcon color="blue600" />
        {renderRangeControl()}
      </div>
    </>
  );
};
